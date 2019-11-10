import Vue from "vue";
import App from "./App.vue";
import { install as Router, router } from "./router";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(Router);
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
