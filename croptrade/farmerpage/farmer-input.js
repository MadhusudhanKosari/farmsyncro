// Farmer form submission
document.getElementById("farmerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const farmer = {
        crop: document.getElementById("crop").value,
        quantity: parseInt(document.getElementById("quantity").value),
        farmingType: document.getElementById("farming-type").value,
        deliveryMethod: document.getElementById("delivery-method").value,
        paymentMode: document.getElementById("payment-mode").value
    };

    // Here you can store the farmer data in your database or array
    console.log(farmer);
    alert("Farmer details submitted successfully.");
});
