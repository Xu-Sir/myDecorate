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
            console.log(ass)
            var arr = JSON.parse(ass);
            var html = '';
            for (var i = 0; i < arr.length; i++) {
                html+='<li class="clearfix">\n' +
                    '  <div class="fl">\n' +
                    '     <img alt="" class="lazyload" data-original="'+arr[i].url+'" src="'+arr[i].url+'" />\n' +
                    ' </div>\n' +
                    '  <div class="fr">\n' +
                    '  <h4>'+arr[i].title+'</h4>\n' +
                    '  <div class="a1 clearfix">\n' +
                    '   <ul>\n' +
                    '   <li>地区：'+arr[i].location+'</li>\n' +
                    '    <li>户型：'+arr[i].type+'</li>\n' +
                    '    <li>面积：'+arr[i].area+'</li>\n' +
                    '    <li>预算：'+arr[i].budget+'</li>\n' +
                    '    </ul>\n' +
                    '    <a target="_blank" href="projectDetail.html"><i></i>查看工地</a>\n' +
                    '   </div>\n' +
                    '   <div class="a2 clearfix on1">\n' +
                    '  <span class="gb1">开工</span>\n' +
                    '  <span class="gb1">砌墙阶段</span>\n' +
                    '  <span class="gb1">水电改造</span>\n' +
                    ' <span class="gb1">泥瓦阶段</span>\n' +
                    '  <span class="gb1">木作阶段</span>\n' +
                    '  <span class="gb1">油漆阶段</span>\n' +
                    '  <span class="gb1">安装阶段</span>\n' +
                    ' <span class="gb1">完工</span>\n' +
                    ' </div>\n' +
                    '  </div>\n' +
                    ' </li>'
            }
            obj.innerHTML = html;
        }
    })
}