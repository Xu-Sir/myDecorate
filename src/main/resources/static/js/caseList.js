var total;
$(function () {
    //marketList 列表
    var aspNetPager1 = document.getElementById("AspNetPager1")
    $.ajax({
        type:'post',
        url:'/caseList',
        data:{page:1},
        success: function(data) {
            var ass = JSON.stringify(data.data.list);
            total = JSON.stringify(data.data.total);
            var arr = JSON.parse(ass);
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
    var obj = document.getElementById("item-list");
    var aspNetPager1 = document.getElementById("AspNetPager1")
    // console.log(objs)
    $.ajax({
        type:'post',
        url:'/caseList',
        data:{page:objs.curr},
        success: function(data) {
            var ass = JSON.stringify(data.data.list);
            //total = JSON.stringify(data.data.total);
            var arr = JSON.parse(ass);
            var html = '';
            for (var i = 0; i < arr.length; i++) {
                 html+='<li><div class="img_box">'
                    +'<img class="img lazy" src="'+arr[i].url+'" data-original="http://imgs.bzw315.com/uploadfiles/image/2017/9/22/201709222141046182.jpg?x-oss-process=image/resize,w_290,h_220/sharpen,100" alt="'+arr[i].title+'" style="display: block;">'
                    +'<a href="/caseDetal.html?id='+arr[i].id+'" title="'+arr[i].title+'" class="mask" target="_blank"></a></div>'
                    +'<div class="txt">'
                    +'<h6><a href="/caseDetal.html?id='+arr[i].id+'" title="'+arr[i].title+'" target="_blank">'+arr[i].title+'</a></h6>'
                    +'</div>  </li>'
            }
            obj.innerHTML = html;
        }
    })
}