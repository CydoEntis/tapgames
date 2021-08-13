export function assignPlatforms(data) {
	let platforms = {};

	data.forEach((item) => {
		let platform = item.platform.name;

		if (
			platform === "PlayStation 5" ||
			platform === "PlayStation 4" ||
			platform === "PlayStation 3" ||
			platform === "PlayStation 2" ||
			platform === "PlayStation" ||
			platform === "PS Vita" ||
			platform === "PSP"
		) {
			platforms.playstation = true;
		} else if (platform === "Xbox Series S/X" || platform === "Xbox" || platform === "Xbox 360") {
			platforms.xbox = true;
		} else if (
			platform === "Nintendo Switch" ||
			platform === "Nintendo 3DS" ||
			platform === "Nintendo DS" ||
			platform === "Nintendo DSi" ||
			platform === "Wii U" ||
			platform === "Wii" ||
			platform === "GameCube" ||
			platform === "Nintendo 64" ||
			platform === "Game Boy Advance" ||
			platform === "Game Boy" ||
			platform === "Game Boy Color" ||
			platform === "SNES" ||
			platform === "NES"
		) {
			platforms.nintendo = true;
		} else if (platform === "Android") {
			platforms.android = true;
		} else if (
			platform === "iOS" ||
			platform === "macOS" ||
			platform === "Classic Macintos" ||
			platform === "Apple II"
		) {
			platforms.apple = true;
		} else if (platform === "PC") {
			platforms.pc = true;
		}
	});

	return platforms;
}
