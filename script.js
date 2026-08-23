// script.js - Subtle Magic Interactions for Judith's Realm

document.addEventListener("DOMContentLoaded", () => {
    
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        tab.addEventListener('mousedown', function(e) {
            createSparkle(e.clientX, e.clientY);
        });
    });

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
        
        setTimeout(() => {
            sparkle.style.transform = 'translateY(-30px) rotate(45deg) scale(1.5)';
            sparkle.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
});
