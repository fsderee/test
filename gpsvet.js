document.getElementById("group_def_tab-history_form-new_comment").value ='Отключение эл. энергии' ;
$( "button[id='group_def_tab-history_form-add_comment']" ).click();
setTimeout(function() {
  $( "button[id='gi_header-assignTask']" ).click();
  }, 1000);

setTimeout(function() {
  document.getElementById('reassign_dialog_form-j_idt1943_6').click();
  }, 5000);

