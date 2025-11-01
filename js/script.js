// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Contact Form Handling - Removed old version (now using backend integration below)

// Smooth scrolling for anchor links
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

// Add animation on scroll
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .mv-card, .choose-item');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add active class to current page in navigation
const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ==================== NEW FEATURES ====================

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    }
});

// Language Toggle
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'en';

const translations = {
    en: {
        'Home': 'Home',
        'Products': 'Products',
        'About Us': 'About Us',
        'Contact': 'Contact'
    },
    id: {
        'Home': 'Beranda',
        'Products': 'Produk',
        'About Us': 'Tentang Kami',
        'Contact': 'Kontak'
    }
};

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all buttons
        langButtons.forEach(b => b.classList.remove('active'));
        // Add active to clicked button
        btn.classList.add('active');

        // Get selected language
        currentLang = btn.dataset.lang;

        // Update all translatable elements
        document.querySelectorAll('[data-en]').forEach(el => {
            const lang = currentLang === 'en' ? 'en' : 'id';
            el.textContent = el.dataset[lang];
        });
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Image Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

// Add click handlers to all product images
document.querySelectorAll('.product-image img, .about-image img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        if (lightbox && lightboxImg) {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt;
        }
    });
});

// Close lightbox
if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.style.display === 'block') {
        lightbox.style.display = 'none';
    }
});

// Fade-in animations for new sections
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.testimonial-card, .destination-item, .faq-item');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 100);
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });
});

// Add pulse animation to WhatsApp button
setInterval(() => {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.style.animation = 'pulse 1s';
        setTimeout(() => {
            whatsappBtn.style.animation = '';
        }, 1000);
    }
}, 5000);

// Add pulse animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// ============================================
// CONTACT FORM SUBMISSION (Backend Integration)
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value || '',
            message: document.getElementById('message').value
        };

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Send to backend API
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                // Success!
                formMessage.className = 'form-message success';
                formMessage.textContent = '✅ ' + result.message;
                formMessage.style.display = 'block';

                // Reset form
                contactForm.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                // Error from server
                formMessage.className = 'form-message error';
                formMessage.textContent = '❌ ' + result.message;
                formMessage.style.display = 'block';
            }
        } catch (error) {
            // Network error or server down
            console.error('Error sending form:', error);
            formMessage.className = 'form-message error';
            formMessage.textContent = '❌ Connection error. Please make sure the backend server is running or try again later.';
            formMessage.style.display = 'block';
        } finally {
            // Restore button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}
