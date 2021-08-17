export default {
	setGameData(state, payload) {
		state.gameData = payload;
	},
	setPageNumber(state, payload) {
		state.pageNumber = payload;
	},
	setCurrentGame(state, payload) {
		state.currentGame = payload;
	},
	setGameTrailer(state, payload) {
		state.trailer = payload;
	},
	setIndex(state, payload) {
		state.index = payload;
	},
	setShowImage(state, payload) {
		state.showImage = payload;
	},
	setLikedGames(state, payload) {
		state.likedGames = payload;
	},
	setDislikedGames(state, payload) {
		state.dislikedGames = payload;
	},
	setLastEntry(state, payload) {
		state.lastEntry = payload;
	},
};
