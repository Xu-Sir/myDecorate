var page = 1;
var pagecount = 4;
$("a#loadmore").click(function () {
    var ou_id = "";
    $("#loadmore").after("<div id='loadingcss3' class='fixedloading'><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class='fixedloadingbg'></div>");
    if ($("#ou_id").val() != "" && $("#ou_id").val() != "undefined" && $("#ou_id").val() != undefined)
        ou_id = $("#ou_id").val();
    loadingcss3_open();
    page++;
    $.ajax({
        type: 'POST',
        url: '/ajax/ajax2.aspx',
        data: "action=loadmoreGushi&page=" + page + "&pagecount=" + pagecount + "&ou_id=" + ou_id,
        dataType: "html",
        success: function (data) {
            var htmls = $("<div>" + data + "</div>").find("div#data ul").html();
            $("#loadmoreGushi").append(htmls);
            loadingcss3_close();
            $("div#loadingcss3,div.fixedloadingbg").remove();
            if (htmls.trim() == "") { $("#loadmore").html("没有更多信息"); }
            $("#loadmoreGushi li").each(function (index, elemnt) {
                if (index % 4 == 0) {
                    $(elemnt).css("margin-left", "0");
                }
                $(elemnt).css("margin-bottom", "10px");
            });
        }
    });
});

$(document).ready(function () {

    $("#msgFrm").submit(function () {
        var flag = true;
        var ou_id = "";
        $("input[name='CustomerName'],input[name='Phone'],input[name='Address'],textarea[name='content'],input[name='msg_atoucode']").each(function () {
            if ($(this).val() == "") { flag = false; layer.msg("所有信息均不能为空"); $(this).focus(); return flag; }
        });        
        if (!flag) { return flag; }
        $.ajax({
            type: "post",
            url: "/ajax/CheckREG.aspx",
            data: { "action": "checkform", "type": "msg", "values": $("input[name='msg_atoucode']").val(), "r": Math.random() },
            async: false,
            success: function (data) {
                if (data != "success") {
                    layer.msg("验证码错误！", 2, 3);
                    $("[name=msg_atoucode]").focus();
                    flag = false;
                }
            }
        });
        if (!flag) { return flag; }
        var phonereg = /^1[3|4|5|7|8]\d{9}$/;
        if (!phonereg.test($("input[name='Phone']").val())) {
            layer.msg("手机号码格式输入不正确");
            $("input[name='Phone']").focus();
            return false;
        }
        $("select.bp_select").each(function () {
            if ($(this).val() == "-1") { flag = false; layer.msg("所在地区选择不正确"); return flag; }
        });
        if (!flag) { return flag; }
        if ($("#ou_id").val() != "" && $("#ou_id").val() != "undefined" && $("#ou_id").val() != undefined)
            ou_id = $("#ou_id").val();
        $.ajax({
            type: "POST",
            url: "ajax/ajax2.aspx",
            data: $("#msgFrm").serialize() + "&action=msg&ou_id=" + ou_id,
            dataType: "json",
            beforeSend: function () {
                layer.load("正在提交...");
            },
            success: function (data) {
                if (data.status == "y") {
                    layer.msg(data.info, 2, 1);
                    $("#msgFrm")[0].reset();//重置表单
                    $("#msg_code").click();
                    location.reload();
                } else {
                    layer.msg(data.info);
                }
            }
        });
        return false;
    });


    function validateMsg2() {
        if ($("[name=b1_rp_select]").val() == "-1") {
            layer.msg("请选择省/市！", 2, 3);
            $("[name=b1_rp_select2]").focus();
            return false;
        }
        if ($("[name=b1_rc_select]").val() == "-1") {
            layer.msg("请选择城市！", 2, 3);
            $("[name=b1_rc_select]").focus();
            return false;
        }
        if ($("[name=b2_r_username]").val() == "") {
            layer.msg("请输入姓名！", 2, 3);
            $("[name=b2_r_username]").focus();
            return false;
        }

        if ($("[name=b2_r_phone]").val() == "") {
            layer.msg("请输入手机号！", 2, 3);
            $("[name=b2_r_phone]").focus();
            return false;
        } else if (!/^1[3|4|5|7|8]\d{9}$/.test($("[name=b2_r_phone]").val())) {
            layer.msg("请输入正确的手机号！", 2, 3);
            $("[name=b2_r_phone]").focus();
            return false;
        }
        if ($("[name=b3_r_building]").val() == "") {
            layer.msg("请输入楼盘名称！", 2, 3);
            $("[name=b3_r_building]").focus();
            return false;
        }
        if ($("[name=b3_r_size]").val() == "") {
            layer.msg("请输入建筑面积！", 2, 3);
            $("[name=b3_r_size]").focus();
            return false;
        }
        if ($("[name=xd_atoucode]").val() == "") {
            layer.msg("请输入验证码！", 2, 3);
            $("[name=xd_atoucode]").focus();
            return false;
        } else {
            var flag = false;
            $.ajax({
                type: "post",
                url: "/checkVcode",
                data: { "action": "checkform", "type": "msg", "values": $("[name=xd_atoucode]").val(), "r": Math.random() },
                async: false,
                success: function (data) {
                    if (data != "success") {
                        layer.msg("验证码错误！", 2, 3);
                        $("[name=xd_atoucode]").focus();
                        flag = false;
                    } else
                        flag = true;
                }
            });

            if (!flag)
                return flag;
        }
        return true;
    }
    $("#FrmXiadan").submit(function () {
        var ou_id = "";
        if (validateMsg2()) {
            if ($("#ou_id").val() != "" && $("#ou_id").val() != "undefined" && $("#ou_id").val() != undefined)
                ou_id = $("#ou_id").val();
            $.ajax({
                type: "POST",
                url: "/orderOnline?action=queryoffer_r&t=" + Math.random(),
                data: $("#FrmXiadan").serialize() + "&ou_id=" + ou_id,
                dataType: "json",
                beforeSend: function () {
                    layer.load();
                },
                success: function (result) {
                    layer.closeAll();
                    if (result) {
                        if (result.status == "success") {
                            layer.msg(result.content, 2, 1);
                            $("#FrmXiadan")[0].reset();//重置表单
                            $("#xd_code").click();
                            location.reload();
                        } else {
                            layer.msg(result.content, 2, 3);
                        }
                    }
                }
            });
        }
        return false;
    });
    $.ajax({
        type: "POST",
        url: "/ajax/ajax.aspx?action=load_province&t=" + Math.random(),
        dataType: "json",
        success: function (data) {
            if (data != "") {
                $(".bp_select2").empty();
                $(".bp_select2").append("<option value=\"-1\">省/市</option>");
                $(data).each(function (k, v) {
                    $(".bp_select2").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                });
            }
        }
    });
    $(".bp_select2").change(function () {
        var provinceid = $(".bp_select2").val();
        if (provinceid != "-1") {
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=load_city&t=" + Math.random(),
                data: { id: provinceid },
                dataType: "json",
                success: function (data) {
                    if (data != "") {
                        $(".bc_select2").empty();
                        $(".bc_select2").append("<option value=\"-1\">城区</option>");
                        $(data).each(function (k, v) {
                            $(".bc_select2").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                        });
                    }
                }
            });
        }
    });
});
