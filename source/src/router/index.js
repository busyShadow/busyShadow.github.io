import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

const router = new Router({
    routes,
});

router.beforeEach((to, from, next) => {
    next();
});

router.afterEach(() => {
    window.scrollTo(0, 0);
});

export default router;
