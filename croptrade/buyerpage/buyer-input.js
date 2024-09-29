// Buyer form submission
document.getElementById("buyerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const buyer = {
        crop: document.getElementById("crop").value,
        quantity: parseInt(document.getElementById("quantity").value),
        farmingType: document.getElementById("farming-type").value,
        deliveryPreference: document.getElementById("delivery-preference").value
    };

    // Here you can store the buyer data in your database or array
    console.log(buyer);
    alert("Buyer details submitted successfully.");
});
