/**
 * Created by Administrator on 2017/8/18.
 */
$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '#menu',
        afterLoad: function (anchorLink, index) {
            if (index == 1 & $(".nav").attr("id") != undefined) {
                $(".nav").removeAttr("id", "tp")
            }
            if (index == 2) {
                $('.scene_pt .scene_left').animate({
                    marginLeft: '95px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.scene_pt .scene_right').delay(200).animate({
                    marginRight: '95px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.ContentB .scene_pt h3').delay(400).animate({
                    marginTop: '-6px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.scene_pt i').delay(600).animate({paddingTop: '7px', opacity: 1}, 1000, 'easeOutExpo')
                $('.sceneBox .scene_listc').delay(600).animate({
                    marginTop: '0',
                    opacity: 1
                }, 1000, 'easeInOutQuint')
                $('.sceneBox .scene_listh').delay(700).animate({
                    marginTop: '0',
                    opacity: 1
                }, 1000, 'easeInOutQuint')
                $('.sceneBox .scene_lista').delay(800).animate({
                    marginTop: '0',
                    opacity: 1
                }, 1000, 'easeInOutQuint')
                $('.sceneBox .scene_listn').delay(900).animate({
                    marginTop: '0',
                    opacity: 1
                }, 1000, 'easeInOutQuint')
                $('.sceneBox .scene_listg').delay(1000).animate({
                    marginTop: '0',
                    opacity: 1
                }, 1000, 'easeInOutQuint')
            }
            if (index == 3) {
                $('.scene_pt .scene_x1').animate({marginLeft: '108px', opacity: 1}, 1000, 'easeOutExpo')
                $('.scene_pt .scene_x2').delay(200).animate({
                    marginLeft: '108px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.ContentC .scene_pt h3').delay(400).animate({top: '0', opacity: 1}, 1000, 'easeOutExpo')
                $('.scene_pt .scene_x3').delay(600).animate({
                    marginRight: '108px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.scene_pt .scene_x4').delay(800).animate({
                    marginRight: '108px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.BusinessBox .ywimg').delay(800).animate({top: '0', opacity: 1}, 1000, 'easeOutElastic')
                $('.BusinessBox .ywa1').delay(1000).animate({left: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa2').delay(1200).animate({right: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa3').delay(1400).animate({left: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa4').delay(1600).animate({right: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa5').delay(1800).animate({left: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa6').delay(2000).animate({right: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa7').delay(2200).animate({left: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa8').delay(2400).animate({right: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa1 h3').delay(2600).animate({left: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa2 h3').delay(2800).animate({right: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa3 h3').delay(3000).animate({left: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa4 h3').delay(3200).animate({right: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa5 h3').delay(3400).animate({left: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa6 h3').delay(3600).animate({right: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa7 h3').delay(3800).animate({left: '0', opacity: 1}, 1000, 'easeInOutQuint')
                $('.BusinessBox .ywa8 h3').delay(4000).animate({right: '0', opacity: 1}, 1000, 'easeInOutQuint')
            }
            if (index == 4) {
                $('.ContentD .scene_pt .scene_left').animate({
                    marginLeft: '95px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.ContentD .scene_pt .scene_right').delay(200).animate({
                    marginRight: '95px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.ContentD .scene_pt h3').delay(400).animate({
                    marginTop: '-6px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.ContentD .scene_pt i').delay(600).animate({
                    paddingTop: '7px',
                    opacity: 1
                }, 1000, 'easeOutExpo')
                $('.roundabout_box').delay(1000).animate({
                    bottom: '0px',
                    opacity: 1,
                }, 1000, 'easeOutQuint')
            }
            if (index == 5) {
                $('.news_left .news_pt').animate({
                    marginLeft: 0,
                    opacity: 1,
                }, 1000, 'easeOutElastic')
                $('.news_left .news_pt h3').delay(200).animate({
                    marginLeft: 0,
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.news_left .news_pt span').delay(400).animate({
                    marginLeft: 0,
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.news_left .news_show1').delay(600).animate({
                    marginTop: '36px',
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.news_left .news_show2').delay(800).animate({
                    marginTop: '36px',
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.news_left .news_show3').delay(1000).animate({
                    marginTop: '36px',
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.news_right .more').delay(1200).animate({
                    marginTop: '6px',
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.news_right .news_img').delay(1400).animate({
                    marginTop: '131px',
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.news_right .news_txt').delay(1400).animate({
                    marginTop: '15px',
                    opacity: 1,
                }, 1000, 'easeOutExpo')
            }
            if (index == 6) {
                $('.Contact_ul .Contact_li1').animate({
                    marginLeft: "0",
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.Contact_ul .Contact_li2').delay(200).animate({
                    left: '60px',
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.Contact_ul .Contact_li3').delay(400).animate({
                    marginLeft: "0",
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.Contact_left .form_a1').delay(600).animate({
                    marginTop: "0",
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.Contact_left .form_a2').delay(800).animate({
                    marginTop: "0",
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.Contact_left .form_a3').delay(1000).animate({
                    marginTop: "0",
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.Contact_right .form_textarea').delay(1200).animate({
                    marginTop: "0",
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.form_tj').delay(1400).animate({
                    marginTop: "20px",
                    opacity: 1,
                }, 1000, 'easeOutExpo')
                $('.fotter').delay(1600).animate({
                    bottom: 0,
                    opacity: 1,
                }, 1000, 'easeOutExpo')
            }
        },
        onLeave: function (index, direction) {
            if (index >= 1 & $(".nav").attr("id") == undefined) {
                $(".nav").attr("id", "tp")
            }
            if (index == 2) {
                $('.scene_pt>*').stop(true, true).removeAttr('style')
                $('.scene_pt i').stop(true, true).removeAttr('style')
                $('.sceneBox>*').stop(true, true).removeAttr('style')
            }
            if (index == 3) {
                $('.ContentC .scene_pt>*').stop(true, true).removeAttr('style')
                $('.BusinessBox>*').stop(true, true).removeAttr('style')
                $('.BusinessBox .ywbox h3').stop(true, true).removeAttr('style')
            }
            if (index == 4) {
                $('.ContentD .scene_pt>*').stop(true, true).removeAttr('style')
                $('.ContentD .scene_pt i').stop(true, true).removeAttr('style')
                $('.roundabout_box').stop(true, true).removeAttr('style')
            }
            if (index == 5) {
                $('.news_left .news_pt').stop(true, true).removeAttr('style')
                $('.news_left>*').stop(true, true).removeAttr('style')
                $('.news_left ul>*').stop(true, true).removeAttr('style')
                $('.news_right>*').stop(true, true).removeAttr('style')
            }
            if (index == 6) {
                $('.Contact_ul>*').stop(true, true).removeAttr('style')
                $('.Contact_left>*').stop(true, true).removeAttr('style')
                $('.Contact_right>*').stop(true, true).removeAttr('style')
                $('.form_tj').stop(true, true).removeAttr('style')
                $('.fotter').stop(true, true).removeAttr('style')
            }
        },
    });
    var banner = [170, 568, 830];
    $(".banner").slide({
        titCell: ".hd ul li",
        mainCell: ".bd ul",
        mouseOverStop: true,
        effect: "fold",
        trigger: "mouseover",
        autoPlay: true,
        interTime: 7000,
        delayTime: 250,
        startFun: function (i, c) {
            for (var j = 0; j < 4; j++) {
                $(".banner" + j + "_txt").stop(true, true);
                $(".banner" + j + "_img").stop(true, true);
                $(".banner" + j + "_top").stop(true, true);
                $('.left' + j + '_img').stop(true, true);
                $('.left' + j + '_txt').stop(true, true);
                $('.lefta' + j + '_img').stop(true, true);
                $('.lefta' + j + '_txt').stop(true, true);
                $('.leftb' + j + '_img').stop(true, true);
                $('.leftb' + j + '_txt').stop(true, true);
                $('.leftc' + j + '_img').stop(true, true);
                $('.leftc' + j + '_txt').stop(true, true);
                $('.leftd' + j + '_img').stop(true, true);
                $('.leftd' + j + '_txt').stop(true, true);
                $('.right' + j + '_img').stop(true, true);
                $('.right' + j + '_txt').stop(true, true);
                $('.righta' + j + '_img').stop(true, true);
                $('.righta' + j + '_txt').stop(true, true);
                $('.rightb' + j + '_img').stop(true, true);
                $('.rightb' + j + '_txt').stop(true, true);
                $('.rightc' + j + '_img').stop(true, true);
                $('.rightc' + j + '_txt').stop(true, true);
                $('.rightd' + j + '_img').stop(true, true);
                $('.rightd' + j + '_txt').stop(true, true);
                $('.banner' + j + '_img').removeAttr('style');
                $('.banner' + j + '_txt').removeAttr('style');
                $(".banner" + j + "_top").removeAttr('style');
                $('.left' + j + '_img').removeAttr('style');
                $('.left' + j + '_txt').removeAttr('style');
                $('.lefta' + j + '_img').removeAttr('style');
                $('.lefta' + j + '_txt').removeAttr('style');
                $('.leftb' + j + '_img').removeAttr('style');
                $('.leftb' + j + '_txt').removeAttr('style');
                $('.leftc' + j + '_img').removeAttr('style');
                $('.leftc' + j + '_txt').removeAttr('style');
                $('.leftd' + j + '_img').removeAttr('style');
                $('.leftd' + j + '_txt').removeAttr('style');
                $('.right' + j + '_img').removeAttr('style');
                $('.right' + j + '_txt').removeAttr('style');
                $('.righta' + j + '_img').removeAttr('style');
                $('.righta' + j + '_txt').removeAttr('style');
                $('.rightb' + j + '_img').removeAttr('style');
                $('.rightb' + j + '_txt').removeAttr('style');
                $('.rightc' + j + '_img').removeAttr('style');
                $('.rightc' + j + '_txt').removeAttr('style');
                $('.rightd' + j + '_img').removeAttr('style');
                $('.rightd' + j + '_txt').removeAttr('style');
            }
            // $(".timer").stop(true, true).animate({
            //         "width": "0%"
            //     },
            //     0).animate({
            //         "width": "100%"
            //     },
            //     7000);
            $(".banner" + i + "_img").animate({
                    left: "0",
                    opacity: "1"
                },
                750);
            $(".banner" + i + "_txt").animate({
                    left: banner[i],
                    opacity: "1"
                },
                750,
                function () {
                    $(".banner" + i + "_txt").css("transition", "all 0.5s ease-out")
                });
            $(".banner" + i + "_top").animate({
                marginTop: '-212px',
                opacity: "1"
            }, 1000, 'easeOutElastic')
            $('.left' + i + '_img').delay(200).animate({
                left: '143px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.left' + i + '_txt').delay(400).animate({
                left: '143px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.right' + i + '_img').delay(600).animate({
                right: '164px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.right' + i + '_txt').delay(800).animate({
                right: '170px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.lefta' + i + '_img').delay(1000).animate({
                left: '64px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.lefta' + i + '_txt').delay(1200).animate({
                left: '64px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.righta' + i + '_img').delay(1400).animate({
                right: '64px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.righta' + i + '_txt').delay(1600).animate({
                right: '70px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.leftb' + i + '_img').delay(1800).animate({
                left: '102px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.leftb' + i + '_txt').delay(2000).animate({
                left: '100px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.rightb' + i + '_img').delay(2200).animate({
                right: '102px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.rightb' + i + '_txt').delay(2400).animate({
                right: '102px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.leftc' + i + '_img').delay(2600).animate({
                left: '50px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.leftc' + i + '_txt').delay(2800).animate({
                left: '50px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.rightc' + i + '_img').delay(3000).animate({
                right: '-48px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.rightc' + i + '_txt').delay(3200).animate({
                right: '-48px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.leftd' + i + '_img').delay(3400).animate({
                left: '130px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.leftd' + i + '_txt').delay(3600).animate({
                left: '130px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.rightd' + i + '_img').delay(3800).animate({
                right: '160px',
                opacity: 1,
            }, 1000, 'easeOutBack')
            $('.rightd' + i + '_txt').delay(4000).animate({
                right: '180px',
                opacity: 1,
            }, 1000, 'easeOutBack')

        }
    });
    $('.roundabout_box ul').roundabout({
        btnNext: ".next", //绑定左按钮
        btnPrev: ".prev",  //绑定右按钮
        duration: 1000, //记录幻灯片滚动速度
        minScale: 0.6,  //记录显示比例关系
        autoplay: true,  //开启自动轮播
        autoplayDuration: 5000,  //自动轮播间隔时间
        minOpacity: 0,  //设置最小透明度
        maxOpacity: 1,  //设置最大透明度
        reflect: true,  // 是否开启反向选择
        startingChild: 0,  //初始化显示图片
    });
});
