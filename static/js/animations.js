document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.getElementById("typing-text");
    const sourceText = document.getElementById("sourceText").textContent;
    let index = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting && index < sourceText.length) {
            // Typing forward
            typingText.textContent = sourceText.substring(0, index + 1);
            index++;
            setTimeout(type, 125); // 300ms per character forward
        } else if (!isDeleting && index === sourceText.length) {
            // Pause after fully typed
            isDeleting = true; // Switch to deleting mode
            setTimeout(type, 2000); // 2-second pause before deleting
        } else if (isDeleting && index > 0) {
            // Deleting backward
            typingText.textContent = sourceText.substring(0, index - 1);
            index--;
            setTimeout(type, 50); // 150ms per character backward (faster)
        } else if (isDeleting && index === 0) {
            // Reset and start over
            isDeleting = false;
            setTimeout(type, 500); // 0.5-second pause before restarting
        }
    }

    // Start typing when the page loads
    type();
});