/**
 * OHRC Sleep Platform - Admin Console JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initSidebarNavigation();
    initHashNavigation();
});

/**
 * Sidebar Navigation
 */
function initSidebarNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.admin-section');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').replace('#', '');
            
            // Update active link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            
            // Update URL hash
            history.pushState(null, null, `#${targetId}`);
        });
    });
}

/**
 * Handle Hash Navigation
 */
function initHashNavigation() {
    // Check for hash on page load
    if (window.location.hash) {
        const targetId = window.location.hash.replace('#', '');
        const targetLink = document.querySelector(`.sidebar-link[href="#${targetId}"]`);
        if (targetLink) {
            targetLink.click();
        }
    }
    
    // Handle browser back/forward
    window.addEventListener('popstate', function() {
        if (window.location.hash) {
            const targetId = window.location.hash.replace('#', '');
            const targetLink = document.querySelector(`.sidebar-link[href="#${targetId}"]`);
            if (targetLink) {
                // Update active states without adding to history
                document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
                targetLink.classList.add('active');
                
                document.querySelectorAll('.admin-section').forEach(section => {
                    section.classList.remove('active');
                    if (section.id === targetId) {
                        section.classList.add('active');
                    }
                });
            }
        }
    });
}

/**
 * Show notification
 */
function showAdminNotification(message, type = 'info') {
    const existing = document.querySelector('.admin-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `admin-notification ${type}`;
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
        top: 80px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        background-color: ${type === 'success' ? '#38a169' : type === 'error' ? '#e53e3e' : '#3182ce'};
        color: white;
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 5000);
}
