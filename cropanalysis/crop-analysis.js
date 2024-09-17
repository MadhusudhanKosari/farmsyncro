// Sample data for crops (can be fetched from a backend later)
const topSoldCrops = [
    { name: "Wheat", sold: 1500 },
    { name: "Rice", sold: 1300 },
    { name: "Corn", sold: 1200 },
    { name: "Soybeans", sold: 1100 },
    { name: "Barley", sold: 1000 }
];

const topPriceCrops = [
    { name: "Saffron", price: 3000 },
    { name: "Vanilla", price: 2500 },
    { name: "Cardamom", price: 1500 },
    { name: "Truffles", price: 1000 },
    { name: "Ginseng", price: 900 }
];

// Function to display top sold crops
function displayTopSoldCrops() {
    const soldCropsContainer = document.getElementById("top-sold-crops");
    topSoldCrops.forEach(crop => {
        const cropCard = document.createElement("div");
        cropCard.classList.add("crop-card");
        cropCard.innerHTML = `
            <h3>${crop.name}</h3>
            <p>${crop.sold} units sold</p>
        `;
        soldCropsContainer.appendChild(cropCard);
    });
}

// Function to display top priced crops
function displayTopPriceCrops() {
    const priceCropsContainer = document.getElementById("top-price-crops");
    topPriceCrops.forEach(crop => {
        const cropCard = document.createElement("div");
        cropCard.classList.add("crop-card");
        cropCard.innerHTML = `
            <h3>${crop.name}</h3>
            <p>$${crop.price} per kg</p>
        `;
        priceCropsContainer.appendChild(cropCard);
    });
}

// Display both sections when the page loads
window.onload = function() {
    displayTopSoldCrops();
    displayTopPriceCrops();
};
