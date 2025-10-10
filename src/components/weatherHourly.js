export default async function renderWeatherHourly(data) {
	const weatherHourly = document.querySelector(".weather-hourly");
	weatherHourly.innerHTML = "";

	const hours = [
		{ label: "6 AM", index: 6 },
		{ label: "8 AM", index: 8 },
		{ label: "10 AM", index: 10 },
		{ label: "12 PM", index: 12 },
		{ label: "2 PM", index: 14 },
		{ label: "4 PM", index: 16 },
		{ label: "6 PM", index: 18 },
		{ label: "8 PM", index: 20 },
	];

	let hourlyCardsHTML = "";

	for (const { label, index } of hours) {
		const iconName = data.days[0].hours[index].icon;

		let iconPath;
		try {
			const module = await import(`../assets/${iconName}.svg`);
			iconPath = module.default;
		} catch {
			const fallback = await import(`../assets/favicon.svg`);
			iconPath = fallback.default;
		}

		hourlyCardsHTML += `
        <div class="hourly-card">
            <span class="hour">${label}</span>
            <img src=${iconPath} alt="${iconPath}" class="hourly-weather-icon" />
        </div>
        `;
	}

	weatherHourly.innerHTML = `
    <h2>Hourly<h2>
    <div class="hourly-cards-container">
        ${hourlyCardsHTML}
    </div>
    `;

	return weatherHourly;
}
