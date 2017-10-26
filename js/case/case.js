/**
 * Created by Administrator on 2017/9/8.
 */

//浮动定位二级导航栏目
function h(id) {
    var arr = [];
    id.each(function (i) {
        arr.push(id.eq(i).offset().top - $(".Nav_box").height() - 30);
    });
    for (var i = 0; i < arr.length; i++) {
        if ($(document).scrollTop() > arr[i]) {
            tab1(i, 'active');
        }
    }
}
function tab1(i, clas) {
    $('.Nav_box li').removeClass(clas).eq(i).addClass(clas);
}
$(window).scroll(function () {
    h($('.title'));
});
$(".Nav_box li").click(function (e) {
    e.preventDefault();
    var index = ($(".Nav_box li")).index($(this));
    var goTo = $('.title').eq(index).offset().top - $(".Nav_box").height() - 20;
    $("html, body").animate({
        scrollTop: goTo
    }, 500);
});
