chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  //console.log(JSON.stringify(message));
  //alert(JSON.stringify(message));
  //got the data at this point, need to do something with it!
  
  var actualCode = `var data=${ message };
  data=atob(data);
  console.log(data);
  var xmlDoc = $.parseXML(data),
  $xml = $(xmlDoc);
  window.pqt.functions.parseSDD($xml, false);
  window.pqt.functions.setupApp();
  `;
  
  var script = document.createElement('script');
  script.textContent = actualCode;
  (document.head||document.documentElement).appendChild(script);
  script.remove();

});