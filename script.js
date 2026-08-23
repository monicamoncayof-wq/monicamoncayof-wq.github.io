// script.js - Subtle Magic Interactions for Judith's Realm

document.addEventListener("DOMContentLoaded", () => {
    
    // Add a tiny sparkle effect to navigation clicks
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        tab.addEventListener('mousedown', function(e) {
            createSparkle(e.clientX, e.clientY);
        });
    });

    // Create a tiny floating medieval sparkle
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.innerText = '✦';
        sparkle.style.position = 'fixed';
        sparkle.style.left = (x - 10) + 'px';
        sparkle.style.top = (y - 10) + 'px';
        sparkle.style.color = 'var(--bright-gold)';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.transition = 'all 0.6s ease-out';
        
        document.body.appendChild(sparkle);
        
        // Animate floating up and fading out
        setTimeout(() => {
            sparkle.style.transform = 'translateY(-30px) rotate(45deg) scale(1.5)';
            sparkle.style.opacity = '0';
        }, 10);
        
        // Clean up
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
});
