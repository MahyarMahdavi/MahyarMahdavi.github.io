// Confetti effect function
function launchConfetti() {
    var duration = 5 * 1000; // Confetti duration in milliseconds
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5, // Number of particles per burst
            angle: 60,
            spread: 55,
            origin: { x: 0 } // Left side confetti burst
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 } // Right side confetti burst
        });

        // Continue the confetti until duration ends
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Trigger confetti on page load
window.onload = function () {
    launchConfetti();
};
