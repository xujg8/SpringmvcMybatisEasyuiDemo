/**
 * Created by Dannis on 2014/11/20.
 */
var selectedItems1 = [];
var selectedItems2 = [];

function buildMultiSelect(obj, dataOptions) {
    var columnCount = 3;//列数，默认3列
    var width = 480;//宽度，默认480px
    var fontSize = 14;//字体大小，默认14px
    var label1 = "选择列一";//第一列标签
    var label2 = "选择列二";//第二列标签
    var label3 = "已选择列";//第三列标签

    if (dataOptions) {
        columnCount = dataOptions.columnCount ? dataOptions.columnCount : columnCount;
        width = dataOptions.width && dataOptions.width >= width ? dataOptions.width : width;
        fontSize = dataOptions.fontSize ? dataOptions.fontSize : fontSize;
        label1 = dataOptions.param1.label ? dataOptions.param1.label : label1;
        label2 = dataOptions.param2.label ? dataOptions.param2.label : label2;
    }
    var selectWidth = Math.round(width * 0.3);//列表框宽度
    if (columnCount == 2) {
        selectWidth = Math.round(width * 0.45);//列表框宽度
    }

    $(obj).empty();
    $(obj).css({
        "width": width + "px",
        "font-size": fontSize + "px",
        "text-align": "center"
    });

    var selectStyle = "margin:0;height:220px;padding:0;width:" + selectWidth + "px;overflow:auto;";
    var buttonStyle = "width:30px;height:22px;font-size:14px;line-height:12px;display:block";
    var inputStyle = "margin:0;padding:0 3px;width:" + selectWidth + "px;";
    var labelRow;
    var searchRow;
    var selectRow;
    if (columnCount == 2) {
        var buttonHtml = "";
        if (dataOptions.linkage) {
            buttonHtml = "<button id='select-button-2' style='" + buttonStyle + "'>&gt;&gt;</button><br>"
            + "<button id='deselect-button' style='" + buttonStyle + "'>&lt;&lt;</button>"
        }
        labelRow = "<tr style='text-align:left'>"
        + "<td><label id='label1' for='search-input-1'>" + label1 + "</label></td>"
        + "<td></td>"
        + "<td><label id='label2' for='search-input-2'>" + label2 + "</label></td>"
        + "</tr>";
        searchRow = "<tr style='text-align:left'>"
        + "<td><input id='search-input-1' type='text' class='form-control' style='" + inputStyle + "'></td>"
        + "<td></td>"
        + "<td><input id='search-input-2' type='text' class='form-control' style='" + inputStyle + "'></td>"
        + "</tr>";
        selectRow = "<tr style='vertical-align:top'>"
        + "<td><select id='selectable-items-1' multiple='multiple' class='form-control' style='" + selectStyle + "'></select></td>"
        + "<td style='vertical-align:middle'>"
        + buttonHtml
        + "</td>"
        + "<td><select id='selectable-items-2' multiple='multiple' class='form-control' style='" + selectStyle + "'></select></td>"
        + "</tr>";
    } else if (columnCount == 3) {
        labelRow = "<tr style='text-align:left'>"
        + "<td><label id='label1' for='search-input-1'>" + label1 + "</label></td>"
        + "<td></td>"
        + "<td><label id='label2' for='search-input-2'>" + label2 + "</label></td>"
        + "<td></td>"
        + "<td><label id='label3' for='selected-items'>" + label3 + "</label></td>"
        + "</tr>";
        searchRow = "<tr style='text-align:left'>"
        + "<td><input id='search-input-1' type='text' class='form-control' style='" + inputStyle + "'></td>"
        + "<td></td>"
        + "<td><input id='search-input-2' type='text' class='form-control' style='" + inputStyle + "'></td>"
        + "<td></td>"
        + "<td></td>"
        + "</tr>";
        selectRow = "<tr style='vertical-align:top'>"
        + "<td><select id='selectable-items-1' multiple='multiple' class='form-control' style='" + selectStyle + "'></select></td>"
        + "<td style='vertical-align:middle'>"
        + "<button id='select-button-1' style='" + buttonStyle + "'>--</button>"
        + "</td>"
        + "<td><select id='selectable-items-2' multiple='multiple' class='form-control' style='" + selectStyle + "'></select></td>"
        + "<td style='vertical-align:middle'>"
        + "<button id='select-button-2' style='" + buttonStyle + "'>&gt;&gt;</button><br>"
        + "<button id='deselect-button' style='" + buttonStyle + "'>&lt;&lt;</button>"
        + "</td>"
        + "<td><select id='selected-items' multiple='multiple' class='form-control' style='" + selectStyle + "'></select></td>"
        + "</tr>";
    }

    $(obj).append(labelRow + searchRow + selectRow);
    if (dataOptions) {
        if (dataOptions.singleClickSelect) {
            $("select").find("option").click(function () {
                selectItem(this);
            });
        }
    }
    bindEventHandler(dataOptions);

    if (dataOptions.param1.url) {
        fillData($('select[id="selectable-items-1"]'), dataOptions.param1.url, "", dataOptions.param1.method);
    }
    if (dataOptions.param2.url) {
        fillData($('select[id="selectable-items-2"]'), dataOptions.param2.url, "", dataOptions.param2.method);
    }
}

/**
 * 向Select控件填充值
 * @param selectObj select对象
 * @param url Ajax请求地址
 * @param params Ajax请求参数
 * @param method Ajax请求方法
 */
function fillData(selectObj, url, params, method) {
    var data = [];
    $.ajax({
        url: url,
        data: params,
        type: method,
        async: false,
        success: function (result) {
            data = result;
        }
    });

    var select = $(selectObj);
    select.empty();
    var options = "";
    for (var i = 0; i < data.length; i++) {
        if (!data[i].id && !data[i].name) {
            options += "<option value='' title='" + data[i] + "'>" + data[i] + "</option>";
        } else {
            var textValue = data[i].name ? data[i].name : data[i].model;
            options += "<option value='" + data[i].id + "' title='" + textValue + "'>" + textValue + "</option>"
        }
    }
    select.append(options);
}

function selectItem(obj) {
    var select = $(obj).parent();
    if ("selectable-items-1" == select.attr('id')) {
        var existsIndex1 = $.inArray($(obj).val(), selectedItems1);
        if (existsIndex1 == -1) {//-1表示不存在
            selectedItems1.push($(obj).val());
        } else {
            selectedItems1.splice(existsIndex1, 1);
            $(obj).prop("selected", false);
        }
        for (var i = 0; i < selectedItems1.length; i++) {
            select.find("option[value='" + selectedItems1[i] + "']").prop("selected", true);
        }
    } else if ("selectable-items-2" == select.attr('id')) {
        var existsIndex2 = $.inArray($(obj).val(), selectedItems2);
        if (existsIndex2 == -1) {//-1表示不存在
            selectedItems2.push($(obj).val());
        } else {
            selectedItems2.splice(existsIndex2, 1);
            $(obj).prop("selected", false);
        }
        for (var j = 0; j < selectedItems2.length; j++) {
            select.find("option[value='" + selectedItems2[j] + "']").prop("selected", true);
        }
    }
}

/**
 * 绑定事件处理器
 */
function bindEventHandler(dataOptions) {
    //选择按钮绑定事件
    $("button[id='select-button-2']").click(function () {
        var select = $("select[id='selectable-items-2']");
        var selectedOptions = select.find("option:selected");
        for (var i = 0; i < selectedOptions.length; i++) {
            selectedOptions[i].style.display = 'none';
            $(selectedOptions[i]).prop("selected", false);
            $("select[id='selected-items']").append("<option value='" + $(selectedOptions[i]).val() + "'>" + $(selectedOptions[i]).text() + "</option>");
        }
    });

    //取消选择按钮绑定事件
    $("button[id='deselect-button']").click(function () {
        var select = $("select[id='selected-items']");
        var selectedOptions = select.find("option:selected");
        for (var i = 0; i < selectedOptions.length; i++) {
            $("select[id='selectable-items-2']").find("option[value='" + $(selectedOptions[i]).val() + "']").css("display", "");
            $(selectedOptions[i]).remove();
        }
    });

    //第一列搜索框绑定事件
    $("input[id='search-input-1']").on("input", function () {
        var inputText = $("input[id='search-input-1']").val().trim();
        var options = $("select[id='selectable-items-1']").find("option");
        if (inputText) {
            for (var i = 0; i < options.length; i++) {
                if (options[i].text.toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
                    options[i].style.display = "";
                } else {
                    options[i].style.display = "none";
                }
            }
        } else {
            for (var j = 0; j < options.length; j++) {
                options[j].style.display = "";
            }
        }
    });

    //第二列搜索框绑定事件
    $("input[id='search-input-2']").on("input", function () {
        var inputText = $("input[id='search-input-2']").val().trim();
        var options = $("select[id='selectable-items-2']").find("option");
        if (inputText) {
            for (var i = 0; i < options.length; i++) {
                if (options[i].text.toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
                    options[i].style.display = "";
                } else {
                    options[i].style.display = "none";
                }
            }
        } else {
            for (var j = 0; j < options.length; j++) {
                options[j].style.display = "";
            }
        }
    });

    if (dataOptions.linkage) {
        $("select[id='selectable-items-1']").on("change", function () {
            var options = $(this).children("option:selected");
            var params = [];
            for (var i = 0; i < options.length; i++) {
                var value = $(options[i]).attr("value");
                if (value) {
                    params.push(value);
                } else {
                    params.push($(options[i]).text());
                }
            }
            if (params.length > 0) {
                fillData(
                    $("select[id='selectable-items-2']"),
                    dataOptions.param2.conditionUrl,
                    dataOptions.param2.conditionParamName + "=" + params.join(","),
                    dataOptions.param2.method);
            } else {
                fillData(
                    $("select[id='selectable-items-2']"),
                    dataOptions.param2.url,
                    dataOptions.param2.method);
            }
        });
    }
}

/**
 * 获取select选中值
 * @param select selectable-items-1表示第一列，selectable-items-2表示第二列，selected-items表示第三列
 */
function getMultiSelectData(select) {
    var values = [];
    if ('selectable-items-1' == select) {
        values = $('select[id="selectable-items-1"]').val();
    } else if ('selectable-items-2' == select) {
        values = $('select[id="selectable-items-2"]').val();
    } else if ('selected-items' == select) {
        var selectedOptions = $('select[id="selected-items"]').find('option');
        for (var k = 0; k < selectedOptions.length; k++) {
            values.push(selectedOptions[k].value);
        }
    }
    return values ? values.join(",") : "";
}

/**
 * 获取select选中值
 * @param select select对象
 */
function getSelectData(select) {
    var values = [];
    if($(select).attr("id") == 'selected-items') {
        var selectedOptions = $('select[id="selected-items"]').find('option');
        for (var k = 0; k < selectedOptions.length; k++) {
            values.push(selectedOptions[k].value);
        }
    } else {
        values = $(select).val();
    }
    return values ? values.join(",") : "";
}