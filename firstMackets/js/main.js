
$(function(){
    $('.menuToggle').on('click',function(){
        $('.menu').slideToggle(300, function(){
            if($(this).css('display')=='none') {
                $(this).removeAttr('style')
            }
        });
    });
});

(function($) {
    $(function() {
     
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
     
    });
    })(jQuery);
  
  

$(function(){
    $('.say_slider').slick({
        dots:true
    });
})

$(window).scroll(function() {
    console.log($(window).scrollTop());
    if($(window).scrollTop()<540 && $(window).scrollTop()<540) {
        var a=document.getElementById('header');
        a.style.backgroundColor="transparent";
        a.style.paddingTop="30px";
    }
    if($(window).scrollTop()>540&&$(window).scrollTop()>540) {
        var a=document.getElementById('header');
        a.style.backgroundColor='black'; 
		a.style.zIndex=3;
        a.style.color='crimson';
        a.style.transition="1s";
        a.style.opacity="0.7";
    }
});

