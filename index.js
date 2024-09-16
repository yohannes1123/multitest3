// Toggle Sidebar on Hamburger Click
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '0';
});

// Close Sidebar on Close Button Click
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '-250px';
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
