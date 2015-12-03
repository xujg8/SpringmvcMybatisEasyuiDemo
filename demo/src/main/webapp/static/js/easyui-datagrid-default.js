$.extend($.fn.datagrid.defaults, {
	fitColumns : true,
	nowrap : false,
	pagination : true
});

$.extend($.fn.datetimebox.defaults.formatter = function(date){
    var y = date.getFullYear();
    var M = date.getMonth()+1;
    var d = date.getDate();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    return y+'-'+M+'-'+d+' '+h+":"+m+":"+s;
//    return y+'-'+M+'-'+d;
})