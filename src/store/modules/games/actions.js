import { assignPlatforms } from "../../../helpers/helper";

export default {
	async fetchGames(context, api) {
		const res = await fetch(api);
		const data = await res.json();

		let gameData = {
			nextPage: data.next,
			gamesList: [],
		};

		data.results.forEach((result) => {
			let esrb;

			if (result.esrb_rating !== null) {
				esrb = result.esrb_rating.name;
			} else esrb = "N/A";

			let gameInfo = {
				id: result.id,
				currentPage: api,
				name: result.name,
				image: result.background_image,
				platforms: assignPlatforms(result.platforms),
				metacritic: result.metacritic,
				rating: esrb,
				released: result.released,
				stores: result.stores,
				genres: result.genres,
				playtime: result.playtime,
				screenshots: result.short_screenshots,
			};

			gameData.gamesList.push(gameInfo);
		});

		context.commit("setGameData", gameData);
	},
	async fetchGameInfo(context, id) {
		const apiKey = "4ddf56496a3f4f1fb9d1338eebb64df7";
		const apiUrl = `https://api.rawg.io/api/games/${id}?key=`;

		const res = await fetch(apiUrl + apiKey);
		const data = await res.json();

		let esrb;

		if (data.esrb_rating !== null) {
			esrb = data.esrb_rating.name;
		} else esrb = "N/A";

		let currentGame = {
			id: data.id,
			name: data.name,
			image: data.background_image,
			description: data.description_raw,
			metacritic: data.metacritic,
			platforms: assignPlatforms(data.platforms),
			rating: esrb,
			publishers: data.publishers,
			website: data.website,
			stores: data.stores,
			genres: data.genres,
			playtime: data.playtime,
		};

		context.commit("setCurrentGame", currentGame);
	},

	incrementIndex({ context, state }) {
		state.index++;
	},
};
