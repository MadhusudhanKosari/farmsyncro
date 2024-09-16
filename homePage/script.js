// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const showSeasonalBtn = document.getElementById("show-seasonal-btn");
    const seasonalCropsDiv = document.getElementById("seasonal-crops");

    // Array of seasonal crops
    const seasonalCrops = [
        "Wheat (Winter)",
        "Corn (Summer)",
        "Soybeans (Spring)",
        "Barley (Fall)",
        "Rice (Monsoon)"
    ];

    // Function to display seasonal crops when button is clicked
    showSeasonalBtn.addEventListener("click", function () {
        let cropList = "<h4>Current Seasonal Crops:</h4><ul>";
        seasonalCrops.forEach(crop => {
            cropList += `<li>${crop}</li>`;
        });
        cropList += "</ul>";

        seasonalCropsDiv.innerHTML = cropList;
        seasonalCropsDiv.style.display = "block";
    });
});
