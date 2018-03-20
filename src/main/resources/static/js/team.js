var total;
$(function () {
    //marketList 列表
    var aspNetPager1 = document.getElementById("AspNetPager1")
    $.ajax({
        type:'post',
        url:'/teamList',
        data:{page:1},
        success: function(data) {
            var ass = JSON.stringify(data.data.list);
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
            $("#msg_code").attr('src',"tools/"+data+".jpg");
            $("#xd_code").attr('src',"tools/"+data+".jpg");
        }
    })


});
function pageOnclick(objs) {
    var obj = document.getElementById("item-list");
    var aspNetPager1 = document.getElementById("AspNetPager1")
    // console.log(objs)
    $.ajax({
        type:'post',
        url:'/teamList',
        data:{page:objs.curr},
        success: function(data) {
            var ass = JSON.stringify(data.data.list);
            //total = JSON.stringify(data.data.total);
            var arr = JSON.parse(ass);
            var html = '';
            for (var i = 0; i < arr.length; i++) {
                html+=' <li><div class="pic"><a target="_blank" href="/caseDetail.html" title="'+arr[i].name+'">'+
                    '<img class="lazy" src="'+arr[i].imageUrl+'" data-original="http://imgs.bzw315.com/uploadfiles/image/2017/4/6/201704062115243672.jpg?x-oss-process=image/resize,w_290,h_240/sharpen,100" alt="'+arr[i].title+'" />'
                    +'<i class="shade"></i>'+'</a> </div> <div class="txt_box"> <div class="txt"> <p>'+arr[i].experience+'年</p>'
                    +'<p><span>普通住宅</span><span>复式住宅</span></p></div>'
                    +'<a href="/designerDetail.html?id='+arr[i].id+'" title="预约设计" class="order bzw_popup_01">预约设计</a></div>'
                    +'<div class="ptn_name"><span>设计师</span>'
                    +'<strong>'
                    +'<a target="_blank" href="/designerDetail.html?id='+arr[i].id+'" title="'+arr[i].name+'">'
                    +arr[i].name+'</a></strong></div>'
                    +'<div class="hd_pt">'
                    +'<a target="_blank" href="/designerDetail.html?id='+arr[i].id+'" title="'+arr[i].name+'">'
                    +'<img class="lazy" src="'+arr[i].images+'" data-original="http://imgs.bzw315.com/uploadfiles/image/2017/4/6/636271535811934342.png?x-oss-process=image/resize,w_93,h_93/sharpen,100" alt="+arr[i].name++">'
                    +'</a></div><b class="ptn_num">案例&nbsp;1</b></li>'

            }
            // var htmlPage = '';
            // htmlPage+='<div id="demo1"></div>'
            // aspNetPager1.innerHTML=htmlPage;
            obj.innerHTML = html;
        }
    })
}