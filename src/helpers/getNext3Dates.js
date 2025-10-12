export default function getNext3Dates() {
	const today = new Date();
	const dayNames = [];
	const dates = [];

	for (let i = 1; i <= 3; i++) {
		const nextDay = new Date(today);
		nextDay.setDate(today.getDate() + i);

		const dayName = nextDay
			.toLocaleString("en-US", { weekday: "short" })
			.toUpperCase();

		const date = nextDay.getDate();
		const month = nextDay
			.toLocaleString("en-US", { month: "short" })
			.toUpperCase();

		dayNames.push(dayName);
		dates.push(`${date} ${month}`);
	}
	return { dayNames, dates };
}
