chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  //console.log(message.greeting);
  //alert(message.greeting);
  //sendResponse({farewell:"goodbye"});
  var data=message.data;
  chrome.tabs.create({ url: 'https://gilphilbert.github.io/pqt2/' }, function(tab){
    setTimeout(function() {
      chrome.tabs.sendMessage(tab.id, data);
    },2000);
  });
});