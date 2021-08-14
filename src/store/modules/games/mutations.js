export default {
	setGameData(state, payload) {
		state.gameData = payload;
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
};
