$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $("nav").addClass("aa")
    }
    else {
        $("nav").removeClass("aa")
    }
})


$(document).ready(function () {
    $('.slider').slick({
    });
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    })
});
$(document).ready(function () {
    $('.carousel').owlCarousel({
        loop: true,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    })
});
$(document).ready(function () {
    $('.loop').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        margin: 10,
        responsive: {
            600: {
                items: 5
            }
        }
    });

})

$(document).ready(function () {
    $('.muji').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })
})
$(document).ready(function () {
    $('.asdf').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})

// scrollTopp 
$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $(".scrollTopp").fadeIn()
    }
    else {
        $(".scrollTopp").fadeOut()
    }
})
$(window).ready(function () {
    $(".scrollTopp").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
})