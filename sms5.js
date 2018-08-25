document.getElementById('text').focus();

setTimeout(function() {
var result = $("#text").val();
//var t = "Морки";
//$('[data-position *= "'+t+'"]').click();
var arr = result.split(',');
var nameer = arr[1];
  if (nameer.indexOf('Ульяновская')>=0){
$( "li[data-tab='tab-10']" ).click();
  var result = $("#text").val();


//var arr = result.split(',');
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
}
  if (nameer.indexOf('Пензенская')>=0){
$( "li[data-tab='tab-6']" ).click();
  var result = $("#text").val();


//var arr = result.split(',');
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
}

if (nameer.indexOf('Чувашская')>=0){
$( "li[data-tab='tab-7']" ).click();
  document.getElementById("phone465").click();
  var result = $("#text").val();


//var arr = result.split(',');
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
}
  
  
  
  if (nameer.indexOf('Марий')>=0){
$( "li[data-tab='tab-31']" ).click();
    document.getElementById("phone1985").click();
  var result = $("#text").val();


//var arr = result.split(',');
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
}

  if (nameer.indexOf('Удмуртская')>=0){
$( "li[data-tab='tab-39']" ).click();
  document.getElementById("phone2409").click();
  var result = $("#text").val();
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();

  
       
       

var nameer1 = arr[2];
  if (nameer.indexOf(' Сарап')>=0){
document.getElementById("phone2413").click();
    document.getElementById("phone2402").click();
    document.getElementById("phone2403").click();
}
       
  }
   if (nameer.indexOf('Оренбургская')>=0){
$( "li[data-tab='tab-42']" ).click();
  document.getElementById("phone2584").click();
  var result = $("#text").val();
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
   }
  
  
  if (nameer.indexOf('Сарат')>=0){
$( "li[data-tab='tab-38']" ).click();
  document.getElementById("phone2325").click();
  var result = $("#text").val();
var t = arr[2].trim();
$('[data-keyword *= "'+t+'"]').click();
   }
  
  
  
}, 2000);
