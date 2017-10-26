/**
 * Created by Administrator on 2017/10/24.
 */
function offtop(self, v) {
    $('html,body').animate({
        scrollTop: $(v).offset().top
    }, 800);
}

$('.solve_1050 li.info1').on('click', function () {
    offtop(this, '.integratedmanagement')
})

$('.solve_1050 li.info2').on('click', function () {
    offtop(this, '.Bigdata')
})

// $('.solve_1050 li.info3').on('click', function () {
//     offtop(this, '')
// })