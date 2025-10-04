import renderSearchForm from "./components/searchForm";
import renderWeatherDetails from "./components/weatherDetails";
import renderweatherStatus from "./components/weatherStatus";

export default function renderApp() {
	// const my_api = VSXG9P6G6GJP9YCB4QZZ7BA4W;
	const root = document.querySelector("#root");

	const searchForm = renderSearchForm();
	const weatherStatus = renderweatherStatus();
	const weatherDetails = renderWeatherDetails();

	root.appendChild(searchForm);
	root.appendChild(weatherStatus);
	root.appendChild(weatherDetails);
}
