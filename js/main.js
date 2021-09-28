$(window).on("load" , function () {
    new fullpage('#fullpage', {
        
    })
    //$('#fullpage').fullpage();
    $('.hero').addClass('hero_active')
    $('.header').addClass('header_active')



    $(window).on('mousewheel', () => {
        if ($('.hero').hasClass('active')) {
            $('body').removeClass('color')
            $('.hero').addClass('hero_active')
        } else {
            $('body').addClass('color')
            $('.hero').removeClass('hero_active')
        }
    })
})



