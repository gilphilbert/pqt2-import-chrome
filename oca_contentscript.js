//inject payload
var s = document.createElement('script');
s.src = chrome.extension.getURL('oca_payload.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
  s.remove();
};


//listen for push from payload.js
document.addEventListener('pqt_return', function (e) {
  //parse and decode the data
  var data=e.detail; //var data=atob(JSON.parse(e.detail));
  //print it (debugging)
  //console.log(data);
  chrome.runtime.sendMessage({data: data}, function(response) {
    //console.log(response.farewell);
  });
});