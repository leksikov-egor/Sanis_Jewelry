const slickSlider = () => {
    $(function () {
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
    });
};

export default slickSlider;