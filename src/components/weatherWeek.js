import getNext3Dates from "../helpers/getNext3Dates";
import cloudy from "../assets/cloudy.svg";

export default async function renderWeatherWeek(data) {
	const weatherWeek = document.querySelector(".weather-weekly");
	weatherWeek.innerHTML = "";

	const { dayNames, dates } = getNext3Dates();

	let nextDaysCardsHTMl = "";

	for (let i = 0; i < 3; i++) {
		const iconName = data.days[i + 1].icon;

		let iconPath;
		try {
			const module = await import(`../assets/${iconName}.svg`);
			iconPath = module.default;
		} catch {
			const module = await import(`../assets/favicon.svg`);
			iconPath = module.default;
		}

		nextDaysCardsHTMl += `
        <div class="weekDay-card">
            <img src=${iconPath} alt=${iconPath} />
            <div class="weekDay-status">
                <span class="day">${dayNames[i]}</span>
                <span class="date">${dates[i]}</span>
                <div class="weatherDay-minmax">
                    <div class="minmax">
                        <span class="minmax-temp">${
													data.days[i + 1].tempmin
												}°</span>
                        <span class="text-grey">min</span>
                    </div>
                    <div class="minmax">
                        <span class="minmax-temp">${
													data.days[i + 1].tempmax
												}°</span>
                        <span class="text-grey">max</span>
                    </div>
                </div>
            </div>
        </div>
        `;
	}

	weatherWeek.innerHTML = `
    <h2>Next 3 Days</h2>
    <div class="weather-week-cards-container">
        ${nextDaysCardsHTMl}
    </div>
    `;

	return weatherWeek;
}
