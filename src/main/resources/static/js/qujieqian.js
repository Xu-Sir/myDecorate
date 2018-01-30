$(function(){
    $('#gain').text('获取验证码')
    var phone='';
    var password='';
    var code='';
    var bStop=true;
    var regSource="";
    var platform='';
    var vcode='';
    var token1='';
    var id=document.getElementById("ids").value;
    document.addEventListener('touchmove', function (event) {
        //判断条件,条件成立才阻止背景页面滚动,其他情况不会再影响到页面滚动
        // if ($(".qu").css('display')=="block") {
        //     event.preventDefault();
        // }
        if ($(".qujie").css('display')=="block") {
            event.preventDefault();
        }
    });
    GetRequest();
    //将url参数变成对象
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str1 = url.substr(1);
            //alert(str1);
            var strs = str1.split("&");
            // for (var i = 0; i < strs.length; i++) {
            // theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);//获取中文参数转码<span style="font-family: Arial, Helvetica, sans-serif;">decodeURI</span>，（unescape只针对数字，中文乱码)
            regSource=strs[0].split("channel=")[1];
            // }


        }
//      return theRequest;
//         regSource=theRequest.type;
    }

    $('.agree-pop-right').click(function(){
        $('.qujie').hide();
        $('.qu').hide();
        $('body').removeClass('body-tab');
    })

    $('.qu-text-off').click(function(){
        $('.qujie').hide();
        $('.qu').hide();
        $('body').removeClass('body-tab');
    })

    $('.agree-pop-btn').click(function(){
        $('.qu').show();
        $('body').addClass('body-tab');
    })

    //验证码
    $('#gain').click(function(){
        if(bStop){

            if(!isPoneAvailable(phone)){
                tishi('请输入正确手机号')
            }else if(!CheckPassWord(password)){
                tishi('请输入正确的密码')
            }else{
                $('.qujie').show();
                createCode();
            }
        }
    })

    //判断平台
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        platform='IOS';
    } else if (/(Android)/i.test(navigator.userAgent)) {
        platform='Android';
    } else {
        platform='IOS';
    };

    //手机
    $(".input-phone").blur(function(){
        phone=$(".input-phone").val();
        console.log(phone);
        if(!isPoneAvailable(phone)){
            tishi('请输入正确手机号')
        }
    });

    //密码
    $(".input-pwd").blur(function(){
        password=$(".input-pwd").val();
        if(!CheckPassWord(password)){
            tishi('请输入正确的密码')
        }
    });

    //验证码
    $('#tab-one').click(function(){
        createCode();
    })
    $('.agree-submit').click(function(){
        validateCode();
    })

    //提示
    function tishi(str){
        $('#tishi').show();
        $('#tishi').text(str);
        setTimeout(function(){
            $('#tishi').hide();
        },2000)
    }

    //手机验证
    function isPoneAvailable(str) {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }

    //必须为字母加数字且长度不小于6位
    function CheckPassWord(password) {
        var str = password;
        if (str == null || str.length <6) {
            console.log(str)
            return false;
        }
        var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
        if (!reg1.test(str)) {
            return false;
        }
        var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
        if (reg.test(str)) {
            return true;
        } else {
            return false;
        }
    }


    //发生短信
    function phoneCode(){
//		bStop=false;
// 		var times=5
// 		setInterval(function(){
// 			times--;
// 			$('#gain').css('color','#999999')
// 			$('#gain').html(times+'秒后重新获取')
//
// 			if(times<=0){
// 				clearInterval();
// 				$('#gain').html('获取验证码')
// 				$('#gain').css('color','#FFDE00');
// 				bStop=true;
//
// 			}
//
// 		},1000)
        $.ajax({
            type:'post',
            url:'/Api-App/phonecode/vcode1',
            data:{
                phone:phone,
                flag:0
            },
            // data:'phone=' + phone + '&flag=' + 0,
            success: function(data) {
                if(data.errCode==1){
                    tishi('该手机号已经注册过了')
                    return false;
                }else
                if(data.success){
                    tishi(data.errMsg);
                    token1=data.body.token;
                    bStop=false;
                    var times=60;
                    $('#gain').text('');
                    var time=setInterval(function(){
                        times--;
                        $('#gain').css('color','#999999')
                        $('#gain').text(times+'秒后重新获取')

                        if(times<=0){
                            clearInterval(time);
                            $('#gain').text('获取验证码')
                            $('#gain').css('color','#FFDE00');
                            bStop=true;

                        }

                    },1000)
                    //短信验证码
                    $('.input-code').keydown(function(){
                        console.log($('.input-code').val());

                        // if($('.input-code').val()==data.errCode&&$('.input-code').val()!=''){
                        if(data.errCode==0){
                            $('.qu-submit').css({'background':'#FFEA00','color':'#000'})
                            $('.qu-submit').addClass('submit-active')
                            $('.qu-submit').click(function(){
                                var id=document.getElementById("ids").value
                                // if($('.input-code').val()==data.errCode&&$('.input-code').val()!=''){
                                submit();
                                function submit(){
                                    var vcode=$('.input-code').val();
                                    $.ajax({
                                        type:'post',
                                        url:'/Api-App/register',
                                        data:{//tring platform, String downloadSource,
                                            "phone":phone,
                                            "vcode": vcode,
                                            "token": token1,
                                            "id":id,
                                            "password":password,
                                            "downloadSource":regSource,
                                            "platform":platform
                                        },
                                        success: function(data) {
                                            if(data.errCode==0){
                                                tishi(data.errMsg)
                                                if(platform=='IOS'){
                                                    window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.qujieqian"
                                                }else{
                                                    window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.qujieqian"
                                                }
                                            }else{
                                                tishi(data.errMsg)
                                            }
                                        }
                                    })
                                }
                                // }
                            })

                        }else{
                            $('.qu-submit').removeClass('submit-active')
                        }

                    });


                }
            }
        })
    }

    //发送平台
    $.ajax({
        type:'post',
        url:'/Api-App/promotionId',
        data:{
            channel_type:regSource,
            device_type:platform,
        },
        success: function(data) {
            console.log(data);
            $("#ids").val(data);
        }
    })



    //生成验证图片
    function createCode() {
        code = "";
        var codeLength = 4; //验证码的长度
        var checkCode = document.getElementById("argee-pop-img");
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
        for (var i = 0; i < codeLength; i++)
        {
            var charNum = Math.floor(Math.random() * 52);
            code += codeChars[charNum];
        }
        if (checkCode)
        {
            checkCode.innerHTML = code;
        }
    }

    function validateCode()
    {
        var inputCode = document.getElementById("pop-input").value;
        if (inputCode.length <= 0)
        {
//          tishi("请输入验证码！");
            $('.tab-img-left').text('请输入验证码！')
            $('.tab-img-left').css('visibility','visible')
        }
        else if (inputCode.toUpperCase() != code.toUpperCase())
        {
//          tishi("验证码输入有误！");
            $('.tab-img-left').text('验证码输入有误！')
            $('.tab-img-left').css('visibility','visible')
            createCode();
        }
        else
        {
            tishi("验证码正确！");
            $('.tab-img-left').css('visibility','hidden')
            $('.qujie').hide();
            phoneCode();
        }
    }
});


