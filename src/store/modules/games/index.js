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
		};
	},
	mutations,
	actions,
	getters,
};
