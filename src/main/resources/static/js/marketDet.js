$(function () {

    //MarketingDetail 详情

    var marketTit = document.getElementById("tit");
    var marketMain = document.getElementById("main");
    var guideOther = document.getElementById("guideOther");
    var detailId = getQueryVariable("id");
    var ids = detailId.split(",");
    $.ajax({
        type:'post',
        url:'/marketDetail',
        data:{ids:detailId},
        success: function(data) {
            var ass = JSON.stringify(data.data);
            var arr = JSON.parse(ass);
            var htmlTit = '';
            var htmlMain = '';
            var htmlGuideOther = '';
            var idLast = arr.idLast==null?"无":arr.idLast
            var idNext = arr.idNext==null?"无":arr.idNext
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

            htmlGuideOther+='<span>上一篇：' +
                '<a href="/MarketingDetail.html?id='+idLast+'">' +
                arr.titleLast+'</a></span>' +
                '<span>下一篇：' +
                ' <a href="/MarketingDetail.html?id='+idNext+'">' +
                arr.titleNext+'</a></span>'

            marketTit.innerHTML = htmlTit;
            marketMain.innerHTML = htmlMain;
            guideOther.innerHTML = htmlGuideOther;
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