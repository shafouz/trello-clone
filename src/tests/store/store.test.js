import { mutations } from "./../../store";

const {
  addBoard,
  addList,
  addBox,
  updateListTitle,
  updateBoxTitle,
  updateBox,
  updateList,
} = mutations;

function restartState() {
  state = {
    lastBoardId: 0,
    lastId: 0,
    lastBoxId: 0,
    boards: [
      {
        id: 0,
        lists: [
          {
            id: 0,
            title: "Insira um titulo aqui...",
            box: [{ id: 0, title: "Insira um titulo aqui..." }],
          },
        ],
      },
    ],
  };
}

let state = {
  lastBoardId: 0,
  lastId: 0,
  lastBoxId: 0,
  boards: [
    {
      id: 0,
      lists: [
        {
          id: 0,
          title: "Insira um titulo aqui...",
          box: [{ id: 0, title: "Insira um titulo aqui..." }],
        },
      ],
    },
  ],
};

describe("mutations", () => {
  beforeEach(() => {
    restartState();
  });

  test("add new board", () => {
    addBoard(state);
    expect(state.boards[1]).toEqual({
      id: 1,
      lists: [],
    });
  });

  test("add new list", () => {
    addList(state, { boardId: 0 });
    expect(state.boards[0].lists[1]).toEqual({
      id: 1,
      title: "Insira um titulo aqui...",
      box: [{ title: "Insira um titulo aqui...", id: 1 }],
    });
  });

  test("add new box", () => {
    addBox(state, { boardId: 0, listId: 0 });
    expect(state.boards[0].lists[0].box[1]).toEqual({
      id: 1,
      title: "Insira um titulo aqui...",
    });
  });

  test("update list title", () => {
    updateListTitle(state, { boardId: 0, listId: 0, value: "foo bar" });
    expect(state.boards[0].lists[0].title).toEqual("foo bar");
  });

  test("update box title", () => {
    updateBoxTitle(state, {
      boardId: 0,
      listId: 0,
      boxId: 0,
      value: "this is box 0",
    });
    expect(state.boards[0].lists[0].box[0].title).toEqual("this is box 0");
  });

  test("update box", () => {
    updateBox(state, {
      boardId: 0,
      listId: 0,
      value: [{ id: 1, title: "Insira um titulo aqui..." }],
    });
    expect(state.boards[0].lists[0].box).toEqual([
      { id: 1, title: "Insira um titulo aqui..." },
    ]);
  });

  test("update lists", () => {
    updateList(state, {
      value: [
        {
          id: 2,
          title: "This is a list title",
          box: [{ id: 3, title: "box 3" }],
        },
      ],
      boardId: 0,
    });
    expect(state.boards[0].lists).toEqual([
      {
        id: 2,
        title: "This is a list title",
        box: [{ id: 3, title: "box 3" }],
      },
    ]);
  });
});
