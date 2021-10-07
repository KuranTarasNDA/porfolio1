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
        if ($('.work').hasClass('active')) {
            $('.work').addClass('work_active')
            $('body').removeClass('color')
        } else {
            $('.work').removeClass('work_active')
        }
        if ($('.about').hasClass('active')) {
            $('.about').addClass('about_active')
        } else {
            $('.about').removeClass('about_active')
        }
        if ($('.contact').hasClass('active')) {
            $('.contact').addClass('contact_active')
        } else {
            $('.contact').removeClass('contact_active')
        }
    })
})



