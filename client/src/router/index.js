import Router from "vue-router";
import routes from "@/config/router";

const router = new Router({
  mode: "history",
  base: "/app/",
  routes,
  fallback: false,
  scrollBehavior(to, form, savePosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }

    return savePosition || { x: 0, y: 0 };
  }
});

const install = Vue => Vue.use(Router);

export { install, router };
