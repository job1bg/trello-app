import { Board } from "./boardTypes";

export type AddBoardPopoverType = {
  onCreateBoard: () => void;
  boardData: Board;
  setBoardData: (board: Board) => void;
};