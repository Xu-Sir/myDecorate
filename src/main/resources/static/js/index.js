$(function () {
    //统计访问量
    $.ajax({
        type:'post',
        url:'/countPv',
        success: function (data) {
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
//加载设计案例

    var obj = document.getElementById("case_list");
    $.ajax({
        type:'post',
        url:'/caseIndexList',
        success:function(data){
            var ass = JSON.stringify(data.data.list);
            var arr = JSON.parse(ass);
            var html ='';
            for (var i = 0; i < arr.length; i++) {
                 html += '<div class="a'+i+'">\n' +
                    '<a target="_blank" href="caseDetail.html?id='+arr[i].id+'">\n' +
                    '<img alt="" class="lazyload" data-original="'+arr[i].url+'" src="'+arr[i].url+'" /><span>\n' +
                    '<font>'+arr[i].url+'</font><font>'+arr[i].type+'  |  '+arr[i].style+'  |  '+arr[i].style+'平米 </font></span></a>\n' +
                    '</div>'

            }
            console.log(html);
            obj.innerHTML = html;
        }

    })


})