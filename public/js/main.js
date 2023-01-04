const navToggleBtn = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".main-nav");
const toggleIcon = {open:"icon-menu.svg", close:"icon-menu-close.svg"};

navToggleBtn.addEventListener("click", toggleNav);

function toggleNav(event) {
    if (nav.dataset.isVisible == "1"){
        nav.style.display = "none";
        nav.dataset.isVisible = 0;

        event.target.src = `./public/images/${toggleIcon.open}`;
        return;
    }
    event.target.src = `./public/images/${toggleIcon.close}`;
    nav.dataset.isVisible = 1;
    nav.style.display = "block";
}