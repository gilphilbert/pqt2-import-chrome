$(document).on('click','#generate_pqt2_output', function() {
  var data=maui.ajax.getServerData( {method: 'export_to_SBWorWastonConfiguration', config_name: 'Product #1', exportType: 'WQSDD'} );
  data=JSON.stringify(data.file_content);
  
  var evt=document.createEvent("CustomEvent");
  evt.initCustomEvent("pqt_return", true, true, data);
  document.dispatchEvent(evt);
});

//need to figure out when to inject this - is a function called that we can hijack?
window.setInterval(function(){
  if($('#dropdown-generateDocuments dl').length>0)
    if($('#generate_pqt2_output').length===0)
      $('#dropdown-generateDocuments dl').append('<dd class="nowrap"><a id="generate_pqt2_output">Export to PQT<small style="position:relative;top:-3px">2</small></a></dd>');  
},3000);