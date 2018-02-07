$(function () {
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

})