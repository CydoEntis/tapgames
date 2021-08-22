import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Landing from "../views/Landing.vue";
import GamePage from "../views/GamePage.vue";

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
	},
	{
		path: "/games/:gameId",
		name: "GamePage",
		component: GamePage,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
