/**
 * OHRC Sleep Platform - Main JavaScript
 * Accessible, lightweight functionality for vulnerable populations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileMenu();
    initAccessibilityFeatures();
    initFormHandlers();
    initPollHandlers();
    initContactToggle();
    initSmoothScroll();
});

/**
 * Mobile Menu Toggle
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
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuBtn.contains(e.target) && !navList.contains(e.target)) {
                menuBtn.setAttribute('aria-expanded', 'false');
                navList.classList.remove('active');
            }
        });
        
        // Close menu on escape key
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
function initAccessibilityFeatures() {
    const textOnlyBtn = document.getElementById('text-only-btn');
    const highContrastBtn = document.getElementById('high-contrast-btn');
    const largeTextBtn = document.getElementById('large-text-btn');
    
    // Text Only Mode
    if (textOnlyBtn) {
        textOnlyBtn.addEventListener('click', function() {
            document.body.classList.toggle('text-only');
            const isActive = document.body.classList.contains('text-only');
            textOnlyBtn.textContent = isActive ? 'Normal Mode' : 'Text Only Mode';
            localStorage.setItem('textOnly', isActive);
        });
        
        // Restore saved preference
        if (localStorage.getItem('textOnly') === 'true') {
            document.body.classList.add('text-only');
            textOnlyBtn.textContent = 'Normal Mode';
        }
    }
    
    // High Contrast Mode
    if (highContrastBtn) {
        highContrastBtn.addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
            const isActive = document.body.classList.contains('high-contrast');
            highContrastBtn.textContent = isActive ? 'Normal Contrast' : 'High Contrast';
            localStorage.setItem('highContrast', isActive);
        });
        
        // Restore saved preference
        if (localStorage.getItem('highContrast') === 'true') {
            document.body.classList.add('high-contrast');
            highContrastBtn.textContent = 'Normal Contrast';
        }
    }
    
    // Large Text Mode
    if (largeTextBtn) {
        largeTextBtn.addEventListener('click', function() {
            document.body.classList.toggle('large-text');
            const isActive = document.body.classList.contains('large-text');
            largeTextBtn.textContent = isActive ? 'Normal Text' : 'Large Text';
            localStorage.setItem('largeText', isActive);
        });
        
        // Restore saved preference
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
    const experienceForm = document.getElementById('experience-form');
    
    if (experienceForm) {
        experienceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                experienceType: document.getElementById('experience-type').value,
                story: document.getElementById('experience-story').value,
                location: document.getElementById('location').value,
                sharePublicly: document.getElementById('share-publicly').checked,
                contactMe: document.getElementById('contact-me').checked,
                contactMethod: document.getElementById('contact-method')?.value || ''
            };
            
            // In a real app, this would send to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            showNotification('Thank you for sharing your experience. Your voice matters.', 'success');
            
            // Reset form
            experienceForm.reset();
            
            // Hide contact info field
            const contactInfo = document.getElementById('contact-info');
            if (contactInfo) {
                contactInfo.style.display = 'none';
            }
        });
    }
    
    // Voice recording button
    const recordBtn = document.getElementById('record-btn');
    if (recordBtn) {
        recordBtn.addEventListener('click', function() {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                showNotification('Voice recording is not supported on this device.', 'error');
                return;
            }
            
            // Toggle recording state
            if (recordBtn.classList.contains('recording')) {
                recordBtn.classList.remove('recording');
                recordBtn.innerHTML = '<span aria-hidden="true">🎤</span> Start Recording';
                showNotification('Recording stopped. Thank you for your message.', 'success');
            } else {
                recordBtn.classList.add('recording');
                recordBtn.innerHTML = '<span aria-hidden="true">⏹️</span> Stop Recording';
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
            // Remove selected class from siblings
            const siblings = this.parentElement.querySelectorAll('.poll-btn');
            siblings.forEach(sib => sib.classList.remove('selected'));
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // In a real app, this would send to a server
            console.log('Poll answer:', this.textContent);
            
            showNotification('Thank you for your input!', 'success');
        });
    });
}

/**
 * Contact Toggle
 */
function initContactToggle() {
    const contactMeCheckbox = document.getElementById('contact-me');
    const contactInfo = document.getElementById('contact-info');
    
    if (contactMeCheckbox && contactInfo) {
        contactMeCheckbox.addEventListener('change', function() {
            contactInfo.style.display = this.checked ? 'block' : 'none';
        });
    }
}

/**
 * Smooth Scroll for Navigation Links
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                
                // Close mobile menu if open
                const navList = document.querySelector('.nav-list');
                const menuBtn = document.querySelector('.mobile-menu-btn');
                if (navList && menuBtn) {
                    navList.classList.remove('active');
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
                
                // Scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Set focus to target for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus();
            }
        });
    });
}

/**
 * Show Notification
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.setAttribute('role', 'alert');
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Close notification">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 16px 24px;
        border-radius: 8px;
        background-color: ${type === 'success' ? '#38a169' : type === 'error' ? '#e53e3e' : '#3182ce'};
        color: white;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 16px;
        max-width: 90%;
    `;
    
    // Add close button styles and handler
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    closeBtn.addEventListener('click', () => notification.remove());
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

/**
 * Service Filter Functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    const serviceTypeFilter = document.getElementById('service-type');
    const hoursFilter = document.getElementById('hours');
    const accessibilityFilter = document.getElementById('accessibility');
    
    const filters = [serviceTypeFilter, hoursFilter, accessibilityFilter];
    
    filters.forEach(filter => {
        if (filter) {
            filter.addEventListener('change', filterServices);
        }
    });
});

function filterServices() {
    const serviceType = document.getElementById('service-type')?.value || 'all';
    const hours = document.getElementById('hours')?.value || 'all';
    const accessibility = document.getElementById('accessibility')?.value || 'all';
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        let show = true;
        
        // Filter by service type
        if (serviceType !== 'all') {
            const cardType = card.querySelector('.service-type');
            if (cardType && !cardType.classList.contains(serviceType)) {
                show = false;
            }
        }
        
        // Filter by hours
        if (hours !== 'all' && show) {
            const status = card.querySelector('.service-status');
            if (hours === 'open-now' && status && !status.classList.contains('open')) {
                show = false;
            }
            if (hours === '24h') {
                const details = card.querySelector('.service-details');
                if (details && !details.textContent.includes('24')) {
                    show = false;
                }
            }
        }
        
        card.style.display = show ? 'block' : 'none';
    });
}
