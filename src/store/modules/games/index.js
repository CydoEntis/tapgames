import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
	state() {
		return {
			gameData: {
				nextPage: "",
				gamesList: [],
			},
			pageNumber: 1,
			currentGame: {},
			trailer: "",
			index: 0,
			showImage: true,
			likedGames: [],
			dislikedGames: [],
			lastEntry: "",
			isFlipDisabled: false,
		};
	},
	mutations,
	actions,
	getters,
};
