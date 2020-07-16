import Vue from "vue";
//import Board from "./components/Board.vue";
import ListBox from "./components/ListBox.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/board/:id", name: "board", component: ListBox }];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
