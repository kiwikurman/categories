debugger;


chrome.runtime.sendMessage({what: "get_dict"}, function(response) {
  console.log(response.farewell);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.status == "categories and colors") {
      categorized_labels = request.the_categories;
      colors = request.the_colors;
     
      sums = {}; 	    
      set_attributes();
      
      sum_prices_per_category();
      add_colors();
      display_sorted_rows();
    }
  }
);


function set_attributes() {  //set the category attributes 
  $("tr.item, tr.alternatingItem").each(function() { 
    $this = $(this); 
    var name = $(this.children[1]).find("span").attr("title"); 
    this.setAttribute("category", "unknown"); 
    for (var i = 0; i < categorized_labels.values.length; i++) { 
        if (name == categorized_labels.values[i].label) { 
            this.setAttribute("category", categorized_labels.values[i].category); 
        } 
    } 
  }); 
}
  //sum evry category 
function sum_prices_per_category() {
  matched = $("tr.item, tr.alternatingItem").each(function() { 
    var cat = $(this).attr("category"); 
    var price =  parseFloat($(this).children()[4].innerText.replace(',', '')); 
    if (!(cat in sums)) { 
        sums[cat] = price; 
    } else { 
      sums[cat] += price; 
    } 
  }); 
}
    
function add_colors() {
  matched = $("tr.item, tr.alternatingItem").each(function() { 
    var cat = $(this).attr("category"); 
    $(this).css('background-color', colors[cat]); 
  }); 
}
 
function display_sorted_rows() { 
  var sorted_matched = matched.sort(function(a,b) { 
      return a.getAttribute("category").localeCompare(b.getAttribute("category")); 
  }) 
   
  //put everything in one table 
  var old_body = $("table.dataTable.summaryGrid > tbody")[0]; 
  var new_body = document.createElement('tbody'); 
  for (var i = 0; i < sorted_matched.length; i++) { 
      new_body.appendChild(sorted_matched[i].cloneNode(true)); 
  } 
  old_body.parentNode.replaceChild(new_body, old_body); 
   
   
  //delete everything else 
  for (var i=1; i < $("table.dataTable.summaryGrid > tbody").length; i++) { 
    var body_to_delete = $("table.dataTable.summaryGrid > tbody")[i]; 
    var empty_body = document.createElement('tbody'); 
    body_to_delete.parentNode.replaceChild(empty_body, body_to_delete); 
  } 
   
   
  var row_string = '<tr><td></td><td></td><td></td><td>{0}</td><td>{1}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'; 
   
  Object.keys(sums).forEach(function(category) { 
    var x = $(new_body).find("tr[category='" + category + "']:last"); 
    if (typeof x !== 'undefined') { 
      x.after(row_string.replace("{0}", category).replace("{1}", sums[category])); 
    }	 
  }) 
}



