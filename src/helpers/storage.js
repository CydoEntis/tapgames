export function saveToLocalStorage(likedGames) {
	window.localStorage.setItem("likedGames", JSON.stringify(likedGames));
	console.log("Added to liked games");
}

export function loadLikedGamesFromStorage() {
	if (localStorage.getItem("likedGames") === null) return;
	else {
		return JSON.parse(localStorage.getItem("likedGames"));
	}
}
