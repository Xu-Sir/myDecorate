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

    var objC = document.getElementById("case_list");
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
            // console.log(html);
            objC.innerHTML = html;
        }

    });
//加载 在建工地

    var objP = document.getElementById("projectInsListId");
    $.ajax({
        type:'post',
        url:'/projectInsList',
        success:function(data){
            var ass = JSON.stringify(data.data.list);
            var arr = JSON.parse(ass);
            var html ='';
            for (var i = 0; i < arr.length; i++) {

                html += '<li>\n' +
                    '<a target="_blank" href="SiteLive8592.html?buliding=%e4%be%9d%e4%ba%91%e5%8d%8e%e5%ba%9c">\n' +
                    '<div class="a1">\n' +
                    '<h4>\n' +
                    '<img alt="" class="lazyload" data-original="'+arr[i].url+'" src="'+arr[i].url+'" />\n' +
                    '</h4>\n'+
                    '</div>\n' +
                    '<div class="a2">\n' +
                    '<h5>'+arr[i].village+'</h5>\n' +
                    '<h6>地址：'+arr[i].location+'</h6>\n' +
                    '</div>\n' +

                    '</a>\n' +
                    '</li>'

            }
            // console.log(html);
           objP.innerHTML = html;
            //初始化样式
            jQuery(".index_03 .mian").slide({ mainCell: ".bd_i3", autoPage: true, effect: "left", vis: 4, scroll: 2 });
        }

    });
    //加载首页最新活动
    var objCam = document.getElementById("fr_ulCampaign");
    $.ajax({
        type:'post',
        url:'/marketList',
        success:function(data){
            var ass = JSON.stringify(data.data.list);
            var arr = JSON.parse(ass);
            var html ='';
            for (var i = 0; i < arr.length; i++) {
                html += '<li>\n' +
                    '<a target="_blank" href="Detailfa28.html?code=0606&amp;id=3911" class="clearfix">\n' +
                    '<div class="a1">\n' +
                    '<h4>'+arr[i].createTimeSDay+'</h4>\n' +
                    '<h6>'+arr[i].createTimeSYM+'</h6>\n' +
                    '</div>\n' +
                    '<div class="a2">\n' +
                    '<h5>'+arr[i].title+'</h5>\n' +
                    '<p>'+arr[i].contentSimp+'</p>\n' +
                    '</div>\n' +
                    '</a>\n' +
                    '</li>'

            }
            // console.log(html);
            objCam.innerHTML = html;
        }

    });


})