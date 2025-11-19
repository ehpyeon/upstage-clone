// Cookie Notice Handlers
function handleCookieDecline() {
    document.getElementById('cookieNotice').style.display = 'none';
    localStorage.setItem('cookieConsent', 'declined');
}

function handleCookieAllow() {
    document.getElementById('cookieNotice').style.display = 'none';
    localStorage.setItem('cookieConsent', 'accepted');
}

// Check if user already responded to cookie notice
window.addEventListener('DOMContentLoaded', () => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
        document.getElementById('cookieNotice').style.display = 'none';
    }
});

// Rotating Hero Text Animation
const rotatingWords = document.querySelectorAll('.rotating-word');
let currentIndex = 0;

function rotateWords() {
    rotatingWords[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % rotatingWords.length;
    rotatingWords[currentIndex].classList.add('active');
}

// Rotate words every 3 seconds
setInterval(rotateWords, 3000);

// Testimonial Carousel
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[index].classList.add('active');
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials every 6 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 6000);
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card, .industry-card, .testimonial-card, .deployment-card, .excellence-card');

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Newsletter Form Handler
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        // Simple validation
        if (email && email.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

// Mobile Menu Toggle (if needed in future)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');

    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-toggle')) {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'mobile-menu-toggle';
            toggleBtn.innerHTML = '☰';
            toggleBtn.style.cssText = 'font-size: 1.5rem; color: white; background: none; border: none; cursor: pointer;';

            toggleBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            navbar.insertBefore(toggleBtn, navMenu);
        }
    }
};

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy Loading for Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add Active State to Navigation Items
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'var(--primary-color)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.color = 'var(--text-light)';
    });
});

// Card Hover Effects Enhancement
const productCards = document.querySelectorAll('.product-card, .industry-card, .excellence-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console Log for Demo
console.log('%c🚀 Upstage AI Clone', 'font-size: 20px; font-weight: bold; color: #5b5fff;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'font-size: 14px; color: #9ca3af;');
console.log('%cVisit the original: https://www.upstage.ai', 'font-size: 12px; color: #5b5fff;');
