chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  //console.log(message.greeting);
  //alert(message.greeting);
  //sendResponse({farewell:"goodbye"});
  var data=message.data;
  chrome.tabs.create({ url: 'http://127.0.0.1:31999/pqt2/index.html' }, function(tab){
    setTimeout(function() {
      chrome.tabs.sendMessage(tab.id, data);
    },2000);
  });
});