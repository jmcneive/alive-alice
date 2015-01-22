jQuery(document).ready(function($){
    //open menu
    $('.curtain__menu--trigger').on('click', function(event){
        event.preventDefault();
        $('#wrapper__nav--curtain').addClass('move-out');
        $('#nav__curtain--inner').addClass('is-visible');
        $('.curtain__layer--shadow').addClass('is-visible');
    });
    //close menu
    $('.curtain__menu--close').on('click', function(event){
        event.preventDefault();
        $('#wrapper__nav--curtain').removeClass('move-out');
        $('#nav__curtain--inner').removeClass('is-visible');
        $('.curtain__layer--shadow').removeClass('is-visible');
    });

    //clipped image - blur effect
    set_clip_property();
    $(window).on('resize', function(){
        set_clip_property();
    });

    function set_clip_property() {
        var $header_height = $('.curtain__header').height(),
            $window_height = $(window).height(),
            $header_top = $window_height - $header_height,
            $window_width = $(window).width();
        $('.curtain__bg--blurred').css('clip', 'rect('+$header_top+'px, '+$window_width+'px, '+$window_height+'px, 0px)');
    }
});