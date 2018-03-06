var total;
$(function () {
    //marketList 列表
    var aspNetPager1 = document.getElementById("AspNetPager1")
    $.ajax({
        type:'post',
        url:'/projectInsList',
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

});
function pageOnclick(objs) {
    var obj = document.getElementById("item-list");
    // console.log(objs)
    $.ajax({
        type:'post',
        url:'/projectInsList',
        data:{page:objs.curr},
        success: function(data) {
            var ass = JSON.stringify(data.data.list);
            //total = JSON.stringify(data.data.total);
            var arr = JSON.parse(ass);
            var html = '';
            for (var i = 0; i < arr.length; i++) {
                var types = "";
                if (arr[i].type==1){
                    types = "全包"
                }else if (arr[i].type==2){
                    types = "面谈"
                }
                html+='<li><div class="img_box">'
                    +'<img class="img lazy" src="'+arr[i].url+'" data-original="http://imgs.bzw315.com/uploadfiles/image/2017/9/22/201709222141046182.jpg?x-oss-process=image/resize,w_290,h_220/sharpen,100" alt="'+arr[i].title+'" style="display: block;">'
                    +'<a href="/caseDetal.html?id='+arr[i].id+'" title="'+arr[i].title+'" class="mask" target="_blank">' +
                    '<div class="tit">'+
                    '<p>装修方式：<span>'+types+'</span></p>'+
                    '<p>户型面积：<span>'+arr[i].area+'㎡</span></p>'+
                    '<p>装修预算：<span>'+arr[i].budget+'万</span></p>'+
                    '</div></a></div>'
                    +'<div class="txt">'
                    +'<h6><a href="/caseDetal.html?id='+arr[i].id+'" title="'+arr[i].title+'" target="_blank">'+arr[i].title+'</a></h6>'
                    +'</div>  </li>'
            }
            obj.innerHTML = html;
        }
    })
}