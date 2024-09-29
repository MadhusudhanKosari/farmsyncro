const farmers = [];
const buyers = [];

document.getElementById("farmerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const farmer = {
        crop: document.getElementById("crop").value,
        quantity: document.getElementById("quantity").value,
        farmingType: document.getElementById("farming-type").value,
        deliveryMethod: document.getElementById("delivery-method").value,
        paymentMode: document.getElementById("payment-mode").value
    };

    farmers.push(farmer);
    alert("Farmer details submitted successfully.");
});

document.getElementById("buyerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const buyer = {
        crop: document.getElementById("crop").value,
        quantity: document.getElementById("quantity").value,
        farmingType: document.getElementById("farming-type").value,
        deliveryPreference: document.getElementById("delivery-preference").value
    };

    buyers.push(buyer);
    alert("Buyer details submitted successfully.");

    matchBuyerWithFarmers(buyer);
});

function matchBuyerWithFarmers(buyer) {
    let matchedFarmers = farmers.filter(farmer => 
        farmer.crop === buyer.crop && 
        farmer.farmingType === buyer.farmingType &&
        farmer.quantity >= buyer.quantity
    );

    if (matchedFarmers.length > 0) {
        alert("Buyer matched with the following farmers: " + matchedFarmers.map(farmer => farmer.crop).join(", "));
    } else {
        alert("No direct match found. Suggesting alternative farmers...");
        suggestAlternativeFarmers(buyer);
    }
}

function suggestAlternativeFarmers(buyer) {
    let alternativeFarmers = farmers.filter(farmer => farmer.crop === buyer.crop && farmer.farmingType === buyer.farmingType);
    
    if (alternativeFarmers.length > 0) {
        alert("Alternative farmers suggested: " + alternativeFarmers.map(farmer => farmer.crop).join(", "));
    } else {
        alert("No farmers available.");
    }
}
