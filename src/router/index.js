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
		path: "/games/:id",
		name: "GamePage",
		component: GamePage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
