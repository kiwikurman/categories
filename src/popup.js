//send message to content and get response

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {what: "get_name_category_map"}, function(response) {
      console.log(response.the_name_category_map);
    });
  });
});


//message = aske for unknown
//response = labelse of first unknown if there is one

//change label to the unknown or say something nice if there isn't one

//get freetext category in input

//set local storage on button click


//after page reloads the dictionary will be sent to content


