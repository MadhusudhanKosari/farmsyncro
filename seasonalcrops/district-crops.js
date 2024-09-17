// District and seasonal data
const districtSeasonData = {
    hyderabad: {
        name: "Hyderabad",
        summer: {
            season: "Summer",
            weather: "Hot and dry (35-45°C), occasional heatwaves.",
            soil: "Red sandy soil, low water retention.",
            dayNight: "13 hours daylight, 11 hours night.",
            crops: [
                { name: "Millet", profit: "Medium", reason: "Heat-tolerant crop, moderate demand." },
                { name: "Sesame", profit: "High", reason: "Drought-resistant, high oil content." },
                { name: "Okra", profit: "Medium", reason: "Quick-growing vegetable, local demand." }
            ]
        },
        monsoon: {
            season: "Monsoon",
            weather: "Moderate rainfall, humid conditions.",
            soil: "Red sandy loam, improved fertility.",
            dayNight: "12 hours daylight, 12 hours night.",
            crops: [
                { name: "Rice", profit: "High", reason: "Staple crop, good rainfall utilization." },
                { name: "Maize", profit: "Medium", reason: "Versatile crop, used for fodder and grain." },
                { name: "Green Gram", profit: "Medium", reason: "Short duration crop, improves soil health." }
            ]
        },
        winter: {
            season: "Winter",
            weather: "Mild temperatures (15-25°C), dry air.",
            soil: "Red sandy loam, good for rabi crops.",
            dayNight: "11 hours daylight, 13 hours night.",
            crops: [
                { name: "Wheat", profit: "Medium", reason: "Suitable for cooler temperatures." },
                { name: "Chickpea", profit: "High", reason: "Nitrogen-fixing, high protein content." },
                { name: "Vegetables", profit: "High", reason: "High demand in urban markets." }
            ]
        }
    },
    rangareddy: {
        name: "Rangareddy",
        summer: {
            season: "Summer",
            weather: "Hot and dry (35-42°C), occasional pre-monsoon showers.",
            soil: "Red and black soil mix, moderate fertility.",
            dayNight: "13 hours daylight, 11 hours night.",
            crops: [
                { name: "Cotton", profit: "High", reason: "Heat-tolerant, good market value." },
                { name: "Sunflower", profit: "Medium", reason: "Drought-resistant, oil crop." },
                { name: "Vegetables", profit: "Medium", reason: "With irrigation, good for local markets." }
            ]
        },
        monsoon: {
            season: "Monsoon",
            weather: "Good rainfall, occasional heavy spells.",
            soil: "Red and black soil, increased moisture.",
            dayNight: "12 hours daylight, 12 hours night.",
            crops: [
                { name: "Paddy", profit: "High", reason: "Main crop, good water availability." },
                { name: "Soybean", profit: "Medium", reason: "Nitrogen-fixing, good rotation crop." },
                { name: "Turmeric", profit: "High", reason: "Cash crop, disease-resistant varieties available." }
            ]
        },
        winter: {
            season: "Winter",
            weather: "Cool temperatures (12-28°C), occasional frost.",
            soil: "Red and black soil, good for rabi crops.",
            dayNight: "11 hours daylight, 13 hours night.",
            crops: [
                { name: "Jowar", profit: "Medium", reason: "Drought-tolerant, used for food and fodder." },
                { name: "Mustard", profit: "Medium", reason: "Short duration, oil crop." },
                { name: "Tomato", profit: "High", reason: "High demand, good in cooler weather." }
            ]
        }
    },
    medchal: {
        name: "Medchal-Malkajgiri",
        summer: {
            season: "Summer",
            weather: "Hot and dry (34-41°C), low humidity.",
            soil: "Red sandy loam, low water retention.",
            dayNight: "13 hours daylight, 11 hours night.",
            crops: [
                { name: "Pearl Millet", profit: "Medium", reason: "Heat and drought-tolerant." },
                { name: "Groundnut", profit: "Medium", reason: "Suitable for light soils, oil crop." },
                { name: "Cluster Beans", profit: "Low", reason: "Drought-resistant, used as vegetable." }
            ]
        },
        monsoon: {
            season: "Monsoon",
            weather: "Moderate rainfall, increased humidity.",
            soil: "Red sandy loam, improved water content.",
            dayNight: "12 hours daylight, 12 hours night.",
            crops: [
                { name: "Rice", profit: "High", reason: "Major crop, good water availability." },
                { name: "Pigeon Pea", profit: "Medium", reason: "Nitrogen-fixing, intercropped with cereals." },
                { name: "Okra", profit: "Medium", reason: "Quick growing, popular vegetable." }
            ]
        },
        winter: {
            season: "Winter",
            weather: "Mild temperatures (14-29°C), dry conditions.",
            soil: "Red sandy loam, suitable for various crops.",
            dayNight: "11 hours daylight, 13 hours night.",
            crops: [
                { name: "Wheat", profit: "Medium", reason: "Requires cooler temperatures." },
                { name: "Chickpea", profit: "High", reason: "Suits dry conditions, high protein content." },
                { name: "Coriander", profit: "Medium", reason: "Aromatic herb, good market demand." }
            ]
        }
    },
    karimnagar: {
        name: "Karimnagar",
        summer: {
            season: "Summer",
            weather: "Hot and dry (35-45°C), occasional heatwaves.",
            soil: "Black cotton soil, high water retention.",
            dayNight: "13 hours daylight, 11 hours night.",
            crops: [
                { name: "Cotton", profit: "High", reason: "Heat-tolerant, major cash crop." },
                { name: "Mango", profit: "High", reason: "Fruit crop, established orchards." },
                { name: "Sesame", profit: "Medium", reason: "Drought-resistant, oil seed." }
            ]
        },
        monsoon: {
            season: "Monsoon",
            weather: "Good rainfall, occasional flooding.",
            soil: "Black cotton soil, high fertility when moist.",
            dayNight: "12 hours daylight, 12 hours night.",
            crops: [
                { name: "Paddy", profit: "High", reason: "Major crop, abundant water." },
                { name: "Maize", profit: "Medium", reason: "Versatile crop, good yield." },
                { name: "Red Gram", profit: "Medium", reason: "Nitrogen-fixing, intercropped with cereals." }
            ]
        },
        winter: {
            season: "Winter",
            weather: "Cool temperatures (12-30°C), dry conditions.",
            soil: "Black cotton soil, retains moisture well.",
            dayNight: "11 hours daylight, 13 hours night.",
            crops: [
                { name: "Jowar", profit: "Medium", reason: "Drought-tolerant, food and fodder." },
                { name: "Sunflower", profit: "Medium", reason: "Oilseed crop, short duration." },
                { name: "Vegetables", profit: "High", reason: "Diverse crops, good market demand." }
            ]
        }
    },
    nalgonda: {
        name: "Nalgonda",
        summer: {
            season: "Summer",
            weather: "High temperatures (35-40°C), low rainfall, dry winds.",
            soil: "Red Sandy Loam Soil, requires frequent irrigation.",
            dayNight: "14 hours daylight, 10 hours night.",
            crops: [
                { name: "Paddy", profit: "High", reason: "Requires high temperature and ample water." },
                { name: "Cotton", profit: "Medium", reason: "Profitable if irrigated well." },
                { name: "Groundnut", profit: "Low", reason: "Risk due to drought conditions." },
                { name: "Chili", profit: "High", reason: "Dry season crop, high market value." }
            ]
        },
        monsoon: {
            season: "Monsoon",
            weather: "Heavy rainfall, mild winds.",
            soil: "Sandy Loam, retains water but needs drainage.",
            dayNight: "12 hours daylight, 12 hours night.",
            crops: [
                { name: "Rice", profit: "High", reason: "Best time for rice farming with adequate rainfall." },
                { name: "Maize", profit: "Medium", reason: "Rainfed but resilient." },
                { name: "Millets", profit: "High", reason: "Adaptable to rain conditions." }
            ]
        },
        winter: {
            season: "Winter",
            weather: "Cool temperatures, dry winds.",
            soil: "Loamy soil, good for moisture retention.",
            dayNight: "10 hours daylight, 14 hours night.",
            crops: [
                { name: "Wheat", profit: "High", reason: "Thrives in cool, dry weather." },
                { name: "Mustard", profit: "Medium", reason: "Low water requirement." },
                { name: "Chickpea", profit: "High", reason: "Low-risk crop, high demand." }
            ]
        }
    },
    warangal: {
        name: "Warangal",
        summer: {
            season: "Summer",
            weather: "Dry heat, hot winds.",
            soil: "Black Cotton Soil, high water retention.",
            dayNight: "14 hours daylight, 10 hours night.",
            crops: [
                { name: "Sugarcane", profit: "High", reason: "Requires irrigation, but high returns." },
                { name: "Cotton", profit: "Medium", reason: "Thrives in heat, moderate profit." },
                { name: "Mango", profit: "High", reason: "Established orchards, good yield." }
            ]
        },
        monsoon: {
            season: "Monsoon",
            weather: "Heavy rainfall, occasional flooding.",
            soil: "Black Cotton Soil, very fertile when moist.",
            dayNight: "12 hours daylight, 12 hours night.",
            crops: [
                { name: "Paddy", profit: "High", reason: "Abundant water, main crop." },
                { name: "Maize", profit: "Medium", reason: "Good yield, multiple uses." },
                { name: "Turmeric", profit: "High", reason: "Cash crop, suited to climate." }
            ]
        },
        winter: {
            season: "Winter",
            weather: "Mild temperatures, dry conditions.",
            soil: "Black Cotton Soil, good moisture retention.",
            dayNight: "10 hours daylight, 14 hours night.",
            crops: [
                { name: "Chili", profit: "High", reason: "Major spice crop, good market." },
                { name: "Groundnut", profit: "Medium", reason: "Suitable for rabi season." },
                { name: "Vegetables", profit: "Medium", reason: "Diverse crops for local market." }
            ]
        }
    },
    khammam: {
        name: "Khammam",
        summer: {
            season: "Summer",
            weather: "Hot and humid (35-45°C), occasional pre-monsoon showers.",
            soil: "Red and Black soil, moderate fertility.",
            dayNight: "13 hours daylight, 11 hours night.",
            crops: [
                { name: "Cotton", profit: "High", reason: "Major cash crop, heat-tolerant." },
                { name: "Mango", profit: "High", reason: "Established orchards, good yield." },
                { name: "Chili", profit: "Medium", reason: "Dry season crop, needs irrigation." }
            ]
        },
        monsoon: {
            season: "Monsoon",
            weather: "Heavy rainfall, high humidity.",
            soil: "Red and Black soil, high fertility during rains.",
            dayNight: "12 hours daylight, 12 hours night.",
            crops: [
                { name: "Paddy", profit: "High", reason: "Abundant water, main crop." },
                { name: "Maize", profit: "Medium", reason: "Good yield, multiple uses." },
                { name: "Turmeric", profit: "High", reason: "Cash crop, suited to climate." }
            ]
        },
        winter: {
            season: "Winter",
            weather: "Mild temperatures (15-30°C), dry conditions.",
            soil: "Red and Black soil, good for rabi crops.",
            dayNight: "11 hours daylight, 13 hours night.",
            crops: [
                { name: "Groundnut", profit: "Medium", reason: "Suitable for rabi season." },
                { name: "Sesame", profit: "Medium", reason: "Short duration, oil crop." },
                { name: "Vegetables", profit: "High", reason: "Diverse crops, good market demand." }
            ]
        }
    },
    nizamabad: {
        name: "Nizamabad",
        summer: {
            season: "Summer",
            weather: "Hot and dry (35-42°C), occasional dust storms.",
            soil: "Black cotton and red sandy soil.",
            dayNight: "13 hours daylight, 11 hours night.",
            crops: [
                { name: "Sugarcane", profit: "High", reason: "Major crop, requires irrigation." },
                { name: "Turmeric", profit: "High", reason: "Spice crop, good market value." },
                { name: "Mango", profit: "Medium", reason: "Fruit crop, established orchards." }
            ]
        },
        monsoon: {
            season: "Monsoon",
            weather: "Moderate to heavy rainfall, increased humidity.",
            soil: "Black cotton and red sandy soil, increased fertility.",
            dayNight: "12 hours daylight, 12 hours night.",
            crops: [
                { name: "Paddy", profit: "High", reason: "Main crop, good water availability." },
                { name: "Soybean", profit: "Medium", reason: "Nitrogen-fixing, good rotation crop." },
                { name: "Jowar", profit: "Medium", reason: "Drought-tolerant, used for food and fodder." }
            ]
        },
        winter: {
            season: "Winter",
            weather: "Cool temperatures (12-28°C), dry conditions.",
            soil: "Black cotton and red sandy soil, good for rabi crops.",
            dayNight: "11 hours daylight, 13 hours night.",
            crops: [
                { name: "Wheat", profit: "Medium", reason: "Suitable for cooler temperatures." },
                { name: "Chickpea", profit: "High", reason: "Suits dry conditions, high protein content." },
                { name: "Vegetables", profit: "High", reason: "Diverse crops, good market demand." }
            ]
        }
    }
}
// Function to show season filter after selecting district
function showSeasonFilter() {
    const districtSelect = document.getElementById('districts').value;
    const seasonFilter = document.getElementById('season-filter');
    
    if (districtSelect) {
        seasonFilter.style.display = 'block';
        document.getElementById('season-info').style.display = 'none';
    } else {
        seasonFilter.style.display = 'none';
    }
}

// Function to show season details for the selected district
function showSeasonInfo() {
    const districtSelect = document.getElementById('districts').value;
    const seasonSelect = document.getElementById('seasons').value;
    const seasonInfo = document.getElementById('season-info');
    
    if (districtSelect && seasonSelect) {
        const districtData = districtSeasonData[districtSelect]; // Check if district exists
        if (districtData && districtData[seasonSelect]) {
            const seasonData = districtData[seasonSelect]; // Get season data

            // Populate season information
            document.getElementById('season-name').textContent = `${seasonData.season} in ${districtData.name}`;
            document.getElementById('weather-condition').textContent = `Weather Condition: ${seasonData.weather}`;
            document.getElementById('soil-condition').textContent = `Soil Condition: ${seasonData.soil}`;
            document.getElementById('day-night-duration').textContent = `Day-Night Duration: ${seasonData.dayNight}`;
            
            // Populate crop list
            const cropList = document.getElementById('crop-list');
            cropList.innerHTML = '';
            seasonData.crops.forEach(crop => {
                const li = document.createElement('li');
                li.innerHTML = `${crop.name} - <strong>${crop.profit}</strong> Profit. Reason: ${crop.reason}`;
                cropList.appendChild(li);
            });
            
            // Show the season info section
            seasonInfo.style.display = 'block';
        } else {
            alert('Seasonal data not available for the selected district and season.');
            seasonInfo.style.display = 'none';
        }
    } else {
        seasonInfo.style.display = 'none';
    }
}
