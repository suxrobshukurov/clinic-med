jQuery(function() {
    console.log("hi")
});

(function() {
    // slider
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });

    //main slider 
    let indexBigBanner = new Swiper('.maxwidth-banner-js', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.mb-carusel__dots',
            clickable: true,
        },
        navigation: {
            nextEl: '.mb-button-next',
            prevEl: '.mb-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        speed: 1000,
    });

    // hover position aware effect 
    const buttons = document.querySelectorAll(".btn-posnawr");

    buttons.forEach(button => {
        ["mouseenter", "mouseout"].forEach(evt => {
            button.addEventListener(evt, e => {
                let parentOffset = button.getBoundingClientRect(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;

                const span = button.getElementsByTagName("span");

                span[0].style.top = relY + "px";
                span[0].style.left = relX + "px";
            });
        });
    });
})();