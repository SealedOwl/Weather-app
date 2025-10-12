import renderSearchForm from "./components/searchForm";
import renderWeatherDetails from "./components/weatherDetails";
import renderWeatherHourly from "./components/weatherHourly";
import renderweatherStatus from "./components/weatherStatus";
import renderWeatherWeek from "./components/weatherWeek";

export default function renderApp() {
	const MY_API = `VSXG9P6G6GJP9YCB4QZZ7BA4W`;
	const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

	const root = document.querySelector("#root");

	const searchFormInput = renderSearchForm();

	const weatherStatus = document.createElement("section");
	weatherStatus.classList.add("weather-status");

	const weatherDetails = document.createElement("section");
	weatherDetails.classList.add("weather-details");

	const weatherHourly = document.createElement("section");
	weatherHourly.classList.add("weather-hourly");

	const weatherWeekly = document.createElement("section");
	weatherWeekly.classList.add("weather-weekly");

	root.appendChild(searchFormInput);
	root.appendChild(weatherStatus);
	root.appendChild(weatherDetails);
	root.appendChild(weatherHourly);
	root.appendChild(weatherWeekly);

	async function getWeatherData(location) {
		try {
			if (!location) {
				alert("Please enter a location");
				return;
			}

			const response = await fetch(
				`${BASE_URL}/${location}?unitGroup=metric&key=${MY_API}`
			);

			if (!response.ok) {
				alert(`Failed to fetch data`);
				throw new Error("Failed to fetch data");
			}

			const weatherData = await response.json();

			await renderweatherStatus(weatherData);
			renderWeatherDetails(weatherData);
			await renderWeatherHourly(weatherData);
			renderWeatherWeek();
		} catch (err) {
			console.error(err);
		}
	}

	const searchForm = document.querySelector("#search-form");
	searchForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const location = document
			.querySelector("#search-input")
			.value.toLowerCase()
			.trim();
		getWeatherData(location);
	});
}
