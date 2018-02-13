$(function () {

    //MarketingDetail 详情

    var marketTit = document.getElementById("tit");
    var marketMain = document.getElementById("main");
    var guideOther = document.getElementById("guideOther");
    var detailId = getQueryVariable("id");
    $.ajax({
        type:'post',
        url:'/marketDetail',
        data:{id:detailId},
        success: function(data) {
            var ass = JSON.stringify(data.data);
            var arr = JSON.parse(ass);
            var htmlTit = '';
            var htmlMain = '';
            var htmlGuideOther = '';

            htmlTit+='<h3>'+arr.title+'</h3>' +
                '<h4><font>发布时间：'+arr.createTimeS+'</h4>'

            htmlMain+=' <p style="text-align:center;">' +
                '<span style="font-family:Microsoft YaHei;font-size:16px;">'+arr.title+'</span> ' +
                '</p>' +
                '<p style="text-align:center;">' +
                '\t<span style="font-family:Microsoft YaHei;font-size:16px;">活动主题：'+arr.content+'</span> ' +
                '</p>\n' +
                '<p style="text-align:center;">\n' +
                '\t<span style="font-family:Microsoft YaHei;font-size:16px;">活动时间：'+arr.createTimeS+'--'+arr.overdueTimeS+'</span> \n' +
                '</p>\n' +
                '<p style="text-align:center;">\n' +
                '\t<img src="'+arr.url+'" alt="公司" width="579" height="800" title="公司" align="" />\n' +
                '</p>'

            arr.titleLast==null?htmlGuideOther+='<span>上一篇：' +"无"+'</a></span>'
                :htmlGuideOther+='<span>上一篇：' +
                '<a href="/MarketingDetail.html?id='+arr.idLast+'">' +
                arr.titleLast+'</a></span>';

            arr.titleNext==null? htmlGuideOther+='<span>下一篇：' +"无"+'</a></span>'
                :htmlGuideOther+='<span>下一篇：' +
                ' <a href="/MarketingDetail.html?id='+arr.idNext+'">' +
                arr.titleNext+'</a></span>';


            marketTit.innerHTML = htmlTit;
            marketMain.innerHTML = htmlMain;
            guideOther.innerHTML = htmlGuideOther;
            $("#sub-title").html(arr.title);
        }
    })









    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
})