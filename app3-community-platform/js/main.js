/**
 * Northumberland Community Platform - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initAccessibility();
    initFormHandlers();
    initPollHandlers();
    initSmoothScroll();
    initServiceFilters();
});

/**
 * Mobile Menu
 */
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    
    if (menuBtn && navList) {
        menuBtn.addEventListener('click', function() {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            navList.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!menuBtn.contains(e.target) && !navList.contains(e.target)) {
                menuBtn.setAttribute('aria-expanded', 'false');
                navList.classList.remove('active');
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                menuBtn.setAttribute('aria-expanded', 'false');
                navList.classList.remove('active');
            }
        });
    }
}

/**
 * Accessibility Features
 */
function initAccessibility() {
    const textOnlyBtn = document.getElementById('text-only-btn');
    const highContrastBtn = document.getElementById('high-contrast-btn');
    const largeTextBtn = document.getElementById('large-text-btn');
    
    if (textOnlyBtn) {
        textOnlyBtn.addEventListener('click', function() {
            document.body.classList.toggle('text-only');
            const isActive = document.body.classList.contains('text-only');
            this.textContent = isActive ? 'Normal Mode' : 'Text Only';
            localStorage.setItem('textOnly', isActive);
        });
        
        if (localStorage.getItem('textOnly') === 'true') {
            document.body.classList.add('text-only');
            textOnlyBtn.textContent = 'Normal Mode';
        }
    }
    
    if (highContrastBtn) {
        highContrastBtn.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
            const isActive = document.body.classList.contains('high-contrast');
            this.textContent = isActive ? 'Normal Contrast' : 'High Contrast';
            localStorage.setItem('highContrast', isActive);
        });
        
        if (localStorage.getItem('highContrast') === 'true') {
            document.body.classList.add('high-contrast');
            highContrastBtn.textContent = 'Normal Contrast';
        }
    }
    
    if (largeTextBtn) {
        largeTextBtn.addEventListener('click', function() {
            document.body.classList.toggle('large-text');
            const isActive = document.body.classList.contains('large-text');
            this.textContent = isActive ? 'Normal Text' : 'Large Text';
            localStorage.setItem('largeText', isActive);
        });
        
        if (localStorage.getItem('largeText') === 'true') {
            document.body.classList.add('large-text');
            largeTextBtn.textContent = 'Normal Text';
        }
    }
}

/**
 * Form Handlers
 */
function initFormHandlers() {
    const storyForm = document.getElementById('story-form');
    const contactCheckbox = document.getElementById('contact-me');
    const contactField = document.querySelector('.contact-field');
    
    // Toggle contact field visibility
    if (contactCheckbox && contactField) {
        contactCheckbox.addEventListener('change', function() {
            contactField.style.display = this.checked ? 'block' : 'none';
        });
    }
    
    // Form submission
    if (storyForm) {
        storyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                topic: document.getElementById('topic').value,
                story: document.getElementById('story').value,
                location: document.getElementById('location').value,
                sharePublic: document.getElementById('share-public')?.checked,
                contactMe: document.getElementById('contact-me')?.checked,
                contact: document.getElementById('contact')?.value
            };
            
            console.log('Story submitted:', formData);
            showNotification('Thank you for sharing your story. Your voice matters!', 'success');
            storyForm.reset();
            if (contactField) contactField.style.display = 'none';
        });
    }
    
    // Voice recording
    const voiceBtn = document.getElementById('voice-btn');
    if (voiceBtn) {
        voiceBtn.addEventListener('click', function() {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                showNotification('Voice recording not supported on this device.', 'error');
                return;
            }
            
            if (this.classList.contains('recording')) {
                this.classList.remove('recording');
                this.textContent = '🎤 Record Voice Message';
                showNotification('Recording stopped. Thank you!', 'success');
            } else {
                this.classList.add('recording');
                this.textContent = '⏹️ Stop Recording';
                showNotification('Recording started. Speak now...', 'info');
            }
        });
    }
}

/**
 * Poll Handlers
 */
function initPollHandlers() {
    const pollBtns = document.querySelectorAll('.poll-btn');
    
    pollBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const siblings = this.parentElement.querySelectorAll('.poll-btn');
            siblings.forEach(sib => sib.classList.remove('selected'));
            this.classList.add('selected');
            showNotification('Thanks for your input!', 'success');
        });
    });
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu
                const navList = document.querySelector('.nav-list');
                const menuBtn = document.querySelector('.mobile-menu-btn');
                if (navList && menuBtn) {
                    navList.classList.remove('active');
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
                
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });
}

/**
 * Service Filters
 */
function initServiceFilters() {
    const serviceType = document.getElementById('service-type');
    const availability = document.getElementById('availability');
    const features = document.getElementById('features');
    
    const filters = [serviceType, availability, features];
    
    filters.forEach(filter => {
        if (filter) {
            filter.addEventListener('change', filterServices);
        }
    });
}

function filterServices() {
    const type = document.getElementById('service-type')?.value || 'all';
    const availability = document.getElementById('availability')?.value || 'all';
    
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        let show = true;
        
        // Filter by type
        if (type !== 'all') {
            const cardType = card.getAttribute('data-type');
            if (cardType !== type) {
                show = false;
            }
        }
        
        // Filter by availability
        if (availability !== 'all' && show) {
            const status = card.querySelector('.service-status');
            if (availability === 'open' && status && !status.classList.contains('open')) {
                show = false;
            }
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}

/**
 * Show Notification
 */
function showNotification(message, type = 'info') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close" aria-label="Close">&times;</button>
    `;
    
    // Add event listener for close button
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.remove();
    });
    
    const colors = {
        success: '#16a34a',
        error: '#dc2626',
        info: '#0f766e'
    };
    
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 16px 24px;
        border-radius: 8px;
        background-color: ${colors[type] || colors.info};
        color: white;
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 90%;
    `;
    
    const closeBtn = notification.querySelector('button');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}
