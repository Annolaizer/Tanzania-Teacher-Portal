
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('show');
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(event.target) && !navbarToggler.contains(event.target)) {
            sidebar.classList.remove('show');
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.sidebar').classList.remove('show');
    }
});
