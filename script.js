document.addEventListener("DOMContentLoaded", function () {
    const description = document.querySelector(".description");
    const text = "This AI chatbot provides medical-related information, but it may not always be accurate. For urgent medical concerns, please consult a healthcare professional.";

    function typeText(element, text, speed) {
        let index = 0;
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    typeText(description, text, 50);
});
