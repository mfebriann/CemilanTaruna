const hamburgerMenu = document.querySelector('.hamburger-menu input');
const span1 = document.querySelector('.hamburger-menu span:nth-child(2)');
const span2 = document.querySelector('.hamburger-menu span:nth-child(4)');
const menu = document.querySelector('nav ul');
const navigasi = document.querySelector('nav')
const links = document.querySelectorAll('nav ul a')
hamburgerMenu.addEventListener('click', function () {
    span1.classList.toggle('active')
    span2.classList.toggle('active')
    menu.classList.toggle('tampil')
});

window.addEventListener("scroll", function () {
    navigasi.classList.toggle('scrolling', window.scrollY > 0)
});


for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - 120;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}