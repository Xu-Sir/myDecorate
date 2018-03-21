$(document).ready(function () {
    //$(".Nav>ul>li").hover(function () {
    //    $(this).find(".Drop_Down").stop(false, true).slideToggle();
    //});

    //$(".sub-Nav>ul>li").hover(function () {
    //    $(this).find(".Drop_Down").stop(false, true).slideToggle();
    //});
    $(".Nav>ul>li").hover(function () {
        $(this).find(".Drop_Down").stop(false, true).slideDown();
    }, function () {
        $(this).find(".Drop_Down").stop(false, true).slideUp();
    });

    $(".sub-Nav>ul>li").hover(function () {
        $(this).find(".Drop_Down").stop(false, true).slideDown();
    }, function () {
        $(this).find(".Drop_Down").stop(false, true).slideUp();
    });

    // $(window).scroll(function () {
    //     var wh = $(window).scrollTop();
    //     if (wh == 0) {
    //         $(".banner-fork").addClass("on");
    //         $(".fork-sig").removeClass("on");
    //         $(".idc").css("width", "100%");
    //     } else {
    //         $(".banner-fork").removeClass("on");
    //         $(".fork-sig").addClass("on");
    //         $(".idc").css("width", "137px");
    //     }
    // });

    /*index-banner*/
    $('.banner-fork>i').on('click', function () {
        $(this).parent().removeClass('on');
        $('.fork-sig').addClass('on');
        $(".idc").css("width", "137px");
    });

    $('.fork-sig').on('click', function () {
        $(this).removeClass('on');
        $('.banner-fork').addClass('on');
        $(".idc").css("width", "100%");
    });

    /*sub-banner*/
    $('.banner-fork form>i').on('click', function () {
        $(this).parent().fadeOut();
    });


    $('.show .pp').on('hover', function () {
        $(this).find('.hide').stop(false, true).fadeToggle();
    });
    $('.about-04 .mian ul li>p').on('click', function () {
        if ($(this).siblings('.join').is(":hidden")) {
            $(this).siblings('.join').slideDown();
            $(this).parent('li').addClass('on');
            $(this).parents('li').siblings().find('.join').slideUp();
            $(this).parents('li').siblings().removeClass('on');
        } else {
            $(this).siblings('.join').slideUp();
            $(this).parent('li').removeClass('on');
        }
    });
    $('.shead-left>i').on('click', function () {
        $(this).parent().addClass('on');
        $(this).fadeOut(300);
    });

    $('.get-Close span i').on('click', function () {
        $(this).parents(".shead-left").removeClass('on');
        $('.shead-left>i').fadeIn(1000);
    });

     
    $('.shead-right>i').on('click', function () {
        $(this).parent().addClass('on');
        $(this).fadeOut(300);
    });
    $('.shead-right form>i').on('click', function () {
        $(this).parents(".shead-right").removeClass('on');
        $('.shead-right>i').fadeIn(1000);
    });

    //投诉建议弹出
    $('.tachu').on('click', function () {
        $('.customer-04.div1').fadeIn();
    });
    //在线下单弹出
    $('.tachu2').on('click', function () {
        $('.customer-04.div2').fadeIn();
    });
    //申请设计弹出
    $('.tachu3').on('click', function () {
        $('.customer-04.div3').fadeIn();
    });
    //预算弹出
    $('.tachu4').on('click', function () {
        $('.customer-04.div4').fadeIn();
    });

    //楼层滚动
    function side(el1, el2, zt, _top, prve, next) {
        var canGo = true;
        var al = $(el1);//选项li
        var main = $(el2);//对应层级雷鸣
        var on = zt;
        var abc = main.length;
        var _prve = $(prve);
        var _next = $(next);
        var i = 0;
        var cba = al.length;

        main.each(function (index) {
            if ($(window).scrollTop() >= $(this).offset().top) {
                al.removeClass(on);
                al.eq(index).addClass(on);
            }
        });
        al.each(function (index) {
            $(this).click(function () {
                canGo = false;
                al.removeClass(on);
                $(this).addClass(on);
                $("html,body").stop(true, true).animate({
                    "scrollTop": main.eq(index).offset().top - _top
                }, 500, function () {
                    canGo = true;
                    i = index;
                });
            });
        });
        $(window).scroll(function () {
            if (canGo) {
                for (var index = abc - 1; index >= 0; index--) {
                    if ($(window).scrollTop() >= main.eq(index).offset().top - _top - 1) {
                        if (al.eq(index).hasClass(on)) {
                        }
                        else {
                            al.removeClass(on);
                            al.eq(index).addClass(on);
                        }
                        i = index;
                        break;
                    }
                }
            }
        });
        //	    function play_1(){//动画移动
        //			al.eq(i).addClass("on").siblings().removeClass("on").parent().siblings().find("font").removeClass("on");
        //			$("html,body").stop(true, true).animate({
        //              "scrollTop": main.eq(i).offset().top-_top
        //          }, 500,function(){
        //              canGo=true;
        //          });
        //		}
        _prve.click(function () {
            i--;
            i = (i < 0 ? 0 : i);
            al.eq(i).click();
        });
        _next.click(function () {
            i++;
            i = (i > (cba - 1) ? (cba - 1) : i);
            al.eq(i).click();
        });
    }
    side('.about-menu ul li', '.ab', 'on', '64');
    side('.customer-menu ul li', '.ggdd', 'on', '64');
    side('.soll_ic font', '.soll_id li', 'on', '0', '.hh_up', '.hh_down');

    //返回顶部
    $('.roll-nav').hide();
    $(window).scroll(function () {
        var wh = $(window).scrollTop();
        if (wh > 500) {
            $('.roll-nav').fadeIn();
        } else {
            $('.roll-nav').fadeOut();
        }
    });

    $('.roll-nav .a4').click(function () {
        if ($(document).scrollTop() == 0) {
        } else {
            $('body,html').animate({ scrollTop: 0 }, 1000);
        }
    });

    /*工地直播详情页*/
    $('.Site-live-detail .live-a2 .mian_2 .gj>ul>li').on('click', function () {
        var gba = $(this).find('img').attr("src");
        var winHH = $(window).height();
        $('.pohot span').find('img').attr("src", gba).parents('.pohot').fadeIn();
        var imghh = $(this).find('img').height() * 3.3;
        if (winHH <= imghh) {
            $('.pohot span').find('img').height(winHH - 60);
        } else {
            $('.pohot span').find('img').height('auto');
        }
    });
    //$('.Site-live-detail .live-a2 .mian_2 .gj>ul>li').on('click', function () {
    //    var gba = $(this).find('img').attr("src");
    //    var winHH = $(window).height() - 60;
    //    $('.pohot span').find('img').attr("src", gba).parents('.pohot').fadeIn();
    //});
    $('.pohot .p-bg').on('click', function () {
        $(this).parents('.pohot').fadeOut();
    });
    $('.pohot i').on('click', function () {
        $(this).parents('.pohot').fadeOut();
    });
    $('.pohot .mian').on('click', function () {
        $(this).parents('.pohot').fadeOut();
    });

    //图片预加载
    // $("img.lazyload").lazyload({
    //     effect: "fadeIn",
    //     threshold: 180,
    //     skip_invisible: false,
    // });

    $('#online').click(function () {
        document.getElementsByClassName('nb-icon-bridge-base')[0].click();
        return false;
    });
});
