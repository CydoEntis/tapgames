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
	getLikedGames(state) {
		return state.likedGames;
	},
	getDislikedGames(state) {
		return state.dislikedGames;
	},
	getLastEntry(state) {
		return state.lastEntry;
	},
	getIsFlipDisabled(state) {
		return state.isFlipDisabled;
	},
	getDisableLikeBtn(state) {
		return state.disableLikeBtn;
	},
	getDisableDislikeBtn(state) {
		return state.disableDislikeBtn;
	},
	getGameContentVisibility(state) {
		return state.gameContentVisibility;
	},
	getIsMobileNavOpen(state) {
		return state.isMobileNavOpen;
	},
};
