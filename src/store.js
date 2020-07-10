import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
        id: 0,
        title: "Testing",
        box: [{ id: 0, title: "This is a Box", parent: 0 }],
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
    changeBoxTitle(state, { id, title, parent }) {
      Vue.set(state.lists[parent].box[id], "title", title);
    },
    addBox(state, { id }) {
      let index = state.lists.find((list) => list.id === id).box;
      if (index.length > 0) {
        let lastId = state.lists.find((list) => list.id === id).box[
          index.length - 1
        ].id;
        let parent = state.lists.find((list) => list.id === id).box[0].parent;
        state.lists
          .find((list) => list.id === id)
          .box.push({
            id: lastId + 1,
            title: "Insira um título para este cartão...",
            parent: parent,
          });
      } else {
        state.lists[id].box.push({
          id: 0,
          title: "Insira o título da lista...",
          parent: id,
        });
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
  },
  methods: {
    getBox: (state) => (id) => {
      return state.lists.find((list) => list.id === id).box;
    },
  },
  plugins: [createPersistedState()],
});
