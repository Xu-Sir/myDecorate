var total;
var name ;
var idArr  = window.location.href.split("=");
var id = idArr[1];
$(function () {
    var objCam = document.getElementById("fr_ulCampaign");
    $.ajax({
        type:'post',
        url:'/teamList',
        data:{id:id},
        success:function(data){
            var ass = JSON.stringify(data.data.list);
            var arr = JSON.parse(ass);
            var html ='';
            for (var i = 0; i < arr.length; i++) {
                name = arr[i].name;
                html += '<div class="dl-a1">'+
                    ' <img alt="" src="'+arr[i].images+'" />\n' +
                    ' </div>\n' +
                    '   <div class="dl-a2 clearfix">\n' +
                    '  <div class="fl">\n' +
                    '<h6><a href="javascript:;" class="tachu3"><i></i>预约设计</a></h6>\n' +
                    '<h3>'+arr[i].name+'<span></span></h3>\n' +
                    '<h4><span>'+arr[i].grade+' </span></h4>\n' +
                    '<p>'+arr[i].summary+'</p>\n' +
                    '<div class="neir">\n' +
                    '    <p>\n' +
                    '        <span style="color:#333333;font-family:\'Microsoft YaHei\';line-height:24px;font-size:18px;"><strong>设计师姓名：'+arr[i].name+'&nbsp;</strong></span>\n' +
                    '    </p>\n'
                    if(arr[i].school!=null){
                        html += ' <p>\n' +
                            ' <span style="color:#333333;font-family:\'Microsoft YaHei\';line-height:24px;font-size:16px;"><span style="font-size:18px;"><strong>【毕业院校】</strong></span>'+arr[i].school+'</span>\n' +
                            '    </p>\n'
                    }

                    html +='<span style="color:#333333;font-family:\'Microsoft YaHei\';line-height:24px;font-size:16px;"><br />\n' +
                    '</span>\n' +
                    '    </p>\n' +
                    '    <p>\n' +
                    '\t<span style="color:#333333;font-family:\'Microsoft YaHei\';line-height:24px;font-size:16px;"><br />\n' +
                    '</span>\n' +
                    '    </p>\n' +
                    '    <p>\n' +
                    '        <span style="color:#333333;font-family:\'Microsoft YaHei\';line-height:24px;font-size:16px;"><span style="font-size:18px;"><strong>【擅长风格】</strong></span>'+arr[i].style+'</span>\n' +
                    '    </p>\n' +
                    '    <p>\n' +
                    '\t<span style="color:#333333;font-family:\'Microsoft YaHei\';line-height:24px;font-size:16px;"><br />\n' +
                    '</span>\n' +
                    '    </p>\n' +
                    '    <p>\n' +
                    '        <span style="color:#333333;font-family:\'Microsoft YaHei\';line-height:24px;font-size:18px;"><strong>【设计理念】</strong></span>\n' +
                    '    </p>\n' +
                    '    <p>\n' +
                    '        <span style="color:#333333;font-family:\'Microsoft YaHei\';line-height:24px;font-size:16px;">&nbsp; &nbsp; &nbsp; '+arr[i].summary+'</span>\n' +
                    '    </p>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '</div>\n'

            }
            // console.log(html);
            objCam.innerHTML = html;
        }

    });

    // 加载案例list

    $(function () {
        //marketList 列表
        var aspNetPager1 = document.getElementById("AspNetPager1")
        $.ajax({
            type:'post',
            url:'/projectInsList',
            data:{page:1,id:id},
            success: function(data) {
                total = JSON.stringify(data.data.total);
                var htmlPage = '';
                htmlPage+='<div id="demo1"></div>'
                aspNetPager1.innerHTML=htmlPage;
            }
        })
    });


})
function pageOnclick(objs) {
    var obj = document.getElementById("item-list");
    var caseShowup = document.getElementById("caseShowup")
    // console.log(objs)
    $.ajax({
        type: 'post',
        url: '/projectInsList',
        data: {page: objs.curr,id:id},
        success: function (data) {
            var ass = JSON.stringify(data.data.list);
            //total = JSON.stringify(data.data.total);
            var arr = JSON.parse(ass);
            var html = '';
            var htmlCsae = ' <h3>'+name+'作品展示</h3>';
            var type;
            for (var i = 0; i < arr.length; i++) {
                switch (arr[i].type){
                    case 1:type="商品房";
                    break;
                    case 2:type="别墅";
                    break;
                    case 3:type="复式";
                    break;
                    case 4:type="自建房";
                    break;
                    case 5:type="商业大厦";
                    break;
                    case 6:type="其他";
                    break;
                    default:;
                }
                html += ' <li>\n' +
                    '<a target="_blank" href="http://www.xydec.com.cn/Case.aspx?case_id=4357">\n' +
                    '    <h4>\n' +
                    '<img alt="" class="lazyload" data-original="'+arr[i].url+'" src="'+ arr[i].url+'" style="width: 289px; height: 215px;" />\n' +
                    '</h4>\n' +
                    '    <h5><span>'+arr[i].title+'</span></h5>\n' +
                    '    <h6 class="clearfix">\n' +
                    '        <span>户型：'+type+'</span><span>面积：'+ arr[i].area+'平米</span>\n' +
                    '    </h6>\n' +
                    '    <p>风格：'+ arr[i].style+'</p>\n' +
                    '</a>\n' +
                    '</li>'
            }
            caseShowup.innerHTML = htmlCsae;
            obj.innerHTML = html;
        }
    })
}