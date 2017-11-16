//send message to content and get response

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {what: "get_name_category_map"}, function(response) {
      if (response !== undefined && response.what == "map" ) {
	var labels = Object.keys(response.the_name_category_map);
	var category_map = response.the_name_category_map;
	$("label").html("no unknow catagories matched");
	for (var i =0; i < labels.length; i++) {
	  if (category_map[labels[i]] == "unknown") {
	    $("label").html(labels[i]);
	    break;
	  }
	}
      }
    });
  });
});

$(".button").click(function(){ 
  var the_label = $("label").html();
  var user_input_category = $('#category_input').val();
  chrome.storage.local.get("the_categories", function (obj) {
    var categorized_labels = obj.the_categories;
    categorized_labels.push({label: the_label, category: user_input_category});
    chrome.storage.local.set({'the_categories': categorized_labels}, function() {
      console.log('dict  saved');
    });
  }); 
});
//message = aske for unknown
//response = labelse of first unknown if there is one

//change label to the unknown or say something nice if there isn't one

//get freetext category in input

//set local storage on button click


//after page reloads the dictionary will be sent to content


