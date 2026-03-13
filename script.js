// Initialize AOS Animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 50
});

// DOM Elements
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.8)';
        header.style.boxShadow = 'none';
    }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger icon
    const bars = menuToggle.querySelectorAll('.bar');
    if (navLinks.classList.contains('active')) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const bars = menuToggle.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Form Submission Mock
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const btn = contactForm.querySelector('button[type="submit"]');
        
        // Visual feedback during submission
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Sending...';
        btn.disabled = true;
        
        // Mock API Call delay
        setTimeout(() => {
            formStatus.innerHTML = `<span style="color: #4ade80;">Message sent successfully, ${name}! I will get back to you soon.</span>`;
            contactForm.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
            
            // Clear message after 5 seconds
            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 5000);
        }, 1500);
    });
}