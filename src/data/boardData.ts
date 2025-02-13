import { BoardDataType } from "../types/boardTypes";

export const boardData: BoardDataType = {
    active: 0,
    boards: [
      {
        name: "Bane's Board",
        bgcolor: "black",
        list: [
          {
            id: "1",
            title: "To do",
            items: [{ id: "1toDo", title: "Description I" }],
          },
          {
            id: "2",
            title: "In Progress",
            items: [{ id: "2inProgress", title: "Description II" }],
          },
          {
            id: "3",
            title: "Done",
            items: [{ id: "3done", title: "Description III" }],
          },
        ],
      },
    ],
  };