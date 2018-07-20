if (!$( "div[class='ui-grid-col-9']" )[6]) {
    document.getElementById('group_interaction_info_form-tab_view-group_interaction_type_1').click();
    setTimeout(function() {
        document.getElementById('group_interaction_rule_frame_form-selected_group_problem_rule_type_4').click();
    }, 1000);
    setTimeout(function() {
        document.getElementById('group_interaction_rule_frame_form-connection_unit_rule_access_type_4').click();
    }, 1000);

} else {

     $( "div[class='ui-grid-col-12 text-right']" )[1].firstChild.click();


    var date = new Date,
        day = date.getDate() + 1,
        month = date.getMonth() + 1,
        year = date.getYear() + 1900,
        hour = date.getHours(),
        minutes = date.getMinutes();
    day < 10 && (day = "0" + day), month < 10 && (month = "0" + month), minutes < 10 && (minutes = "0" + minutes), hour < 10 && (hour = "0" + hour);

    setTimeout(function() {
        if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Чувашская РЕСП') > 1) {
            reg = 'Чувашский филиал';
           
        }
        if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Ульяновская ОБЛ') > 1) {
            reg = 'Ульяновский филиал';
            
        }
	    
	    if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Марий Эл РЕСП') > 1) {
            reg = 'Марий Эл РЕСП';
            
        }
	    
	    if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Кировская ') > 1) {
            reg = 'Кировская ОБЛ';
            
        }
	     if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Саратовская ') > 1) {
            reg = 'Саратовская ОБЛ';
            
        }
	    if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Удмуртская ') > 1) {
            reg = 'Удмуртская РЕСП';
            
        }
	     if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Мордовия') > 1) {
            reg = 'Республика Мордовия';
            
        }
        if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Нижегородская ОБЛ') > 1) {
            reg = 'Нижегородский филиал';
			 if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Нижний Новгород Г') > 1) {
				$( "tr[data-label='ОМССиИС МРФ Волга']" )[0].click();
			 }
        }
	if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Пензенская ОБЛ') > 1) {
            reg = 'Пензенский филиал';
            
        }
    var text = "Аварийная ситуация на сети ПАО Ростелеком,  проводятся аварийно-восстановительные работы. Не доступны услуги (доступ в Интернет, Интерактивного ТВ, ) для  абонентов " + document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value;
        document.getElementById("group_interaction_info_form-tab_view-businessInteraction").value = text, document.getElementById("group_interaction_info_form-tab_view-commentary").value = text + " Предполагаемое время восстановления сервисов " + hour           +            ":" + minutes + " " + day + "." + month + "." + year    }, 1000);
   // alert($( "span[class='heading-accent']" )[0].innerText.replace(' - Регистрация', ''));
    //setTimeout(function() {
      //  $( "button[class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ui-priority-primary']" ).click();
    //}, 5000);
}
