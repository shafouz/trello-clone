// board has: {id: Number, lists: Array}
// array of [board]
const boards = [
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
];

// state.boards[index].lists

/* // lists model
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
];
*/
export default boards;
