import {createWebHistory, createRouter} from "vue-router";
import Index from "../views/index";
import About from "../views/about";
import LeaderBoard from "../views/leaderboard";
import Donate from "../views/donate";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    ...['/donate', '/donation'].map(path => ({
        path,
        component: Donate
    })),
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