/**
 * Created by liuxiaohuan
 * download block
 */

$('.spe-hover').mouseenter(function(){

    if($(this).hasClass('active')){
        $(this).removeClass('active');
    }else{
        $('.spe-hover').removeClass('active');
        $(this).addClass('active');
    }

});

$('.spe-hover').mouseleave(function(){
    $('.spe-hover').removeClass('active');
});







/*＊ menu nav ＊*/

$('.menu ul li').click(function(){

    if($(this).hasClass('active')){
        $(this).removeClass('active');
        // $('.menu').slideDown(300).addClass('is-active');
    }else{
        $('.menu ul li').removeClass('active');
        $(this).addClass('active');
        // $('.menu').slideUp(300).removeClass('is-active');
        // $(".top-menu").removeClass("top-animate");
        // $(".mid-menu").removeClass("mid-animate");
        // $(".bottom-menu").removeClass("bottom-animate");
    }

});



    /* mini menu */
    var screenwidth=$(window).width();

    if(screenwidth<1100){

        $('.menu-trigger').click(function () {
            // $('.menu').toggleClass('is-active');
            // $('.menu').slideToggle(300);

            if($('.menu').hasClass('is-active')){
                $('.menu').slideUp(300).removeClass('is-active');

            }else{
                $('.menu').removeClass('active');
                $('.menu').slideDown(300).addClass('is-active');
            }

            $(".top-menu").toggleClass("top-animate");
            $(".mid-menu").toggleClass("mid-animate");
            $(".bottom-menu").toggleClass("bottom-animate");
            // $('.menu').slideUp()
        });

        $('.menu ul li').click(function(){
            $('.menu').slideUp(300).removeClass('is-active');
            $(".top-menu").removeClass("top-animate");
            $(".mid-menu").removeClass("mid-animate");
            $(".bottom-menu").removeClass("bottom-animate");
        });

    }
    else{
        $('.cn-menu.menu').css('display','block');
    }
    /* mini menu end*/



    
		/**  sl-language bebin **/

		$('.sl-language').mouseenter(function () {
			$('.dropdown-menubox').slideDown(300);
		})

		$('.sl-language').mouseleave(function () {
			$('.dropdown-menubox').slideUp(200);
		})

		/**  sl-language end **/