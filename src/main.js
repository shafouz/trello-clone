import Vue from "vue";
import store from "./store.js";
import mixin from "./components/mixins.js";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.mixin(mixin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
