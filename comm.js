var i = confirm("Отрубили Э/Э ??? .Если да то ОК Нет - отмена");
if (i==true){

var y=prompt('Кто подтвердил? .Если неизвестно то Отмена',  );

if (y==null){

document.getElementById("group_def_tab-history_form-new_comment").value ='РЭС подтвердил отключение электроэнергии';
$( "button[id='group_def_tab-history_form-add_comment']" ).click();
}
else
document.getElementById("group_def_tab-history_form-new_comment").value ='Отключение электроэнергии подтвердил '+y ;
 $( "button[id='group_def_tab-history_form-add_comment']" ).click();
}

else document.getElementById("group_def_tab-history_form-new_comment").value ='РЭС не подтвердил отключение Э/Э' ;
$( "button[id='group_def_tab-history_form-add_comment']" ).click();
