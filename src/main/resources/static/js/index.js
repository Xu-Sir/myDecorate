$(function () {
    $.ajax({
        type:'post',
        url:'/countPv',
        date:{
            name:"zhangsan "
        },
        success:function (data) {
        }
    })
})