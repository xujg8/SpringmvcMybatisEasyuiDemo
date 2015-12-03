
// jQuery 类继承、需要较高jQuery版本支持
// @author jokee.wu
// @date 2013.10~

(function($){
    $.ajaxSetup({
    	cache:false,
    	complete: function(jqXHR, textStatus){
    		try{
    			var errorCode = $.parseJSON(jqXHR.responseText).errorCode;
        		if(errorCode == -1){
        			alert($.parseJSON(jqXHR.responseText).errorMsg);
        		}
    		}catch(e){
    			
    		}
    		
    	}
    });
    $.extend({
        // ------------------------------ 验证模块 ----------------------------------
        // 检测是否为数字
        isNumber:function(number){
            var reg = /^\d+$/;
            return reg.test(number);
        },
        // 检测是否为一个邮箱地址
        isEmail:function(email){
            var reg = /^\w+([-\.]\w+)*@\w+([\.-]\w+)*\.\w{2,4}$/;
            return reg.test(email);
        },
        // 检测是否为一个有效的电话号码
        isTel:function(tel){
            var reg = '';
            return false;
        },

        //------------------------------- 基本功能函数 ------------------------------
        // 获取一个随机数，可以是一个区间
        random:function(startNumber, endNumber){
            // 没有传递任何参数，返回[0, 1)之间任何一个数
            if(arguments.length == 0){
                return Math.random();
            }
            // 传递了一个参数，返回[0, number]之间任何一个数
            else if(arguments.length == 1){
                return Math.random()*arguments[0];
            }
            // 传递了一个参数，返回[startNumber, endNumber]之间任何一个数
            else if(arguments.length == 2){
                return Math.random()*(endNumber-startNumber)+startNumber;
            }
            // 参数错误
            else{
                console.log("function $.random(), params error!");
            }
        },
        // 将一个数转化成整数
        parseInt:function(number){
            return parseInt(number);
        },
        // 向上取整
        ceil:function(number){
            return Math.ceil(number);
        },
        // 向下取整
        floor:function(number){
            return Math.floor(number);
        },
        // 数据补零
        fillZero:function(number, long){
            var strNum = number.toString();
            var strLen = strNum.length;
            var times = long - strLen;
            for(var i = 0; i < times; i++){
                strNum = "0"+strNum;
            }
            return strNum;
        },
        // 当前时间
        date:function(){
            return new Date();
        },
        // 获取一个月天数
        xmonthDays:function(year, month){
            var date = new Date();
            var days = 0;
            // 如果没有传递参数返回当前月的天数
            if(arguments.length == 0){
                return date.getDate();
            }
            if(month == 12){
                date.setFullYear(year+1);
                date.setMonth(0);
                date.setDate(0);
                return date.getDate();
            }else{
                date.setFullYear(year);
                date.setMonth(month);
                date.setDate(0);
                return date.getDate();
            }
        },
        // 拆分一个数字
        spiltNumber:function(number, long, dir){
            var strNum = number.toString();
            var strLen = strNum.length;
            var result = "";
            // 拆分从高位开始
            if(dir == 'H'){
                result = strNum.substr(0, long);
            }
            // 如果dir参数没有传递，拆分从低位开始
            else{
                result = strNum.substr(strLen-long, strLen - 1);
            }
            return result;
        },

        //------------------------------------UI模块------------------------------------
        // 产生一种随机颜色
        randColor:function(){
            var colorElement = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
            var color = "#";
            for(var i = 0; i < 6; i++){
                var r = this.parseInt(this.random(0, 15));
                color+=colorElement[r];
            }
            return color;
        },
        // 全选以及取消全选
        selectAllToggle:function(switchId, selectItemClass){
            $("#"+switchId).click(function(){
                var checked = $(this).is(":checked");
                $("."+selectItemClass).prop("checked", checked);
            });
        },
        // 获取窗口大小
        windowSize:function(){
            return {
                    width:$(window).width(),
                    height:$(window).height()
                    };
        },
        // 重定位
        reload:function(href){
            var cureentHref = location.href;
            // 没有参数就重新加载当前页面
            if(arguments.length == 0){
                location.href = cureentHref;
            }else{
                location.href = href;
            }
        },
        //获取网页链接锚点
        anchor:function(){
            var chref = location.hash;
            // -------------------------------
            var reg = /^[#|\?]\w*/;
            // 获取锚点
            var anc = chref.match(reg);
            // 没有锚点，阻止程序运行
            if(anc==null||anc==""){
                return "#";
            }
            return anc[0];
        },
        // 实现页面刷新返回锚点
        setPos:function(tabClass, tabCtClass){
            var lhref = location.hash;
            var reg1 = /^#[\w|-]*\d/;
            // 获取锚点
            var anc = reg1.exec(lhref);
            // 没有锚点，阻止程序运行
            if(anc==null||anc==""){
                return;
            }
            // 取得数字
            var reg2 = /[0-9]*$/;
            var num = reg2.exec(anc);
            var ctId = "#"+tabCtClass+"-"+num;
            // 显示内容
            $("."+tabCtClass).removeClass("show");
            $("."+tabCtClass).addClass("hidden");
            $(ctId).removeClass("hidden");
            $(ctId).addClass("show");

            // 激活tab按钮样式
            var tbId = "#"+tabClass+"-"+num;
            $("."+tabClass).removeClass("active");
            $(tbId).addClass("active");
        },
        // tab之间切换
        tabToggle:function(tabClass, tabCtClass){
            $("."+tabClass).each(function(){
                $(this).click(function(){
                    var thisId = $(this).attr("id");
                    // 取得数字
                    var reg = /\d*$/;
                    var num = reg.exec(thisId);
                    // 对应内容区Id
                    var ctId = "#"+tabCtClass+"-"+num;
                    // 显示对应内容
                    $("."+tabCtClass).removeClass("show")
                                        .addClass("hidden");
                    $(ctId).addClass("show")
                            .removeClass("hidden");
                    // 激活按钮样式
                    $("."+tabClass).removeClass("active");
                    $(this).addClass("active");
                });
            });
        },
        // 获取一类checkbox的值
        checkboxVal:function(chkClass){
            var result = [];
            $("."+chkClass).each(function(){
                var checked = $(this).is(":checked");
                if(checked){
                    result.push($(this).val());
                }
            });
            return result;
        },
        sendAjax:function(param){
            var defaultParams = {
                url:"/",
                type:"POST",
                data:{},
                callback:""};
            var params = $.extend(defaultParams, param||{});
            $.ajax({
                url: params.url,
                type: params.type,
                data: JSON.stringify(params.data),
                contentType: "application/json",
                async: params.sync,
                success: function(data){
                    //var data = eval("("+data+")");
                    if (typeof params.callback == "function"){
                        params.callback(data);
                    }
                    else{
                        if(data.status == "success"){
                            if($.trim(data.msg) != ""){
                                bootbox.alert(data.msg,function(){
                                    $.reload();
                                })
                            }
                            else{
                                $.reload();
                            }
                        }
                        else{
                            bootbox.alert(data.msg);
                        }
                    }
                },
                error:function(){
                    bootbox.alert("error!");
                }
            });
        },
        // 获取url参数
        urlParam:function(paras){
          var url = location.href;
          var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
          var paraObj = {}
          for (i=0; j=paraString[i]; i++){
            paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
          }
          var returnValue = paraObj[paras.toLowerCase()];
          if(typeof(returnValue)=="undefined"){
            return "";
          }else{
            return returnValue;
          }
        },
        //检查是否是小数
        isDecimal: function(str){
                       var re = /^[\d]+[\.][\d]+$/;
                       if (! re.test(str)){
                           return false;
                       }
                       return true;
                   },
        //检查是否是整数
        isInteger: function(str){
                       var re = /^[0-9]\d*$/;
                       if (! re.test(str)){
                           return false;
                        }
                       return true;
                   },
        //检查是否是空或多个空格
        isNull: function(str){
                    var flag = false;
                    if ("" == str){
                        flag = true;
                    }
                    else{
                        var re = /^[ ]+$/;
                        flag = re.test(str);
                    }
                    return flag;
                },
        //检查是否满足字符长度,默认最小2,最大是15
        strLength: function(str){
                       var min = (arguments[1] + 1) ? arguments[1] : 2;
                       var max = (arguments[2] + 1) ? arguments[2] : 15;
                       if (str.length < min){
                           //bootbox.alert("输入长度要大于" + min);
                           return false;
                        }
                       else if (str.length >= max){
                           bootbox.alert("输入长度要小于" + max);
                           return false;
                        }
                       return true;
                    },
        //检查文件后缀
        checkFileSuffix: function(filename, filetype){
                             var png_type = new Array(".png");
                             var img_type = new Array(".jpg", ".jpeg", ".png");
                             var apk_type = new Array(".apk");
                             filename = filename.toLowerCase();
                             if ('png' == filetype){
                                 filetype = png_type;
                             }
                             else if ('img' == filetype){
                                 filetype = img_type;
                             }
                             else if ('apk' == filetype){
                                 filetype = apk_type;
                             }
                             var point = filename.lastIndexOf(".");
                             var type = filename.substr(point);
                             for (i=0; i<filetype.length; i++){
                                 if(type == filetype[i]){
                                     return true;
                                 }
                             }
                             return false;
                        },
        getdate: function(days){
                     var today = new Date();
                     var d = today.setDate(today.getDate() - days);
                     var d = new Date(d);
                     var year = d.getFullYear();
                     var month = d.getMonth() + 1;
                     var day = d.getDate();
                     return year + "-" + month + '-' + day;
                    }

    }); // end $.extend
})(jQuery);








// jQuery 对象级别开发

(function($){
    $.fn.extend({
        // 居中显示
        displayCenter:function(){
            var $tarEle = $(this);
            // 父级元素节点
            var $tarEleParent = $tarEle.parent();
            var tw = $tarEle.width();
            var th = $tarEle.height();
            var tpw = $tarEleParent.width();
            var tph = $tarEleParent.height();
            // 计算元素位置
            var posLeft = parseInt((tpw - tw)/2);
            var posTop = parseInt((tph - th)/2);
            $tarEle.css("position", "absolute")
                    .css("left", posLeft)
                    .css("top", posTop);
        },
        // 获取一个元素尺寸大小
        elementSize:function(){
            var $this = $(this);
            var ew = $this.width();
            var eh = $this.height();
            return {
                width:ew,
                height:eh
            };
        },
        // 激活元素
        activeEle:function(eleId){
            $(this).removeClass("active");
            $("#"+eleId).addClass("active");
        },
        // 复选框树
        checkboxTree:function(data, checkClass){
                         var iterator = function(node, $parent){
                             for(var i = 0; i < node.length; i++){
                                 var $li = $("<li><input type='checkbox' class='" + checkClass + "' value='" + node[i].id + "'/>" + node[i].text + "</li>");
                                 $parent.append($li);
                                 if(typeof node[i].children == "object" && node[i].children.length > 0){
                                     var $cul = $("<ul></ul>");
                                     var $swt = $("<span class='j-switch' style='cursor:pointer'>"+
                                             "<i class='glyphicon glyphicon-hand-up'></i></span>");
                                     $li.prepend($swt);
                                     $li.append($cul);
                                     iterator(node[i].children, $cul);
                                 }else{
                                     $li.prepend("&nbsp;");
                                 }
                             }
                         }
                         iterator(data, $(this));
                         // 实现全选功能
                         $(this).find("input[type='checkbox']").click(function(){
                                 var checked = $(this).is(":checked");
                                 $(this).parent().find("ul li input[type='checkbox']").prop("checked", checked);
                         });

                         $(".j-switch").parent().find("ul").slideUp(0);
                         $(".j-switch").click(function(){
                                 var $rtarget = $(this).parent().find(">ul");
                                 var display = $rtarget.css("display");//toggle(1000);
                                 if(display == "block"){
                                    $rtarget.slideUp(0);
                                    $(this).html("<i class='glyphicon glyphicon-hand-up'></i>");
                                 }else{
                                    $rtarget.slideDown(0);
                                    $(this).html("<i class='glyphicon glyphicon-hand-down'></i>");
                                 }
                         });

        },
        moduleTree:function(data){
            var iterator = function(node, $parent){
                for(var i = 0; i < node.length; i++){
                    var $li = $("<li><span>" + node[i].text + "</span></li>");
                    $parent.append($li);
                    if(typeof node[i].children == "object" && node[i].children.length > 0){
                        var $cul = $("<ul></ul>");
                        var $swt = $("<span class='j-switch' style='cursor:pointer'>"+
                                "<i class='glyphicon glyphicon-hand-up'></i></span>");
                        $li.prepend($swt);
                        $li.append($cul);
                        iterator(node[i].children, $cul);
                    }
                    else{
                        $li.prepend("&nbsp;");
                    }
                }
            }
            iterator(data, $(this));
            $(".j-switch").parent().find("ul").slideUp(0);
            $(".j-switch").click(function(){
                    var $rtarget = $(this).parent().find(">ul");
                    var display = $rtarget.css("display");//toggle(1000);
                    if(display == "block"){
                        $rtarget.slideUp(0);
                        $(this).html("<i class='glyphicon glyphicon-hand-up'></i>");
                    }
                    else{
                        $rtarget.slideDown(0);
                        $(this).html("<i class='glyphicon glyphicon-hand-down'></i>");
                    }
            });
        },
        updatePriority:function(url){
            var tempValue;
            $(this).focus(function(){
            // 获取原始值
                tempValue = $.trim($(this).val());
                })
                .blur(function(){
                    var id = $(this).parent().parent().find("input[type='checkbox']").val();
                    var nowValue = $.trim($(this).val());
                    if(!$.isNumber(nowValue)){
                        bootbox.alert('排序必须是数字!');
                        $(this).val(tempValue);
                        return;
                    }
                    else if(Number(nowValue)>9999){
                        bootbox.alert('排序超过范围(0~9999)');
                        $(this).val(tempValue);
                        return;
                    }
                    if(nowValue != tempValue){
                        var param = {
                            url:url,
                            data:{
                                id:id,
                                priority:nowValue
                            }
                        }
                    $.sendAjax(param);
                    }
           });
        },
        updateItemsPerPage:function(){
            var tempValue;
            var url = location.href;
            var sltVal = $.urlParam("perpage");
            var href = url.substring(0,url.indexOf("?"));
            $(this).focus(function(){
            // 获取原始值
                tempValue = $.trim($(this).val());
                })
                .blur(function(){
                    var nowValue = $.trim($(this).val());
                    if(!$.isNumber(nowValue)){
                        bootbox.alert('条目数必须是数字!');
                        $(this).val(tempValue);
                        return;
                    }
                    else if(Number(nowValue)>9999){
                        bootbox.alert('条目数超过范围(0~9999)');
                        $(this).val(tempValue);
                        return;
                    }
                    if(nowValue != tempValue){
                        if(-1 == url.indexOf('?')){
                        location.href = href + "?perpage=" + nowValue;
                        }
                        else{
                            if (sltVal == '') {
                                location.href = url + "&perpage=" + nowValue;
                            }
                            else
                            {
                                var tmpList = url.split('?');
                                var par = tmpList[1];
                                if(par.indexOf("&") == par.lastIndexOf("&"))
                                {
                                    location.href = url.substring(0,url.lastIndexOf("?")) + "?perpage=" + nowValue;
                                }
                                else
                                {
                                    location.href = url.substring(0,url.lastIndexOf("&")) + "&perpage=" + nowValue;
                                }
                            }
                        }
                    }
           });
        },
        changeStatus:function(paramName){
            var url = location.href;
            var sltVal = $.urlParam(paramName);
            var sortModel = $.urlParam('sortModel');
            var sortName = $.urlParam('sortName');
            var href = url.substring(0,url.indexOf("?"));
            $(this).find("option").attr("selected", false);
            $(this).find("option[value='"+sltVal+"']").attr("selected", true);
            $(this).change(function(){
                var status = $(this).val();
                if(status==-1){return;}
                /*
                if (-1 !== url.indexOf("sort")){
                    location.href = href + "?" + 'sortModel=' + sortModel + '&' + 'sortName=' + sortName + '&' + paramName + "=" + status;
                }
                */
                if(-1 == url.indexOf('?')){
                    location.href = href + "?" + paramName + "=" + status;
                }
                else{
                    if (("app_publish_status" === paramName || "verify_status" === paramName) && status.length == 0){
                        location.href = url.substring(0, url.indexOf("?"));
                    }
                    else if (sltVal == '') {
                        location.href = url + "&" + paramName + "=" + status;
                    }
                    else
                    {
                        var tmpList = url.split('?');
                        var par = tmpList[1];
                        if(par.indexOf("&") == par.lastIndexOf("&"))
                        {
                            location.href = url.substring(0,url.lastIndexOf("?")) + "?" + paramName + "=" + status;
                        }
                        else
                        {
                            location.href = url.substring(0,url.lastIndexOf("&")) + "&" + paramName + "=" + status;
                        }
                    }
                }
            });
      },
     imgPreview: function(){
                     var $img;
                     $(this).mouseover(function(e){
                            $img = $("<img src='#' style='z-index:2000;'/>");
                            var src = $(this).attr("src");
                            $img.attr("src", src);
                            $("body").append($img);
                            if (height < 100){
                                var left = e.clientX + 5;
                                var top = e.clientY + 5;
                            }
                            else{
                                var left = e.pageX + 5;
                                $img.width(300);
                                var height = $img.height();
                                var top = ($(window).height() - height) / 2;
                            }
                            $img.css({
                                position:"fixed",
                                top: top,
                                left: left
                            });
                    });
                    $(this).mouseout(function(e){
                            $img.remove();
                    });
        }
    });
})(jQuery);
