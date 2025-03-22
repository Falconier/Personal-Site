document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.getElementById("typing-text");
    const sourceTexts = [
        document.getElementById("sourceText1").textContent,
        document.getElementById("sourceText2").textContent,
        document.getElementById("sourceText3").textContent,
        document.getElementById("sourceText4").textContent,
        document.getElementById("sourceText5").textContent
    ];
    let currentTextIndex = 0;
    let index = 0;
    let isDeleting = false;

    function type() {
        const sourceText = sourceTexts[currentTextIndex];
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
            currentTextIndex = (currentTextIndex + 1) % sourceTexts.length; // Cycle through texts
            setTimeout(type, 500); // 0.5-second pause before restarting
        }
    }

    // Start typing when the page loads
    type();
});