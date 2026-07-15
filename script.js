const background = document.querySelector(".background");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    background.style.transform =
        `translateY(${scroll * 0.15}px)`;

});
