document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });

    // Display the about section by default
    document.getElementById('about').classList.add('active');
});

let currentSlide = 1;
const totalSlides = 3;

function changeSlide() {
    const heroSection = document.querySelector('.hero');
    heroSection.className = `hero slide${currentSlide}`;
    currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1;
}

setInterval(changeSlide, 2000);