import renderSearchForm from "./components/searchForm";

export default function renderApp() {
	// const my_api = VSXG9P6G6GJP9YCB4QZZ7BA4W;
	const root = document.querySelector("#root");

	const searchForm = renderSearchForm();

	root.appendChild(searchForm);
}
