//send message to content and get the label:category map
//set the label in the popup html to the label to the firdt unknow in the list

document.addEventListener('DOMContentLoaded', function() {
  
  var the_button = document.getElementById('set_category');
  the_button.addEventListener('click', function() {
        set_category_to_local_storage();
  });

  get_map_from_content();
	
});


function get_map_from_content() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {what: "get_name_category_map"}, function(response) {
      if (response !== undefined && response.what == "map" ) {
	var labels = Object.keys(response.the_name_category_map);
	var category_map = response.the_name_category_map;i
	document.getElementById('category_label').innerHTML = "no unknow catagories matched";
	for (var i =0; i < labels.length; i++) {
	  if (category_map[labels[i]] == "unknown") {
	    document.getElementById('category_label').innerHTML = labels[i];
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

      document.getElementById('category_label').innerHTML = "1";
  chrome.storage.local.get("the_categories", function (obj) {

      document.getElementById('category_label').innerHTML = "2";
    var categorized_labels = obj.the_categories;

      document.getElementById('category_label').innerHTML = "3";
    categorized_labels.values.push({label: the_label, category: user_input_category});

      document.getElementById('category_label').innerHTML = "4";
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


