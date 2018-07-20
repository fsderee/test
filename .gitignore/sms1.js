
var result = $("table tr:eq(1) td:eq(0)").text();
var y = result.split(/^\W+/);
var adres = document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value;

     
var timedown = document.getElementById("group_interaction_info_form-tab_view-calculate_due_date_form_input").value;

var mess = "Недоступно оборудование " + adres +' '+ y + " Время начала аварии " + timedown;
$("#group_interaction_info_form-tab_view-node_rule_building_out-node_rule_building_out").html('<input type="button" name="nubex" value="Nubex" />');


$("#j_idt1597-history_form-history_table-j_idt1629").html('<button class="copy" id="copyw">Перейти в СМС</button><<input class="text" id="gert" value="аааа"  />');
document.getElementById('gert').value = mess;


var button = document.querySelector('.copy');
button.addEventListener('click', function(event) {
  var text = document.querySelector('.text');
  text.select();
  document.execCommand('copy');

window.open("http://wiki.kortkeros.com/sms2/backend/web/index.php");
});
document.getElementById('copyw').click();
