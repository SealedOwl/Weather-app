export default function renderSearchForm() {
	const formContainer = document.createElement("section");
	formContainer.classList.add("form-container");

	formContainer.innerHTML = `
    <form id="search-form">
        <div class="input-container">
           <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="search-input" autocomplete="off" placeholder="Search for a location..." />
        </div>
        <button type="submit" id="search-btn">Search</button>
    </form>
    `;

	return formContainer;
}
