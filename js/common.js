//  슬라이더
let liLength = $("#bannerWrap .banner").length;
let num;
let classNum;
let state = 1;
let nextSlider = function() {
  classNum = $("#bannerWrap .banner:first").attr("class").substr(13, 1);
  if (classNum == liLength) classNum = 0;
  $(".slider_button a").removeClass('active2');
  $(".slider_button a:eq("+ classNum +")").addClass('active2');
  $("#bannerWrap .banner:eq(1)").addClass("active")
                           .css({ opacity: 0 })
                           .animate({ opacity: 1 }, 500, function() {
                             $("#bannerWrap").append($("#bannerWrap .banner:eq(0)"))
                             $("#bannerWrap .banner:last").removeClass('active');
                             state = 1;
                           })
}
let prevSlider = function() {
  classNum = $("#bannerWrap .banner:last").attr("class").substr(13, 1)-1;

  $(".slider_button a:eq("+ classNum +")")
  $("#bannerWrap .banner:last").addClass('active')
                          .css({ opacity: 0 })
                          .animate({ opacity: 1 }, 500, function() {
                            $("#bannerWrap").prepend($("#bannerWrap .banner:last"));
                            $("#bannerWrap .banner:eq(1)").removeClass('active');
                            state = 1;
                          })
}
$(".slider_button a").on('click', function() {
  if ( state == 1 ) {
    state = 0;
    let btnIndex = $(this).index()+1;
    num = btnIndex;
    if ( $(".banner"+btnIndex).hasClass('active') ) {
      state = 1;
      return;
    }
    $(".slider_button a").removeClass('active2');
    $(this).addClass('active2');
    $(".banner"+btnIndex).addClass('active').css({ opacity: 0 })
                         .animate({ opacity: 1 }, 500, function() {
                           $("#bannerWrap .banner").not($(this)).removeClass('active');
                           for ( let i=1; i<liLength; i++ ) {
                             if ( num == liLength ) num = 0;
                             num++;
                             $("#bannerWrap").append($(".banner"+num));
                           }
                           state = 1;
                         })
  }
})
let timer = setInterval(_.throttle(function() {
              nextSlider();
            },3500),3500)
$(".slider_button a").on('click', function(e){
  e.preventDefault();
  clearInterval(timer);
  timer = setInterval(nextSlider, 3500)
})

// 브랜드 스토리

/* 1 */
$(window).scroll( function(){
    /* 2 */
    $('.text_box').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* 3 */
        if( bottom_of_window > bottom_of_object/1.5 ){
            $(this).animate({'opacity':'1'},1500);
        }
    });
});


// 탭 메뉴
$(".bsnw h3").click(function () {
    $(".bsnw h3").removeClass("on");
    $(this).addClass("on");
    $(".bsnw ul").hide();
    $(this).next().css({ display: 'flex', opacity: 0 }).animate({ opacity: 1 }, 200)
  });
//  top 버튼
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
          $('#MOVE_TOP_BTN').fadeIn();}
    else {$('#MOVE_TOP_BTN').fadeOut();}
});
$("#MOVE_TOP_BTN").click(function() {
$('html, body').animate({ scrollTop : 0}, 400); return false; }); });

$(".footerLogo").click(function() {
$('html, body').animate({ scrollTop : 0}, 400); return false; });
