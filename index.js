// header
function changeBg() {
    var header = document.getElementById('header');
    var scrollValue = window.scrollY;
    if (scrollValue < 50) {
        header.classList.remove('bgColor');
        header.classList.remove('bgColor');

    } else {
        header.classList.add('bgColor');
    }

}
window.addEventListener('scroll', changeBg);

function changeBor() {
    var navabar = document.getElementById('navabar');
    var scrollValue = window.scrollY;
    if (scrollValue < 50) {
        navabar.classList.remove('navbor');

    } else {
        navabar.classList.add('navbor');
    }

}
window.addEventListener('scroll', changeBor)
// banner 
$(document).ready(function () {
    $('.banner-slide').slick({
        arrows: true,       
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1239,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },


        ]
    });
})
// testimonial
$(document).ready(function () {
    $('.testimonialsSlide').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        dots: true,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1239,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            }
        ]
    });
})

$(document).ready(function () {
    $(".navabar-icons,.navabar-icons2").click(function () {
        $("nav.toggle-custom").toggleClass("main");
        $(".navabar-icons").toggleClass("navbarIcon-1");
        $(".navabar-icons2").toggleClass("navbarIcon-2");
    });
    $(".navabar a").click(function () {
        $("nav.toggle-custom").toggleClass("main");

    });

})
// faq section
$(document).ready(function(){
    $(".accordion").on("click", ".heading", function() {

    $(this).toggleClass("active").next().slideToggle();

    $(".contents").not($(this).next()).slideUp(300);
                 
    $(this).siblings().removeClass("active");
    });
   });
        