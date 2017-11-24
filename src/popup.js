//send message to content and get the label:category map
//set the label in the popup html to the label to the firdt unknow in the list

document.addEventListener('DOMContentLoaded', function() {
  
  var the_button = document.getElementById('set_category');
  the_button.addEventListener('click', function() {
        set_category_to_local_storage();
  });

  set_selection_list_from_storage();
  get_unknown_label_from_content();

});

//1. set selection to dict
//2. smooth the label and set logic
//in the set button if text is empy use selection

function set_selection_list_from_storage() {
  chrome.storage.local.get("the_categories", function (obj) {
    var categorized_labels = obj.the_categories.values;
    
    //get the selector element and clear the options
    var categories_selector = document.getElementById('category_input_selector');
    while (categories_selector.firstChild) {
      categories_selector.removeChild(categories_selector.firstChild);
    }
    
    var unique_categories = [];
    categorized_labels.forEach(function(element) {
      if (unique_categories.includes(element.category) == false) {
	unique_categories.push(element.category);
	var opt = document.createElement('option');
	opt.innerHTML = element.category;
	opt.value = element.category;
	categories_selector.appendChild(opt);
      }
    });
  }); 
}

function get_unknown_label_from_content() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {what: "get_name_category_map"}, function(response) {
      if (response !== undefined && response.what == "map" ) {
	var category_map = response.the_name_category_map;
	console.log(category_map);
	for (var key in category_map) {
	  console.log(key);
	  if (category_map[key] == "unknown") {
	    var the_label = document.getElementById('category_label');
	    the_label.innerHTML = key;
	    break;
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
  var categories_selector = document.getElementById('category_input_selector');

  var selection = user_input_category.length > 0 ? user_input_category : 
    categories_selector.options[categories_selector.selectedIndex].value;
 
  chrome.storage.local.get("the_categories", function (obj) {
    var categorized_labels = obj.the_categories;
    categorized_labels.values.push({label: the_label, category: selection});
    chrome.storage.local.set({'the_categories': categorized_labels}, function() {
      console.log('dict  saved');
      document.getElementById('category_label').innerHTML = "updated... realod page and check it out";
    });
  }); 
}

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}


