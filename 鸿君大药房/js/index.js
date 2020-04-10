$("#zk_btn").click(function () {
    // 上下滑动切换
    $("#zk_box").slideToggle('fast');
})
// 类似tab
// $('.show_1').show()
// $('.show_2').hide()
$('#show_btn1').click(function(){
    $('.show_2').hide()
    $('.show_1').show()
    $('#ys').html('1/2')
})
$('#show_btn2').click(function(){
    $('.show_2').show()
    $('.show_1').hide()
    $('#ys').html('2/2')
})

$('.serch').click(function(){
    $('.serch_box').fadeIn('fast')
})
$('#qx').click(function(){
    $('.serch_box').fadeOut('fast')
})
