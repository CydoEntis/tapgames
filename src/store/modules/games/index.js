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
			currentGame: {},
			trailer: "",
			index: 0,
			showImage: true,
			likedGames: [],
			dislikedGames: [],
		};
	},
	mutations,
	actions,
	getters,
};
