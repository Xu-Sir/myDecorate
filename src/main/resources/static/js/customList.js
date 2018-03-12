var total;
$(function () {
    //marketList 列表
    var aspNetPager1 = document.getElementById("AspNetPager1")
    $.ajax({
        type:'post',
        url:'/projectInsList',
        data:{page:1},
        success: function(data) {
            total = JSON.stringify(data.data.total);
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
            // console.log(ass)
            var arr = JSON.parse(ass);
            var html = '';
            for (var i = 0; i < arr.length; i++) {
                html+=''
            }
            obj.innerHTML = html;
        }
    })
}