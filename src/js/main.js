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

    // hover position aware effect 
    // const buttons = document.querySelectorAll(".btn-hover__animated");

    // buttons.forEach((button) => {
    //     button.addEventListener('mouseenter', function(e) {
    //         let x = e.pageX - e.target.offsetLeft;
    //         let y = e.pageY - e.target.offsetTop;
    //         let ripples = document.createElement('span');
    //         ripples.style.left = x + "px";
    //         ripples.style.top = y + "px";
    //         this.appendChild(ripples);

    //         setTimeout(() => {
    //             ripples.remove()
    //         }, 1000);
    //     });
    // });
})();