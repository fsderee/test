mainUrl='https://raw.githubusercontent.com/fsderee/sms/master/';

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); 
	xmlHttp.send( null );
   return xmlHttp.responseText;
}


if((document.location.href).indexOf('10.78.16.120:8080/argus/')>=0){
	actoinScript=mainUrl+'comm.js';
	eval(httpGet(actoinScript));
}
if((document.location.href).indexOf('http://wiki.kortkeros.com/sms2/')>=0){
	actoinScript=mainUrl+'sms5.js';
	eval(httpGet(actoinScript));
}
if(('    '+document.location.href).indexOf('http://nagios.ulrt.net/')>1){
	getUrl='ulnag';
}
if(('    '+document.location.href).indexOf('http://fttb.mts-nn.ru/')>1){
	getUrl='fttbnn';
}

//if(getUrl.length>1){
	//actoinScript=mainUrl+'sms4.js';
	//eval(httpGet(actoinScript));
//}else{
	//alert("Данная страница пока не поддерживается(((");
//}
