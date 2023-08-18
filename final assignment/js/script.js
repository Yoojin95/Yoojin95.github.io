document.addEventListener("DOMContentLoaded", function () {
    const hiringRadio = document.getElementById("hiringRadio");
    const hourlyRateInput = document.getElementById("hourlyRateInput");

    hiringRadio.addEventListener("change", function () {
        hourlyRateInput.style.display = hiringRadio.checked ? "block" : "none";
    });

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (event) {
        const nameInput = document.getElementById("nameInput");
        const emailInput = document.getElementById("emailInput");
        const addressInput = document.getElementById("addressInput");
        const cityInput = document.getElementById("cityInput");
        const postalCodeInput = document.getElementById("postalCodeInput");
        const messageInput = document.getElementById("messageInput");

        let isValid = true;

        if (!nameInput.value) {
            isValid = false;
            // Display error for name input
        }

        // Check other input fields and display errors if necessary
        
        if (!isValid) {
            event.preventDefault();
        }
    });
});
