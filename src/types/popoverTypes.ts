import { Board } from "./boardTypes";

export type AddBoardPopoverType = {
  onClose: () => void;
  boardData: Board;
  setBoardData: (board: Board) => void;
};