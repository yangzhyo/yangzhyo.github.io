$(function(){
    var tags = $(".post-tag");
    tags.each(function(){
        $(this).addClass("post-tag-"+Math.floor((Math.random() * 4) + 1));
    });
    /*
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100){
            $('.topfade').fadeIn(300);
        }else{
            $('.topfade').fadeOut(300);
        }
    });

    $('.topfade').click(function(){
        $('html,body').animate({scrollTop: '0px'}, 800);});

*/
});