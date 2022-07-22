const slickSlider = () => {
    $(function () {
        $(".headpresent__box").on("init", function (event, slick) {
            $(".headpresent__slider-count").text(parseInt(slick.currentSlide + 1) + ' | ' + slick.slideCount);
        });

        $(".headpresent__box").on("afterChange", function (event, slick, currentSlide) {
            $(".headpresent__slider-count").text(parseInt(slick.currentSlide + 1) + ' | ' + slick.slideCount);
        });

        $('.headpresent__box').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
            prevArrow: `<button type="button" class="slick-arrow slick-prev"><svg width="27" height="11" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.48047 1.57881L1 5.32031L7.48047 9.06181L7.48047 1.57881Z" stroke="white"/><path d="M7.00356 5.51172L26.0547 5.51172" stroke="white"/></svg>
            </button>`,
            nextArrow: `<button type="button" class="slick-arrow slick-next"><svg width="27" height="11" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5742 1.57881L25.0547 5.32031L18.5742 9.06181L18.5742 1.57881Z" stroke="white"/><path d="M19.0511 5.51172L0 5.51172" stroke="white"/></svg>
            </button>`,
            autoplay: true,
            autoplaySpeed: 6000,
            dots: true,
            responsive: [
                {
                    breakpoint: 1001,
                    settings: {
                        arrows: false
                    }
                },
            ]
        });

        $('.cooperate__box').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: `<button type="button" class="slick-arrow slick-prev"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L2 8L9 15" stroke="black" stroke-width="2"/><path d="M3 8H17" stroke="black" stroke-width="2"/></svg></button>`,
            nextArrow: `<button type="button" class="slick-arrow slick-next"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L15 8L8 15" stroke="black" stroke-width="2"/><path d="M14 8H0" stroke="black" stroke-width="2"/></svg></button>`,
            responsive: [
                {
                    breakpoint: 1701,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1351,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1051,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 751,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
            ]
        });

        $('.treaty__box').slick({
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 901,
                    settings: "unslick"
                }
            ]
        });
    });
};

export default slickSlider;