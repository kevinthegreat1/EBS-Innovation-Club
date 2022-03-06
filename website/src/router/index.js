import { createWebHistory, createRouter } from "vue-router";
import Index from "../views/index";
import LeaderBoard from "../views/lb";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/leaderboard",
        name: "LeaderBoard",
        component: LeaderBoard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;