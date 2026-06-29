document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle Menu Mobile
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animasi simple hamburger jadi silang (optional)
        hamburger.classList.toggle('toggle');
    });

    // Menutup menu otomatis jika link diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});