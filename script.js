// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const showSeasonalBtn = document.getElementById("show-seasonal-btn");
    const seasonalCropsDiv = document.getElementById("seasonal-crops");
    const languageSelect = document.getElementById("language-select");
    const notificationBtn = document.getElementById("notification-btn");

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

    // Language change functionality
    languageSelect.addEventListener("change", function () {
        const selectedLanguage = languageSelect.value;
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const allElements = document.querySelectorAll('*');
        
        const translations = {
            en: {
                "Current Seasonal Crops": "Current Seasonal Crops",
                "Show Seasonal Crops": "Show Seasonal Crops",
                "Language": "Language",
                "Enable Notifications": "Enable Notifications"
            },
            hi: {
                "Current Seasonal Crops": "वर्तमान मौसमी फसलें",
                "Show Seasonal Crops": "मौसमी फसलें दिखाएं",
                "Language": "भाषा",
                "Enable Notifications": "सूचनाएं सक्षम करें"
            },
            te: {
                "Current Seasonal Crops": "ప్రస్తుత కాలానుగుణ పంటలు",
                "Show Seasonal Crops": "కాలానుగుణ పంటలను చూపించు",
                "Language": "భాష",
                "Enable Notifications": "నోటిఫికేషన్లను ప్రారంభించండి"
            }
        };

        function translateElement(element) {
            const originalText = element.textContent.trim();
            const translatedText = translations[selectedLanguage][originalText];
            if (translatedText) {
                element.textContent = translatedText;
            }
        }

        // Translate headings
        headings.forEach(translateElement);

        // Optionally, translate all elements
        // allElements.forEach(translateElement);

        switch (selectedLanguage) {
            case "en":
                alert("Language changed to English");
                break;
            case "hi":
                alert("भाषा हिंदी में बदली गई");
                break;
            case "te":
                alert("భాష తెలుగు మార్చబడింది");
                break;
            default:
                break;
        }
    });

    // Dummy notification functionality
    notificationBtn.addEventListener("click", function () {
        alert("You have no new notifications.");
    });
});
