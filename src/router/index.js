import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import LikedGames from "../components/ui/sidebar/LikedGames.vue";
import DislikedGames from "../components/ui/sidebar/DislikedGames.vue";

const routes = [
	{
		path: "/",
		name: "Landing",
		component: Landing,
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
		children: [
			{
				path: "/liked",
				name: "LikedGames",
				components: {
					sidebar: LikedGames,
				},
			},
			{
				path: "/disliked",
				name: "DislikedGames",
				components: {
					sidebar: DislikedGames,
				},
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
