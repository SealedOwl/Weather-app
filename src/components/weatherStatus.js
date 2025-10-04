import clearDay from "../assets/clear-day.svg";

export default function renderweatherStatus() {
	const weatherStatus = document.createElement("section");
	weatherStatus.classList.add("weather-status");

	weatherStatus.innerHTML = `
    <div class="weather-temp-status">
        <div class="weather-status">
            <img src="${clearDay}" alt="${clearDay}" class="weather-icon" />
            <div class="weather-temp">
                <span class="temp">32°<span class="celsius">C</span></span>
                <div class="weather-condition text-grey">Rain, Partially cloudy</div>
            </div>
        </div>
    </div>
    <div class="min-max-details">
        <div class="min-max">
            <div class="min">
                <span class="text-grey">Min</span>
                <span class="min-max-temp">30°</span>
            </div>
            <div class="max">
                <span class="text-grey">Max</span>
                <span class="min-max-temp">35°</span>
            </div>
        </div>
        <div class="feels-like text-grey">Feels like 49.3°</div>
    </div>
    `;

	return weatherStatus;
}
