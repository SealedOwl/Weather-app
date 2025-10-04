export default function renderWeatherDetails() {
	const weatherDetails = document.createElement("section");
	weatherDetails.classList.add("weather-details");

	weatherDetails.innerHTML = `
    <div class="weather-detail-card">
        <i class="fa-solid fa-cloud-rain"></i>
        <div class="weather-detail">
            <span class="weather-definition">Chance of rain</span>
            <span class="detail">98%</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-wind"></i>
        <div class="weather-detail">
            <span class="weather-definition">Wind</span>
            <span class="detail">29.5 Km/h</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-cloud-sun"></i>
        <div class="weather-detail">
            <span class="weather-definition">Sunrise</span>
            <span class="detail">07:06 AM</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-sun-plant-wilt"></i>
        <div class="weather-detail">
            <span class="weather-definition">Sunset</span>
            <span class="detail">06:31 PM</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-sun"></i>
        <div class="weather-detail">
            <span class="weather-definition">UV Index</span>
            <span class="detail">0.5</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-arrow-trend-up"></i>
        <div class="weather-detail">
            <span class="weather-definition">Pressure</span>
            <span class="detail">999 mb</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-droplet"></i>
        <div class="weather-detail">
            <span class="weather-definition">Humidity</span>
            <span class="detail">66%</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-wind"></i>
        <div class="weather-detail">
            <span class="weather-definition">Gusts</span>
            <span class="detail">35.1 Km/h</span>
        </div>
    </div>
    `;

	return weatherDetails;
}
