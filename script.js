// ==========================
// Parallax Background
// ==========================

const background = document.querySelector(".background");

window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset;

    if (background) {
        background.style.transform = `translateY(${scroll * 0.15}px)`;
    }
});


// ==========================
// Cookie Banner
// ==========================

const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept");
const declineBtn = document.getElementById("decline");

// Prüfen ob bereits Auswahl getroffen wurde
if (localStorage.getItem("cookieChoice")) {
    if (banner) {
        banner.style.display = "none";
    }
}

// Cookies akzeptieren
if (acceptBtn) {
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieChoice", "accepted");

        if (banner) {
            banner.style.display = "none";
        }
    });
}

// Cookies ablehnen
if (declineBtn) {
    declineBtn.addEventListener("click", () => {
        localStorage.setItem("cookieChoice", "declined");

        if (banner) {
            banner.style.display = "none";
        }
    });
}


// ==========================
// Smooth Navigation
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ==========================
// Scroll Progress Bar
// ==========================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercent = (scrollTop / scrollHeight) * 100;

    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {
        progressBar.style.width = scrollPercent + "%";
    }
});
Zusätzlich solltest du direkt nach dem <body> Tag in deiner index.html noch Folgendes einfügen:
<div id="progress-container">
    <div id="progress-bar"></div>
</div>
Und in deine style.css:
#progress-container{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:4px;
    background:transparent;
    z-index:9999;
}

#progress-bar{
    width:0%;
    height:100%;
    background:#ADEBB3;
    transition:width .1s linear;
}
