$.extend($.fn.validatebox.defaults.rules, {
	positiveInt: {// 正整数
        validator: function (value) {
            return value > 0 && /^[0-9]*$/.test(value);
        },
        message: '请输入正整数'
  },
  
  studentNum : {// 学号
    validator : function(value) {
      return /^2015\d{8}$/.test(value);
    },
    message : '学号格式为以2015开头的12位数字!'
  },
  
  //移动手机号码验证
  mobile: {//value值为文本框中的值
      validator: function (value) {
          var reg = /^1[3|4|5|8|9]\d{9}$/;
          return reg.test(value);
      },
      message: '手机号码格式不正确!'
  },
  
  idcard : {// 验证身份证
    validator : function(value) {
      return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value) || /^\d{18}(\d{2}[A-Za-z0-9])?$/i.test(value);
    },
    message : '身份证格式不正确!'
  },
  
  chinese : {// 验证中文
    validator : function(value) {
      return /^[\u0391-\uFFE5]+$/i.test(value);
    },
    message : '请输入中文!'
  },
  
  //When the selected date is greater than specified date. The field validator will raise an error.
  md: {
    validator: function(value, param){
        var d1 = $.fn.datebox.defaults.parser(param[0]);
        var d2 = $.fn.datebox.defaults.parser(value);
        return d2<=d1;
    },
    message: 'The date must be less than or equals to {0}.'
  }
});

function yyyyMMddFormatter(date){
  var y = date.getFullYear();
  var m = date.getMonth()+1;
  var d = date.getDate();
  return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
}
function yyyyMMddParser(s){
  if (!s) return new Date();
  var ss = (s.split('-'));
  var y = parseInt(ss[0],10);
  var m = parseInt(ss[1],10);
  var d = parseInt(ss[2],10);
  if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
      return new Date(y,m-1,d);
  } else {
      return new Date();
  }
}