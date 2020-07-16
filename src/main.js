import Vue from "vue";
import store from "./store";
import mixin from "./components/mixins.js";
import App from "./App.vue";
import lodash from "lodash";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// lodash
Vue.prototype.$_ = lodash;

// bootstrap
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// mixin
Vue.mixin(mixin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
