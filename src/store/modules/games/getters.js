export default {
	getNextPage(state) {
		return state.gameData.nextPage;
	},
	getGameList(state) {
		return state.gameData.gamesList;
	},
	getCurrentGame(state) {
		return state.currentGame;
	},
	getGameTrailer(state) {
		return state.trailer;
	},
	getIndex(state) {
		return state.index;
	},
	getShowImage(state) {
		return state.showImage;
	},
};
