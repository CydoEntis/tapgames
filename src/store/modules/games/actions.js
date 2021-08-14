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
			let gameInfo = {
				id: result.id,
				name: result.name,
				image: result.background_image,
				platforms: assignPlatforms(result.platforms),
				metacritic: result.metacritic,
				rating: result.esrb_rating,
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

		let currentGame = {
			id: data.id,
			name: data.name,
			description: data.description_raw,
			publishers: data.publishers,
		};

		context.commit("setCurrentGame", currentGame);
	},
	async fetchGameTrailer(context, id) {
		const apiKey = "4ddf56496a3f4f1fb9d1338eebb64df7";
		const apiUrl = `https://api.rawg.io/api/games/${id}/movies?key=`;

		const res = await fetch(apiUrl + apiKey);
		const data = await res.json();

		let trailer = data.results[0].data.max;

		context.commit("setGameTrailer", trailer);
	},
	incrementIndex({ context, state }) {
		state.index++;
	},
	addToLikedGames(context, gameInfo) {},
};
