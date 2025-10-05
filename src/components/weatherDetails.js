import formatTime from "../helpers/formatTime";
import formatTo12Hr from "../helpers/formatTo12Hr";

export default function renderWeatherDetails(data) {
	const weatherDetails = document.querySelector(".weather-details");

	weatherDetails.innerHTML = "";

	weatherDetails.innerHTML = `
    <div class="weather-detail-card">
        <i class="fa-solid fa-cloud-rain"></i>
        <div class="weather-detail">
            <span class="weather-definition">Chance of rain</span>
            <span class="detail">${data.days[0].precipprob}%</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-wind"></i>
        <div class="weather-detail">
            <span class="weather-definition">Wind</span>
            <span class="detail">${data.days[0].windspeed} Km/h</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-cloud-sun"></i>
        <div class="weather-detail">
            <span class="weather-definition">Sunrise</span>
            <span class="detail">${formatTime(data.days[0].sunrise)} AM</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-sun-plant-wilt"></i>
        <div class="weather-detail">
            <span class="weather-definition">Sunset</span>
            <span class="detail">${formatTo12Hr(
							formatTime(data.days[0].sunset)
						)} PM</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-sun"></i>
        <div class="weather-detail">
            <span class="weather-definition">UV Index</span>
            <span class="detail">${data.days[0].uvindex}</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-arrow-trend-up"></i>
        <div class="weather-detail">
            <span class="weather-definition">Pressure</span>
            <span class="detail">${data.days[0].pressure} mb</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-droplet"></i>
        <div class="weather-detail">
            <span class="weather-definition">Humidity</span>
            <span class="detail">${data.days[0].humidity}%</span>
        </div>
    </div>

    <div class="weather-detail-card">
        <i class="fa-solid fa-wind"></i>
        <div class="weather-detail">
            <span class="weather-definition">Gusts</span>
            <span class="detail">${data.days[0].windgust} Km/h</span>
        </div>
    </div>
    `;

	return weatherDetails;
}
