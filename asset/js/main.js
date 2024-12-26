document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navBrand = document.querySelector('.navbar-brand');
    const topBar = document.querySelector('.top_bar');
    let topBarHeight = topBar.offsetHeight;

    function updateNavbar() {
        if (window.scrollY > topBarHeight) {
            navbar.classList.add('navbar-scrolled');
            navLinks.forEach(link => link.style.color = '#00b5ad');
            navBrand.style.color = '#00b5ad';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navLinks.forEach(link => link.style.color = 'white');
            navBrand.style.color = 'white';
        }
    }

    // Initial call to set correct colors
    updateNavbar();

    window.addEventListener('scroll', updateNavbar);
    window.addEventListener('resize', () => {
        topBarHeight = topBar.offsetHeight;
    });
});