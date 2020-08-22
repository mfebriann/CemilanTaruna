const hamburgerMenu = document.querySelector('.hamburger-menu input');
const span1 = document.querySelector('.hamburger-menu span:nth-child(2)');
const span2 = document.querySelector('.hamburger-menu span:nth-child(4)');
const menu = document.querySelector('nav ul');
const scrollTop = document.querySelector('#topScroll')

hamburgerMenu.addEventListener('click', function () {
    span1.classList.toggle('active')
    span2.classList.toggle('active')
    menu.classList.toggle('tampil')
});



// Ketika scroll ke atas
window.addEventListener("scroll", function () {
    scrollTop.classList.toggle('scroll', window.scrollY > 100)
})

// Loading
const loading = document.getElementById('loading');
window.addEventListener('load', function () {
    loading.style.display = "none";
})