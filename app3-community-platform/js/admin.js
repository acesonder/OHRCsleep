/**
 * Northumberland Community Platform - Admin JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    initSidebarNav();
    initHashNav();
});

function initSidebarNav() {
    const links = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.admin-section');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').replace('#', '');
            
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
            
            history.pushState(null, null, `#${targetId}`);
        });
    });
}

function initHashNav() {
    if (window.location.hash) {
        const targetId = window.location.hash.replace('#', '');
        const link = document.querySelector(`.sidebar-link[href="#${targetId}"]`);
        if (link) link.click();
    }
    
    window.addEventListener('popstate', function() {
        if (window.location.hash) {
            const targetId = window.location.hash.replace('#', '');
            const link = document.querySelector(`.sidebar-link[href="#${targetId}"]`);
            if (link) {
                document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                document.querySelectorAll('.admin-section').forEach(s => {
                    s.classList.remove('active');
                    if (s.id === targetId) s.classList.add('active');
                });
            }
        }
    });
}
