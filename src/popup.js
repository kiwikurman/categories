//send message to content and get the label:category map
//set the label in the popup html to the label to the firdt unknow in the list

document.addEventListener('DOMContentLoaded', function() {
  
  var the_button = document.getElementById('set_category');
  the_button.addEventListener('click', function() {
        set_category_to_local_storage();
  });

  set_selection_list();
});



function set_selection_list() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {what: "get_name_category_map"}, function(response) {
      if (response !== undefined && response.what == "map" ) {
	var categories_selector = document.getElementById('category_input_selector');
	while (categories_selector.firstChild) {
	  categories_selector.removeChild(categories_selector.firstChild);
	}

	var labels = Object.keys(response.the_name_category_map);
	var category_map = response.the_name_category_map;
	    console.log(category_map);
	var unique_categories = [];
  	for (var i in category_map) {
	  if (unique_categories.includes(category_map[i]) == false) {
	    unique_categories.push(category_map[i]);
	    var opt = document.createElement('option');
	    opt.innerHTML = category_map[i];
	    opt.value = category_map[i];
	    categories_selector.appendChild(opt);
	  }
	}
      }
    });
  });
}




//get the new category from input
//set to dict in local storage
//after the page is reloaded the new label:category is resent to the popup.
function set_category_to_local_storage() {
  var the_label = document.getElementById('category_label').innerHTML;
  var user_input_category = document.getElementById("category_input").value;

  chrome.storage.local.get("the_categories", function (obj) {
    var categorized_labels = obj.the_categories;
    categorized_labels.values.push({label: the_label, category: user_input_category});
    chrome.storage.local.set({'the_categories': categorized_labels}, function() {
      console.log('dict  saved');
      document.getElementById('category_label').innerHTML = "no unknow catagories matched";
    });
  }); 
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}


