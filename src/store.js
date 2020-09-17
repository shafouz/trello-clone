import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const mutations = {
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
      id: state.lastBoxId + 1,
      title: "Insira um titulo aqui...",
    });
    state.lastBoxId++;
  },
  updateListTitle(state, { boardId, listId, value }) {
    if (_.isEmpty(value) || value === "\n") {
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
  resetBoard(state) {
    let value = [
      {
        id: 0,
        lists: [
          {
            id: 0,
            title: "This is my first list",
            box: [{ id: 0, title: "Cool box" }],
          },
          {
            id: 1,
            title: "This is my second list",
            box: [{ id: 1, title: "" }],
          },
        ],
      },
      {
        id: 1,
        lists: [
          {
            id: 2,
            title: "This is my third list",
            box: [{ id: 2, title: "random" }],
          },
          {
            id: 3,
            title: "This is my fourth list",
            box: [
              { id: 3, title: "astartes" },
              { id: 4, title: "foo" },
              { id: 5, title: "test" },
            ],
          },
        ],
      },
    ];
    (state.lastBoardId = 1),
      (state.lastId = 3),
      (state.lastBoxId = 11),
      (state.boards = value);
  },
  resetList(state, { boardId }) {
    let value = [
      {
        id: state.lastId + 1,
        title: "This is my first list",
        box: [],
      },
    ];
    state.lastId++;
    state.boards[boardId].lists = value;
  },
};

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
              { id: 0, title: "..." },
              { id: 1, title: "..." },
              { id: 2, title: "..." },
            ],
          },
          {
            id: 1,
            title: "This is my second list",
            box: [
              { id: 3, title: "..." },
              { id: 4, title: "..." },
              { id: 5, title: "The spice must flow" },
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
              { id: 6, title: "New box 1" },
              { id: 7, title: "New box 2" },
              { id: 8, title: "" },
            ],
          },
          {
            id: 3,
            title: "This is my fourth list",
            box: [
              { id: 9, title: "astartes" },
              { id: 10, title: "" },
              { id: 11, title: "we" },
            ],
          },
        ],
      },
    ],
  },
  mutations,
  plugins: [createPersistedState({ key: "trello" })],
});
