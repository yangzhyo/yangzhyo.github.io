$(function(){
    var tags = $(".post-tag");
    tags.each(function(){
        $(this).addClass("post-tag-"+Math.floor((Math.random() * 4) + 1));
    });
    
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100){
            $('.go-to-top').fadeIn(300);
        }else{
            $('.go-to-top').fadeOut(300);
        }
    });

    $('.go-to-top').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);});
});