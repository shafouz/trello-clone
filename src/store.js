import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastId: 1,
    lastBoxId: 5,
    lists: [
      {
        id: 0,
        title: "This is my first list",
        box: [
          { id: 0, title: "Joao" },
          { id: 1, title: "Luca" },
          { id: 2, title: "Macedo" },
        ],
      },
      {
        id: 1,
        title: "This is my second list",
        box: [
          { id: 3, title: "oaoJ" },
          { id: 4, title: "acuL" },
          { id: 5, title: "odecaM" },
        ],
      },
    ],
  },
  getters: {
    getListById: (state) => (id) => {
      return state.lists.find((list) => list.id === id);
    },
    getListBoxById: (state) => (id) => {
      return state.lists.find((list) => list.id === id).box;
    },
    getBoxById: (state, getters) => (parent, id) => {
      return getters.getListBoxById(parent).slice(id, id + 1)[0];
    },
  },
  mutations: {
    // Drag and drop mutations
    addList(state) {
      state.lists.push({
        id: state.lastId + 1,
        title: "Insira um titulo aqui...",
        box: [{ title: "Insira um titulo aqui...", id: state.lastBoxId + 1 }],
      });
      state.lastBoxId++;
      state.lastId++;
    },
    addBox(state, { list }) {
      state.lists[list].box.push({
        title: "Insira um titulo aqui...",
        id: state.lastBoxId + 1,
      });
      state.lastBoxId++;
    },
    updateListTitle(state, { list, value }) {
      Vue.set(state.lists[list], "title", value);
    },
    updateBoxTitle(state, { list, index, value }) {
      Vue.set(state.lists[list].box[index], "title", value);
    },
    updateBox(state, { index, value }) {
      state.lists[index].box = value;
    },
    updateList(state, payload) {
      state.lists = payload;
    },
  },
  methods: {
    getBox: (state) => (id) => {
      return state.lists.find((list) => list.id === id).box;
    },
  },
  plugins: [createPersistedState({ key: "trello" })],
});
