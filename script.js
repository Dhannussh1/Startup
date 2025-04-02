// Mobile menu functionality
function showMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.right = '0';
}

function hideMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.right = '-200px';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Hide mobile menu after clicking a link
            hideMenu();
        }
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Show success message (in production, you would send this data to a server)
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add scroll animation for elements
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-card, .stat-item');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize animations on load
window.addEventListener('load', function() {
    // Add initial animations
    document.querySelectorAll('.feature-card, .stat-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});