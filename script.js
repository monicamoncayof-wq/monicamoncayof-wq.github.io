document.addEventListener("DOMContentLoaded", () => {
    // 1. Sparkle Effect on Hovering the Interactive "J"
    const illuminatedJ = document.querySelector(".interactive-j-letter");
    if (illuminatedJ) {
        illuminatedJ.addEventListener("mouseenter", () => {
            createSparkleBurst(illuminatedJ);
        });
    }

    // Function to create temporary sparkling stars around the drop cap J
    function createSparkleBurst(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement("span");
            sparkle.classList.add("js-sparkle-star");
            sparkle.innerText = "✨";
            
            // Random positioning around the J
            const x = rect.left + window.scrollX + (Math.random() * rect.width) - 10;
            const y = rect.top + window.scrollY + (Math.random() * rect.height) - 10;
            
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            
            document.body.appendChild(sparkle);
            
            // Remove after animation completes
            setTimeout(() => {
                sparkle.remove();
            }, 800);
        }
    }

    // 2. Active Tab State Management for Navigation
    const navTabs = document.querySelectorAll(".nav-tab");
    navTabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            // Removes active status from all tabs and applies to clicked tab
            navTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 3. Audio Wave Pulse Effect for Music Room
    const musicWidget = document.querySelector(".music-widget");
    const musicText = document.querySelector(".music-text");
    if (musicWidget && musicText) {
        musicWidget.addEventListener("mouseenter", () => {
            musicText.innerText = "Playing: Fleetwood Mac...";
            musicText.style.color = "#ffe082";
        });
        musicWidget.addEventListener("mouseleave", () => {
            musicText.innerText = "Acoustic & Vinyl...";
            musicText.style.color = "var(--soft-pink)";
        });
    }
});
