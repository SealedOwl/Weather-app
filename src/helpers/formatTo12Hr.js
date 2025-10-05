export default function formatTo12Hr(time) {
	let [hour, min] = time.split(":");

	hour = hour % 12;
	hour = hour ? `0${hour}` : 12;

	return `${hour}:${min}`;
}
