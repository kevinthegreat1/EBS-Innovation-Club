import { createWebHistory, createRouter } from "vue-router";
import Index from "../views/index";
import LeaderBoard from "../views/lb";
import Donate from "../views/donate";

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
    ...['/donate', '/donation'].map(path => ({
        path,
        component: Donate
    })),
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;