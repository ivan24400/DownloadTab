chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "chrome://downloads/";
  chrome.tabs.create({ url: newURL });
});