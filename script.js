/* ========================================
   SPORTS LAW FIRM WEBSITE - JAVASCRIPT
   ======================================== */

// LANGUAGE MANAGEMENT
const translations = {
    es: {
        'Inicio': 'Inicio',
        'Home': 'Inicio',
        'Sobre Nosotros': 'Sobre Nosotros',
        'About Us': 'Sobre Nosotros',
        'Servicios': 'Servicios',
        'Services': 'Servicios',
        'Casos de Éxito': 'Casos de Éxito',
        'Success Cases': 'Casos de Éxito',
        'Blog': 'Blog',
        'Contacto': 'Contacto',
        'Contact': 'Contacto'
    },
    en: {
        'Inicio': 'Home',
        'Home': 'Home',
        'Sobre Nosotros': 'About Us',
        'About Us': 'About Us',
        'Servicios': 'Services',
        'Services': 'Services',
        'Casos de Éxito': 'Success Cases',
        'Success Cases': 'Success Cases',
        'Blog': 'Blog',
        'Contacto': 'Contact',
        'Contact': 'Contact'
    }
};

// Initialize language functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeFilters();
    initializeFormHandling();
    initializeNavigation();
});

// LANGUAGE SWITCHER
function initializeLanguage() {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Update active button
            langBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Save preference
            localStorage.setItem('preferredLanguage', lang);
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    const activeBtn = document.querySelector(`[data-lang="${savedLang}"]`);
    if (activeBtn) {
        activeBtn.click();
    }
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-es][data-lang-en]');
    
    elements.forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            const placeholder = el.getAttribute(`data-lang-placeholder-${lang}`);
            if (placeholder) {
                el.placeholder = placeholder;
            }
        } else {
            const text = el.getAttribute(`data-lang-${lang}`);
            if (text) {
                el.textContent = text;
            }
        }
    });
}

// FILTER FUNCTIONALITY
function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.case-card, .blog-card');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter cards
                cards.forEach(card => {
                    if (filter === '*') {
                        card.style.display = 'block';
                        setTimeout(() => card.classList.add('show'), 10);
                    } else {
                        if (card.classList.contains(filter.substring(1))) {
                            card.style.display = 'block';
                            setTimeout(() => card.classList.add('show'), 10);
                        } else {
                            card.classList.remove('show');
                            setTimeout(() => card.style.display = 'none', 300);
                        }
                    }
                });
            });
        });
    }
}

// FORM HANDLING
function initializeFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            if (!data.name || !data.email || !data.message) {
                showNotification('Por favor completa los campos requeridos', 'error');
                return;
            }
            
            // Validate email format
            if (!isValidEmail(data.email)) {
                showNotification('Por favor ingresa un correo válido', 'error');
                return;
            }
            
            // Submit form (you can integrate with a backend service here)
            console.log('Form Data:', data);
            
            // Show success message
            showNotification('¡Consulta enviada exitosamente! Nos pondremos en contacto pronto.', 'success');
            
            // Reset form
            this.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!isValidEmail(email)) {
                showNotification('Por favor ingresa un correo válido', 'error');
                return;
            }
            
            showNotification('¡Gracias por suscribirte!', 'success');
            this.reset();
        });
    }
}

// EMAIL VALIDATION
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// NOTIFICATION SYSTEM
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// NAVIGATION
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.href.includes(currentPage) || 
            (currentPage.includes('index') && link.href.includes('index')) ||
            (currentPage === '/' && link.href.includes('index'))) {
            link.classList.add('active');
        }
    });
}

// SEARCH FUNCTIONALITY (Blog)
function initializeBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (searchInput && blogCards.length > 0) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            blogCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const content = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || content.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// MOBILE MENU TOGGLE (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// LAZY LOADING IMAGES
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ANIMATION ON SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.expertise-card, .case-card, .blog-card, .team-member, .benefit').forEach(el => {
    observer.observe(el);
});

// STYLES FOR ANIMATIONS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    .blog-card, .case-card, .expertise-card, .team-member, .benefit {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .blog-card.animate, 
    .case-card.animate, 
    .expertise-card.animate, 
    .team-member.animate, 
    .benefit.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .blog-card.show {
        display: block !important;
    }
`;
document.head.appendChild(style);

// DARK MODE TOGGLE (Optional)
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Check saved preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }
}

// CALL TRACKING
function trackPhoneClick() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone interaction:', this.href);
            // You can add analytics tracking here
        });
    });
}

trackPhoneClick();

// Initialize blog search when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeBlogSearch();
});

// ACCESSIBILITY: KEYBOARD NAVIGATION
document.addEventListener('keydown', function(e) {
    // ESC key to close any open modals (if implemented)
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => modal.classList.remove('active'));
    }
});

// PERFORMANCE: LOG PAGE METRICS
window.addEventListener('load', function() {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page Load Time:', pageLoadTime + 'ms');
    }
});

// POLYFILL FOR OLDER BROWSERS
if (!Array.prototype.includes) {
    Array.prototype.includes = function(element) {
        return this.indexOf(element) > -1;
    };
}

console.log('Sports Law Firm Website - JavaScript initialized');
