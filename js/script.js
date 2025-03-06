const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');

    if (mainNav.classList.contains('open')) {
        menuToggle.innerHTML = '✕'; 
    } else {
        menuToggle.innerHTML = '☰'; 
    }
});

const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open'); 
        menuToggle.innerHTML = '☰';
    });
});