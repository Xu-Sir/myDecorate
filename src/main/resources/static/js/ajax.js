$(document).ready(function () {
    //加载所有存在分公司的城市
    loadCity();

    //var T = setInterval(function () {
    //    $('.Region').fadeIn();
    //    clearInterval(T);
    //}, 30000);

    $('.Region .R-box .R-cg i').on('click', function () {
        $(this).parents('.Region').fadeOut();
        //clearInterval(T);
    });

    $(".hc_select").change(function () {
        var v = $(".hc_select").val();
        if (v != "-1")
            $(".hc_span").text($(".hc_select").find("option:selected").text());
    });

    $(".bp_select").change(function () {
        var provinceid = $(".bp_select").val();
        if (provinceid != "-1") {
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=load_city&t=" + Math.random(),
                data: { id: provinceid },
                dataType: "json",
                success: function (data) {
                    if (data != "") {
                        $(".bc_select").empty();
                        $(".bc_select").append("<option value=\"-1\">城区</option>");
                        $(data).each(function (k, v) {
                            $(".bc_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                        });
                    }
                }
            });
        }
    });

    $(".a_submit").click(function () {
        var ou_id = "";
        if (validateMsg()) {
            if ($("#ou_id").val())
                ou_id = $("#ou_id").val();
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=queryoffer&t=" + Math.random(),
                data: $("#queryOffer").serialize() + "&ou_id=" + ou_id,
                dataType: "json",
                beforeSend: function () {
                    layer.load();
                },
                success: function (result) {
                    layer.closeAll();
                    if (result) {
                        if (result.status == "success") {
                            layer.msg(result.content, 2, 1);
                            $("#queryOffer")[0].reset();//重置表单
                        } else {
                            layer.msg(result.content, 2, 3);
                        }
                    }
                }
            });
        }
    });

    $(".a_submit_f").click(function () {
        var ou_id = "";
        if (validateMsg_F()) {
            if ($("#ou_id").val())
                ou_id = $("#ou_id").val();
            $.ajax({
                type: "POST",
                url: "/orderOnlineT?t=" + Math.random(),
                data: $("#queryOffer").serialize() + "&ou_id=" + ou_id,
                dataType: "json",
                beforeSend: function () {
                    layer.load();
                },
                success: function (result) {
                    layer.closeAll();
                    if (result) {
                        if (result.status == "success") {
                            layer.msg(result.content, 2, 1);
                            $("#queryOffer")[0].reset();//重置表单
                        } else {
                            layer.msg(result.content, 2, 3);
                        }
                    }
                }
            });
        }
    });

    $(".b1_p_select").change(function () {
        var provinceid = $(".b1_p_select").val();
        if (provinceid != "-1") {
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=load_city&t=" + Math.random(),
                data: { id: provinceid },
                dataType: "json",
                success: function (data) {
                    if (data != "") {
                        $(".b1_c_select").empty();
                        $(".b1_c_select").append("<option value=\"-1\">城区</option>");
                        $(data).each(function (k, v) {
                            $(".b1_c_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                        });
                    }
                }
            });
        }
    });

    $(".bp_s_select").change(function () {
        var provinceid = $(".bp_s_select").val();
        if (provinceid != "-1") {
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=load_city&t=" + Math.random(),
                data: { id: provinceid },
                dataType: "json",
                success: function (data) {
                    if (data != "") {
                        $(".bc_s_select").empty();
                        $(".bc_s_select").append("<option value=\"-1\">城区</option>");
                        $(data).each(function (k, v) {
                            $(".bc_s_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                        });
                    }
                }
            });
        }
    });

    $(".bp_f_select").change(function () {
        var provinceid = $(".bp_f_select").val();
        if (provinceid != "-1") {
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=load_city&t=" + Math.random(),
                data: { id: provinceid },
                dataType: "json",
                success: function (data) {
                    if (data != "") {
                        $(".bc_f_select").empty();
                        $(".bc_f_select").append("<option value=\"-1\">城区</option>");
                        $(data).each(function (k, v) {
                            $(".bc_f_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                        });
                    }
                }
            });
        }
    });

    $(".b4_submit").click(function () {
        var ou_id = "";
        if (validateMsg_B()) {
            if ($("#ou_id").val())
                ou_id = $("#ou_id").val();
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=queryoffer_b&t=" + Math.random(),
                data: $("#queryoffer_b").serialize() + "&ou_id=" + ou_id,
                dataType: "json",
                beforeSend: function () {
                    layer.load();
                },
                success: function (result) {
                    layer.closeAll();
                    if (result) {
                        if (result.status == "success") {
                            layer.msg(result.content, 2, 1);
                            $("#queryoffer_b")[0].reset();//重置表单
                        } else {
                            layer.msg(result.content, 2, 3);
                        }
                    }
                }
            });
        }
    });

    $("#case_q").click(function () {
        var url = window.location.href;
        if ($(".fl_style").val() != "" && $(".fl_style").val() != undefined)
            url = UrlAddParams(url, "stylecode", $(".fl_style").val());
        if ($(".fl_layout").val() != "" && $(".fl_layout").val() != undefined)
            url = UrlAddParams(url, "layoutcode", $(".fl_layout").val());
        if ($(".fl_size").val() != "" && $(".fl_size").val() != undefined)
            url = UrlAddParams(url, "sizecode", $(".fl_size").val());
        if ($(".fl_province").val() != "" && $(".fl_province").val() != undefined)
            url = UrlAddParams(url, "provincecode", $(".fl_province").val());
        if ($(".fl_city").val() != "" && $(".fl_city").val() != undefined)
            url = UrlAddParams(url, "citycode", $(".fl_city").val());
        if ($(".fl_leve").val() != "" && $(".fl_leve").val() != undefined)
            url = UrlAddParams(url, "levecode", $(".fl_leve").val());
        if ($(".fl_experience").val() != "" && $(".fl_experience").val() != undefined)
            url = UrlAddParams(url, "experiencecode", $(".fl_experience").val());
        if ($(".fl_hot").val() != "" && $(".fl_hot").val() != undefined)
            url = UrlAddParams(url, "hotcode", $(".fl_hot").val());

        url = UrlAddParams(url, "keyword", $(".keyword").val());

        location.href = url;
    });

    $(".a_visit").click(function () {
        var ou_id = "";
        if (visitMsg_Visit()) {
            if ($("#ou_id").val())
                ou_id = $("#ou_id").val();
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=visit&t=" + Math.random(),
                data: $("#visit").serialize() + "&ou_id=" + ou_id,
                dataType: "json",
                beforeSend: function () {
                    layer.load();
                },
                success: function (result) {
                    layer.closeAll();
                    if (result) {
                        if (result.status == "success") {
                            layer.msg(result.content, 2, 1);
                            $("#visit")[0].reset();//重置表单
                            $(".customer-04").fadeOut();
                        } else {
                            layer.msg(result.content, 2, 3);
                        }
                    }
                }
            });
        }
    });

    $(".a_appointment").click(function () {
        var ou_id = "";
        if (visitMsg_Visit()) {
            if ($("#ou_id").val())
                ou_id = $("#ou_id").val();
            $.ajax({
                type: "POST",
                url: "/ajax/ajax.aspx?action=appointment&t=" + Math.random(),
                data: $("#appointment").serialize() + "&ou_id=" + ou_id,
                dataType: "json",
                beforeSend: function () {
                    layer.load();
                },
                success: function (result) {
                    layer.closeAll();
                    if (result) {
                        if (result.status == "success") {
                            layer.msg(result.content, 2, 1);
                            $("#appointment")[0].reset();//重置表单
                            $(".customer-04").fadeOut();
                        } else {
                            layer.msg(result.content, 2, 3);
                        }
                    }
                }
            });
        }
    });
});

function loadCity() {
    $.ajax({
        type: "POST",
        url: "/ajax/ajax.aspx?action=load_province&t=" + Math.random(),
        dataType: "json",
        async: false,
        success: function (data) {
            if (data != "") {
                $(".bp_select").empty();
                $(".b1_p_select").empty();
                $(".bp_m_select").empty();
                $(".bp_s_select").empty();
                $(".bp_f_select").empty();
                $(".bp_select").append("<option value=\"-1\">省/市</option>");
                $(".b1_p_select").append("<option value=\"-1\">省/市</option>");
                $(".bp_m_select").append("<option value=\"-1\">省/市</option>");
                $(".bp_s_select").append("<option value=\"-1\">省/市</option>");
                $(".bp_f_select").append("<option value=\"-1\">省/市</option>");
                $(data).each(function (k, v) {
                    $(".bp_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                    $(".b1_p_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                    $(".bp_m_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                    $(".bp_s_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                    $(".bp_f_select").append("<option value=\"" + v.id + "\">" + v.areaname + "</option>");
                });
            }
        }
    });

    //$.ajax({
    //    type: "POST",
    //    url: "/ajax/ajax.aspx?action=load_size&t=" + Math.random(),
    //    dataType: "json",
    //    success: function (data) {
    //        if (data != "") {
    //            $(".bs_select").empty();
    //            $(".b3_size").empty();
    //            $(".bs_select").append("<option value=\"-1\">建筑面积</option>");
    //            $(".b3_size").append("<option value=\"-1\">建筑面积</option>");
    //            $(data).each(function (k, v) {
    //                $(".bs_select").append("<option value=\"" + v.Code + "\">" + v.Name + "</option>");
    //                $(".b3_size").append("<option value=\"" + v.Code + "\">" + v.Name + "</option>");
    //            });
    //        }
    //    }
    //});
}

function visitMsg_Visit() {
    if ($(".bp_s_select").val() == "-1") {
        layer.msg("请选择省/市！", 2, 3);
        $(".bp_s_select").focus();
        return false;
    }
    if ($(".bc_s_select").val() == "-1") {
        layer.msg("请选择城市！", 2, 3);
        $(".bc_s_select").focus();
        return false;
    }
    if ($(".bp_building").val() == "") {
        layer.msg("请输入楼盘名称！", 2, 3);
        $(".bp_building").focus();
        return false;
    }
    if ($(".b3_size").val() == "") {
        layer.msg("请输入建筑面积！", 2, 3);
        $(".b3_size").focus();
        return false;
    }
    if ($(".bp_username").val() == "") {
        layer.msg("请输入姓名！", 2, 3);
        $(".bp_username").focus();
        return false;
    }
    if ($(".bp_phone").val() == "") {
        layer.msg("请输入手机号！", 2, 3);
        $(".bp_phone").focus();
        return false;
    } else if (!/^1[3|4|5|7|8]\d{9}$/.test($(".bp_phone").val())) {
        layer.msg("请输入正确的手机号！", 2, 3);
        $(".bp_phone").focus();
        return false;
    }
    if ($(".txtaddress").val() == "") {
        layer.msg("请输入地址！", 2, 3);
        $(".txtaddress").focus();
        return false;
    }
    return true;
}

function visitMsg() {
    if ($(".bp_select").val() == "-1") {
        layer.msg("请选择省/市！", 2, 3);
        $(".bp_select").focus();
        return false;
    }
    if ($(".bc_select").val() == "-1") {
        layer.msg("请选择城市！", 2, 3);
        $(".bc_select").focus();
        return false;
    }
    if ($(".bp_building").val() == "") {
        layer.msg("请输入楼盘名称！", 2, 3);
        $(".bp_building").focus();
        return false;
    }
    if ($(".b3_size").val() == "") {
        layer.msg("请输入建筑面积！", 2, 3);
        $(".b3_size").focus();
        return false;
    }
    if ($(".bp_username").val() == "") {
        layer.msg("请输入姓名！", 2, 3);
        $(".bp_username").focus();
        return false;
    }
    if ($(".bp_phone").val() == "") {
        layer.msg("请输入手机号！", 2, 3);
        $(".bp_phone").focus();
        return false;
    } else if (!/^1[3|4|5|7|8]\d{9}$/.test($(".bp_phone").val())) {
        layer.msg("请输入正确的手机号！", 2, 3);
        $(".bp_phone").focus();
        return false;
    }
    if ($(".txtaddress").val() == "") {
        layer.msg("请输入地址！", 2, 3);
        $(".txtaddress").focus();
        return false;
    }
    return true;
}

function validateMsg() {
    if ($("[name=bp_province]").val() == "-1") {
        layer.msg("请选择省/市！", 2, 3);
        $("[name=bp_province]").focus();
        return false;
    }
    if ($("[name=bp_city]").val() == "-1") {
        layer.msg("请选择城市！", 2, 3);
        $("[name=bp_city]").focus();
        return false;
    }
    if ($("[name=bp_username]").val() == "") {
        layer.msg("请输入姓名！", 2, 3);
        $("[name=bp_username]").focus();
        return false;
    }

    if ($("[name=bp_phone]").val() == "") {
        layer.msg("请输入手机号！", 2, 3);
        $("[name=bp_phone]").focus();
        return false;
    } else if (!/^1[3|4|5|7|8]\d{9}$/.test($("[name=bp_phone]").val())) {
        layer.msg("请输入正确的手机号！", 2, 3);
        $("[name=bp_phone]").focus();
        return false;
    }

    if ($("[name=bp_building]").val() == "") {
        layer.msg("请输入楼盘名称！", 2, 3);
        $("[name=bp_building]").focus();
        return false;
    }
    if ($("[name=bp_size]").val() == "") {
        layer.msg("请输入建筑面积！", 2, 3);
        $("[name=bp_size]").focus();
        return false;
    }
    return true;
}

function validateMsg_F() {
    if ($("[name=bp_f_province]").val() == "-1") {
        layer.msg("请选择省/市！", 2, 3);
        $("[name=bp_f_province]").focus();
        return false;
    }
    if ($("[name=bp_f_city]").val() == "-1") {
        layer.msg("请选择城市！", 2, 3);
        $("[name=bp_f_city]").focus();
        return false;
    }
    if ($("[name=bp_f_username]").val() == "") {
        layer.msg("请输入姓名！", 2, 3);
        $("[name=bp_f_username]").focus();
        return false;
    }

    if ($("[name=bp_f_phone]").val() == "") {
        layer.msg("请输入手机号！", 2, 3);
        $("[name=bp_f_phone]").focus();
        return false;
    } else if (!/^1[3|4|5|7|8]\d{9}$/.test($("[name=bp_f_phone]").val())) {
        layer.msg("请输入正确的手机号！", 2, 3);
        $("[name=bp_f_phone]").focus();
        return false;
    }

    if ($("[name=bp_f_building]").val() == "") {
        layer.msg("请输入楼盘名称！", 2, 3);
        $("[name=bp_f_building]").focus();
        return false;
    }
    if ($("[name=bp_f_size]").val() == "") {
        layer.msg("请输入建筑面积！", 2, 3);
        $("[name=bp_f_size]").focus();
        return false;
    }
    return true;
}

function validateMsg_B() {
    if ($("[name=b1_p_select]").val() == "-1") {
        layer.msg("请选择省/市！", 2, 3);
        $("[name=b1_p_select]").focus();
        return false;
    }
    if ($("[name=b1_c_select]").val() == "-1") {
        layer.msg("请选择城市！", 2, 3);
        $("[name=b1_c_select]").focus();
        return false;
    }
    if ($("[name=b2_username]").val() == "") {
        layer.msg("请输入姓名！", 2, 3);
        $("[name=b2_username]").focus();
        return false;
    }

    if ($("[name=b2_phone]").val() == "") {
        layer.msg("请输入手机号！", 2, 3);
        $("[name=b2_phone]").focus();
        return false;
    } else if (!/^1[3|4|5|7|8]\d{9}$/.test($("[name=b2_phone]").val())) {
        layer.msg("请输入正确的手机号！", 2, 3);
        $("[name=b2_phone]").focus();
        return false;
    }

    if ($("[name=b3_building]").val() == "") {
        layer.msg("请输入楼盘名称！", 2, 3);
        $("[name=b3_building]").focus();
        return false;
    }
    if ($("[name=b3_size]").val() == "") {
        layer.msg("请输入建筑面积！", 2, 3);
        $("[name=b3_size]").focus();
        return false;
    }
    return true;
}

// function getCase(code) {
//     $.ajax({
//         type: "POST",
//         url: "/ajax/ajax.aspx?action=load_case&t=" + Math.random(),
//         data: { stylecode: code },
//         dataType: "html",
//         success: function (data) {
//             $("#case_list").html(data);
//         }
//     });
// }

function selectCase(type, code) {
    var url = "";
    switch (type) {
        case "style":
            if (code == -1) {
                $("#a_style").css("color", "#ff0000");
                $("#a_style").siblings().css("color", "#666");
            }
            else {
                $("#a_style_" + code).css("color", "#ff0000");
                $("#a_style_" + code).siblings().css("color", "#666");
                $("#a_style").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "stylecode", code);
            break;
        case "layout":
            if (code == -1) {
                $("#a_layout").css("color", "#ff0000");
                $("#a_layout").siblings().css("color", "#666");
            }
            else {
                $("#a_layout_" + code).css("color", "#ff0000");
                $("#a_layout_" + code).siblings().css("color", "#666");
                $("#a_layout").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "layoutcode", code);
            break;
        case "size":
            if (code == -1) {
                $("#a_size").css("color", "#ff0000");
                $("#a_size").siblings().css("color", "#666");
            }
            else {
                $("#a_size_" + code).css("color", "#ff0000");
                $("#a_size_" + code).siblings().css("color", "#666");
                $("#a_size").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "sizecode", code);
            break;
        case "space":
            if (code == -1) {
                $("#a_space").css("color", "#ff0000");
                $("#a_space").siblings().css("color", "#666");
            }
            else {
                $("#a_space_" + code).css("color", "#ff0000");
                $("#a_space_" + code).siblings().css("color", "#666");
                $("#a_space").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "spacecode", code);
            break;
        case "stage":
            if (code == -1) {
                $("#a_stage").css("color", "#ff0000");
                $("#a_stage").siblings().css("color", "#666");
            }
            else {
                $("#a_stage_" + code).css("color", "#ff0000");
                $("#a_stage_" + code).siblings().css("color", "#666");
                $("#a_stage").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "stagecode", code);
            break;
        case "leve":
            if (code == -1) {
                $("#a_leve").css("color", "#ff0000");
                $("#a_leve").siblings().css("color", "#666");
            }
            else {
                $("#a_leve_" + code).css("color", "#ff0000");
                $("#a_leve_" + code).siblings().css("color", "#666");
                $("#a_leve").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "levecode", code);
            break;
        case "experience":
            if (code == -1) {
                $("#a_experience").css("color", "#ff0000");
                $("#a_experience").siblings().css("color", "#666");
            }
            else {
                $("#a_experience_" + code).css("color", "#ff0000");
                $("#a_experience_" + code).siblings().css("color", "#666");
                $("#a_experience").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "experiencecode", code);
            break;
        case "wherestore":
            if (code == -1) {
                $("#a_wherestore").css("color", "#ff0000");
                $("#a_wherestore").siblings().css("color", "#666");
            }
            else {
                $("#a_wherestore_" + code).css("color", "#ff0000");
                $("#a_wherestore_" + code).siblings().css("color", "#666");
                $("#a_wherestore").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "wherestore", code);
            break;
        case "buliding":
            if (code == -1) {
                $("#a_buliding").css("color", "#ff0000");
                $("#a_buliding").siblings().css("color", "#666");
            }
            else {
                $("#a_buliding_" + code).css("color", "#ff0000");
                $("#a_buliding_" + code).siblings().css("color", "#666");
                $("#a_buliding").css("color", "#999");
            }
            url = UrlAddParams(window.location.href, "buliding", code);
            break;
    }

    location.href = url;
}


function UrlAddParams(url, name, value) {
    url = url.replace(/[?]page=[1-9][&]*/gi, "?");
    url = url.replace(/[&]page=[1-9][&]*/gi, "");
    var r = url;
    if (r != null && r != 'undefined' && r != "") {
        value = encodeURIComponent(value);
        var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)");
        var tmp = name + "=" + value;
        if (url.match(reg) != null) {
            r = url.replace(eval(reg), tmp);
        }
        else {
            if (url.match("[\?]")) {
                r = url + "&" + tmp;
            } else {
                r = url + "?" + tmp;
            }
        }
    }
    return r;
}


function setNav(i) {
    if ($(".Nav>ul>li").eq(i).text() != "") {
        $(".Nav>ul>li").eq(i).addClass("on");
    } else {
        $(".sub-Nav>ul>li").eq(i).addClass("on");
    }
}

function getNews(code)
{
    $(".news_0606").hide();
    $(".news_0704").hide();
    $(".news_0802").hide();

    $(".news_" + code).show();

    //$(".getnews_a").attr("href", "NewList.aspx?code=" + code);
    //$.ajax({
    //    type: "POST",
    //    url: "/ajax/ajax.aspx?action=getnews&t=" + Math.random(),
    //    data: { code: code },
    //    dataType: "html",
    //    async: false,
    //    success: function (data) {
    //        var d = data.split("#*#");
    //        $("._bd_ul").empty();
    //        $(".fr_ul").empty();
    //        $("._bd_ul").html(d[0]);
    //        $(".fr_ul").html(d[1]);
    //    }
    //});
}