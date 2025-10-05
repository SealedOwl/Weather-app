export default function formatTime(time) {
	return time.split(":").slice(0, 2).join(":");
}
