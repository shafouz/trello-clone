import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastListId: 1,
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
    changeListTitle(state, payload) {
      const index = state.lists.findIndex((item) => item.id === payload.id);
      if (index !== -1) state.lists.splice(index, 1, payload);
    },
    changeBoxTitle(state, { id, title, index }) {
      Vue.set(state.lists[index].box[id], "title", title);
    },
    addBox(state, { index }) {
      let arr = state.lists[index].box;
      let id = state.lastBoxId;
      if (arr.length > 0) {
        state.lastBoxId++;
        let box = {
          id: id + 1,
          title: "Insira um título para este cartão...",
        };
        state.lists[index].box.push(box);
      } else {
        state.lists[index].box.push({
          id: id + 1,
          title: "Insira o título da lista...",
        });
        state.lastBoxId++;
      }
    },
    addList(state) {
      let lists = state.lists;
      let lastID = lists[lists.length - 1].id;
      let list = {
        id: lastID + 1,
        title: "Insira o título da lista...",
        box: [],
      };
      state.lists.push(list);
    },
    // Drag and drop mutations
    updateBoxTitle(state, { index, id, value }) {
      Vue.set(state.lists[index].box[id], "title", value);
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
