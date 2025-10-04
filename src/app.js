import renderSearchForm from "./components/searchForm";
import renderweatherStatus from "./components/weatherStatus";

export default function renderApp() {
	// const my_api = VSXG9P6G6GJP9YCB4QZZ7BA4W;
	const root = document.querySelector("#root");

	const searchForm = renderSearchForm();
	const weatherDetails = renderweatherStatus();

	root.appendChild(searchForm);
	root.appendChild(weatherDetails);
}
