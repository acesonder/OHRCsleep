/**
 * Municipal Advocacy Platform - JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScroll();
    initCopyScript();
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
    }
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
            }
        });
    });
}

/**
 * Copy Script to Clipboard
 */
function initCopyScript() {
    const copyBtn = document.getElementById('copy-script-btn');
    const printBtn = document.getElementById('print-script-btn');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', copyToClipboard);
    }
    
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
}

function copyToClipboard() {
    const speechText = `Good evening. My name is [Your Name]. I'm here representing [X people] who contributed stories to our community platform.

Our data shows 217 incidents of people being displaced while trying to sleep last month. The average person got 3.2 hours of uninterrupted sleep per night.

The Ontario Human Rights Commission is clear: municipalities must ensure people have legal places to exist and rest. Currently, there is nowhere in Cobourg where someone without housing can legally sleep.

We're proposing three temporary zoning changes for 12 months:
1. Designate [specific location] for overnight sleeping with basic services
2. Fast-track emergency shelter approvals in commercial zones  
3. Pilot a 20-unit tiny shelter village on [municipal land]

These are evidence-based, temporary measures while permanent solutions develop. Kingston, Peterborough, and Toronto have all implemented similar approaches.

The cost of inaction is measured in lives lost, emergency room visits, and ongoing human rights violations.

Thank you.`;

    navigator.clipboard.writeText(speechText).then(function() {
        showNotification('Speech copied to clipboard!', 'success');
    }).catch(function(err) {
        showNotification('Failed to copy. Please select and copy manually.', 'error');
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
        <button class="notification-close" aria-label="Close notification">&times;</button>
    `;
    
    // Add event listener for close button
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.remove();
    });
    
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 16px 24px;
        border-radius: 8px;
        background-color: ${type === 'success' ? '#059669' : type === 'error' ? '#dc2626' : '#2563eb'};
        color: white;
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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

// Email signup handler
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            console.log('Email signup:', email);
            showNotification('Thank you for subscribing! We\'ll keep you updated.', 'success');
            this.reset();
        });
    }
});
