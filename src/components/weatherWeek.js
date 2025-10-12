import getNext3Dates from "../helpers/getNext3Dates";
import cloudy from "../assets/cloudy.svg";

export default function renderWeatherWeek(data) {
	const weatherWeek = document.querySelector(".weather-weekly");
	weatherWeek.innerHTML = "";

	const { dayNames, dates } = getNext3Dates();

	weatherWeek.innerHTML = `
    <h2>Next 3 Days</h2>
    <div class="weather-week-cards-container">
        <div class="weekDay-card">
            <img src=${cloudy} alt="" />
            <div class="weekDay-status">
                <span class="day">SUN</span>
                <span class="date">13 OCT</span>
                <div class="weatherDay-minmax">
                    <div class="minmax">
                        <span class="minmax-temp">14.1°</span>
                        <span class="text-grey">min</span>
                    </div>
                    <div class="minmax">
                        <span class="minmax-temp">24.1°</span>
                        <span class="text-grey">max</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="weekDay-card">
            <img src=${cloudy} alt="" />
            <div class="weekDay-status">
                <span class="day">SUN</span>
                <span class="date">13 OCT</span>
                <div class="weatherDay-minmax">
                    <div class="minmax">
                        <span class="minmax-temp">14.1°</span>
                        <span class="text-grey">min</span>
                    </div>
                    <div class="minmax">
                        <span class="minmax-temp">24.1°</span>
                        <span class="text-grey">max</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="weekDay-card">
            <img src=${cloudy} alt="" />
            <div class="weekDay-status">
                <span class="day">SUN</span>
                <span class="date">13 OCT</span>
                <div class="weatherDay-minmax">
                    <div class="minmax">
                        <span class="minmax-temp">14.1°</span>
                        <span class="text-grey">min</span>
                    </div>
                    <div class="minmax">
                        <span class="minmax-temp">24.1°</span>
                        <span class="text-grey">max</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

	return weatherWeek;
}
