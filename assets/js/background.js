document.addEventListener("DOMContentLoaded", function() {
    // Function to update keyframes
    function updateKeyframes() {
        var container = document.querySelector('.container');
        var bubbles = document.querySelector('.bubbles');
        var containerWidth = document.documentElement.scrollWidth;
        var spanCount = Math.floor(containerWidth / 30); // Adjust width of each span

        for (var i = 0; i < spanCount; i++) {
            var span = document.createElement('span');
            const randomValue = Math.floor(Math.random() * 54) + 1; // Random value between 1 and 54
            const randomDelay = Math.random() * 5; // Random delay between 0 and 5 seconds
            const randomDuration = 5 + Math.random() * 5; // Random duration between 5 and 10 seconds
            span.style.setProperty('--i', randomValue);
            span.style.animationDelay = `-${randomDelay}s`; // Set negative delay to make it appear already started
            span.style.animationDuration = `${randomDuration}s`; // Set random duration
            bubbles.appendChild(span);
        }

        container.style.height = document.documentElement.scrollHeight + 'px';
        container.style.width = document.documentElement.scrollWidth + 'px';
        container.style.filter = 'blur(15px)';
        console.log(container.style.height);

        var scrollHeight = document.documentElement.scrollHeight;
        var translateYStart = scrollHeight; // Start at the bottom of the scroll height
        var translateYEnd = -20;

        var keyframes = `
            @keyframes animate {
                0% {
                    transform: translateY(${translateYStart}px) scale(0);
                }
                100% {
                    transform: translateY(${translateYEnd}px) scale(1);
                }
            }
        `;

        // Remove existing keyframes if any
        var styleSheet = document.styleSheets[0];
        for (var i = styleSheet.cssRules.length - 1; i >= 0; i--) {
            if (styleSheet.cssRules[i].name === 'animate') {
                styleSheet.deleteRule(i);
            }
        }

        // Insert new keyframes
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }

    // Initial call to set keyframes
    updateKeyframes();

    window.addEventListener("resize", function() {
        console.log("Resize event detected"); // Debugging log
        updateKeyframes();
    });
});