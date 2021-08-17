export function saveToLocalStorage(storageName, gameList) {
	window.localStorage.setItem(storageName, JSON.stringify(gameList));
}

export function loadGamesFromStorage(storageName) {
	if (localStorage.getItem(storageName) === null) return;
	else {
		return JSON.parse(localStorage.getItem(storageName));
	}
}
