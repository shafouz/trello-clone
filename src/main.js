import Vue from "vue";
import store from "./store.js";
import mixin from "./components/mixins.js";
import rawDisplayer from "./components/Raw.vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// raw display
Vue.component("rawDisplayer", rawDisplayer);

// bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// mixin
Vue.mixin(mixin);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
