export default async function renderweatherStatus(data) {
	const weatherStatus = document.querySelector(".weather-status");

	const iconName = data.days[0].icon;

	let iconPath;
	try {
		const module = await import(`../assets/${iconName}.svg`);
		iconPath = module.default;
	} catch {
		const fallBack = await import(`../assets/favicon.svg`);
		iconPath = fallBack.default;
	}

	console.log(iconName);
	console.log(iconPath);

	weatherStatus.innerHTML = "";

	weatherStatus.innerHTML = `
    <div class="weather-temp-status">
        <div class="weather-status">
            <img src="${iconPath}" alt="${iconPath}" class="weather-icon" />
            <div class="weather-temp">
                <span class="temp">${data.days[0].temp}°<span class="celsius">C</span></span>
                <div class="weather-condition text-grey">${data.days[0].conditions}</div>
            </div>
        </div>
    </div>
    <div class="min-max-details">
        <div class="min-max">
            <div class="min">
                <span class="text-grey">Min</span>
                <span class="min-max-temp">${data.days[0].tempmin}°</span>
            </div>
            <div class="max">
                <span class="text-grey">Max</span>
                <span class="min-max-temp">${data.days[0].tempmax}°</span>
            </div>
        </div>
        <div class="feels-like text-grey">Feels like ${data.days[0].feelslike}°</div>
    </div>
    `;

	return weatherStatus;
}
