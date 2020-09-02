import Vue from "vue";
import App from "./App.vue";
import { SpinnerPlugin } from "bootstrap-vue";
import { BNavbarBrand, BNavbar, BRow, BCol, BContainer } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(SpinnerPlugin);
Vue.component("b-navbar-brand", BNavbarBrand);
Vue.component("b-navbar", BNavbar);
Vue.component("b-container", BContainer);
Vue.component("b-row", BRow);
Vue.component("b-col", BCol);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  render: h => h(App)
}).$mount("#app");
