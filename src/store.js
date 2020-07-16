import Vue from "vue";
import Vuex from "vuex";
//import lists from "./components/model";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastBoardId: 1,
    lastId: 3,
    lastBoxId: 11,
    boards: [
      {
        id: 0,
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
      {
        id: 1,
        lists: [
          {
            id: 2,
            title: "This is my third list",
            box: [
              { id: 6, title: "anime" },
              { id: 7, title: "poop" },
              { id: 8, title: "lole" },
            ],
          },
          {
            id: 3,
            title: "This is my fourth list",
            box: [
              { id: 9, title: "astartes" },
              { id: 10, title: "wtf" },
              { id: 11, title: "we" },
            ],
          },
        ],
      },
    ],
  },
  mutations: {
    // Drag and drop mutations
    addBoard(state) {
      state.boards.push({
        id: state.lastBoardId + 1,
        lists: [],
      });
      state.lastBoardId++;
    },
    addList(state, { boardId }) {
      state.boards[boardId].lists.push({
        id: state.lastId + 1,
        title: "Insira um titulo aqui...",
        box: [{ title: "Insira um titulo aqui...", id: state.lastBoxId + 1 }],
      });
      state.lastBoxId++;
      state.lastId++;
    },
    addBox(state, { boardId, listId }) {
      state.boards[boardId].lists[listId].box.push({
        title: "Insira um titulo aqui...",
        id: state.lastBoxId + 1,
      });
      state.lastBoxId++;
    },
    updateListTitle(state, { boardId, listId, value }) {
      if (value === "") {
        Vue.set(
          state.boards[boardId].lists[listId],
          "title",
          "Insira um titulo aqui..."
        );
      } else {
        Vue.set(state.boards[boardId].lists[listId], "title", value);
      }
    },
    updateBoxTitle(state, { boardId, listId, boxId, value }) {
      Vue.set(state.boards[boardId].lists[listId].box[boxId], "title", value);
    },
    updateBox(state, { boardId, listId, value }) {
      state.boards[boardId].lists[listId].box = value;
    },
    updateList(state, { value, boardId }) {
      state.boards[boardId].lists = value;
    },
  },
  plugins: [createPersistedState({ key: "trello" })],
});
