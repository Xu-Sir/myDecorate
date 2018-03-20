var total;
$(function () {
    //marketList 列表
    var aspNetPager1 = document.getElementById("AspNetPager1")
    $.ajax({
        type:'post',
        url:'/marketList',
        data:{page:1,size:1},
        success: function(data) {
            total = JSON.stringify(data.data.total);
            var htmlPage = '';
            htmlPage+='<div id="demo1"></div>'
            aspNetPager1.innerHTML=htmlPage;
        }
    })
//验证码
    $.ajax({
        type:'post',
        url:'/createImage',
        success: function (data) {
            $("#msg_code").attr('src',"http://118.31.76.209:8080/verifyImage/"+data+".jpg");
            $("#xd_code").attr('src',"http://118.31.76.209:8080/verifyImage/"+data+".jpg");
        }
    })


});
function pageOnclick(objs) {
    var obj = document.getElementById("xmnvls");
    $.ajax({
        type:'post',
        url:'/marketList',
        data:{page:objs.curr},
        success: function(data) {
            var ass = JSON.stringify(data.data.list);
            //total = JSON.stringify(data.data.total);
            var arr = JSON.parse(ass);
            var html = '';
            for (var i = 0; i < arr.length; i++) {
                var lastId;
                var nextId;
                if(i>0&&i<arr.length-1){
                    lastId = arr[i-1].id;
                    nextId = arr[i+1].id;
                }else if (i>0){
                    lastId = arr[i-1].id;
                    nextId = "a";
                }else if (i<arr.length-1){
                    lastId = "a";
                    nextId = arr[i+1].id;
                }
                html+='<ul> <li class="clearfix">' +
                    '<div class="fl">' +
                    ' <a target="_blank" href= "/MarketingDetail.html?id='+arr[i].id+'">'
                    +' <img alt="" src=" '+arr[i].url+'" />'+arr[i].contentSimp+'</a></div>'+
                    '<div class="fr"><h4><a target="_blank" href="/MarketingDetail.html?id='+arr[i].id+'">'+arr[i].title+
                    '</a></h4><h5><a target="_blank" href="/MarketingDetail.html?id='+arr[i].id+'">'+arr[i].contentSimp+
                    '</a></h5><p><span>'+
                    '<span><font>活动时间：</font>'+arr[i].createTimeS+'至'+arr[i].overdueTimeS+'</span>'+
                    '<span><font>活动状态：</font>'+arr[i].status+'</span></span></p>'+
                    '<h6 class="clearfix">' +
                    '<a target="_blank" href="/MarketingDetail.html?id='+arr[i].id+'" class="a2">查看详情</a> ' +
                    ' </h6> ' +
                    ' </div> ' +
                    ' </li> </ul>'
            }
            obj.innerHTML = html;
        }
    })
}