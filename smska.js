mainUrl='https://raw.githubusercontent.com/fsderee/test/master/';



document.getElementById("group_def_tab-history_form-new_comment").value ='Дано смс ответственному подразделению' ;

$( "button[id='group_def_tab-history_form-add_comment']" ).click();

var result = $("table tr:eq(1) td:eq(0)").text();

//var y = result.split(/^\W+/);
var arr = result.split(';');
var y = '';
arr.forEach(function(element) {
    if(element.match(/\[(\d+\.){3}\d+\]/)) y = element;
});
var adres = $('#group_interaction_info_form-tab_view-node_rule_building_out-address_ac_out').text();
var timedown = $('#group_interaction_info_form-tab_view-calculate_due_date_form_out').text();
var namberGP = $( "span[class='heading-accent']" ).text();

var mess = "Недоступно оборудование " + adres +' '+ y + " Время начала аварии " + timedown+ " "+ namberGP ;
//$("#group_interaction_info_form-tab_view-node_rule_building_out-node_rule_building_out").html('<input type="button" name="nubex" value="Nubex" />');


//$("columns").html('<button class="copy" id="copyw">Перейти в СМС</button><<input class="text" id="gert" value="аааа"  />');
$( "div[class='ui-grid-col-12']" ).html('<button class="copy" id="copyw">Перейти в СМС</button><<input class="text" id="gert" value="аааа"  />');
document.getElementById('gert').value = mess;


var button = document.querySelector('.copy');
button.addEventListener('click', function(event) {
  var text = document.querySelector('.text');
  text.select();
  document.execCommand('copy');

window.open("http://omssis-sms.mts-nn.ru/sms2/backend/web/index.php");
});
document.getElementById('copyw').click();





