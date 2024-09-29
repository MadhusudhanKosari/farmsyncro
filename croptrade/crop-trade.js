// crop-trade.js

// Wait until the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Grab the farmer and buyer image containers
    const farmerButton = document.querySelector('.button-container a[href="farmer-input.html"]');
    const buyerButton = document.querySelector('.button-container a[href="buyer-input.html"]');

    // Add event listeners for farmer and buyer buttons
    farmerButton.addEventListener('click', (event) => {
        // You can include any dynamic functionality here
        console.log("Farmer button clicked! Navigating to farmer input page...");
    });

    buyerButton.addEventListener('click', (event) => {
        // You can include any dynamic functionality here
        console.log("Buyer button clicked! Navigating to buyer input page...");
    });

    // Additional feature: Open the link in the same window
    // Prevent default behavior (if needed)
    farmerButton.onclick = function (event) {
        event.preventDefault();
        window.location.href = "farmer-input.html";
    };

    buyerButton.onclick = function (event) {
        event.preventDefault();
        window.location.href = "buyer-input.html";
    };
});
