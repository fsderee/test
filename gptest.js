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
            setTimeout(function() {
            $( "tr[data-label='ОМССиИС МРФ Волга']" )[0].click();
            }, 1000);
        }
        if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Ульяновская ОБЛ') > 1) {
            reg = 'Ульяновский филиал';
            $( "tr[data-label='ОМССиИС МРФ Волга']" )[0].click();
        }
        if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Нижегородская ОБЛ') > 1) {
            reg = 'Нижегородский филиал';
            $( "tr[data-label='ОМССиИС МРФ Волга']" )[0].click();
        }
        if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Саратовская ОБЛ') > 1) {
            reg = 'Саратовский филиал';
            $( "tr[data-label='ОМССиИС МРФ Волга']" )[0].click();
        }
	if (document.getElementById("group_interaction_info_form-tab_view-node_rule_building-node_rule_building_input").value.indexOf('Пензенская ОБЛ') > 1) {
            reg = 'Пензенский филиал';
            $( "tr[data-label='ОМССиИС МРФ Волга']" )[0].click();
        }
        var text = reg + ", отсутствуют услуги у абонентов " + document.getElementById("group_interaction_info_form-tab_view-node_rule_building-
node_rule_building_input").value;
        document.getElementById("group_interaction_info_form-tab_view-businessInteraction").value = text, document.getElementById("group_interaction_info_form-tab_view-
commentary").value = text + " Ожидаемое время восстановления " + hour           +            ":" + minutes + " " + day + "." + month + "." + year    }, 1000);
    alert($(".ui-grid-col-7")[0].innerText.replace(' - Регистрация', ''));
    setTimeout(function() {
        document.getElementById('global_editor-form-save').click();
