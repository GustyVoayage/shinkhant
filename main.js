document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menuIcon.contains(event.target) || navLinks.contains(event.target);

        if (!isClickInsideMenu) {
            navLinks.classList.remove('active');
        }
    });
});

  