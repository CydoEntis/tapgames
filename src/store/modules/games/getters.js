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
};
