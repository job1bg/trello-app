import { useContext, useState } from "react";
import "../../index.scss";
import { ChevronLeftIcon } from "../asset-components/ChevronLeft";
import { ChevronRightIcon } from "../asset-components/ChevronRight";
import { PlusIcon } from "../asset-components/PlusIcon";
import AddBoardPopover from "../AddBoardPopover/AddBoardPopover";
import { BoardsContext } from "../context/BoardsContext";
import { Board, BoardDataType } from "../../types/boardTypes";

export const Sidebar = () => {
  const emptyBoard: Board = {
    name: "",
    bgcolor: "black",
    list: [],
  };

  const [rotated, setRotated] = useState<boolean>(false);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const { board, setBoard } = useContext(BoardsContext) as {
    board: BoardDataType;
    setBoard: (board: BoardDataType) => void;
  };
  const [boardData, setBoardData] = useState<Board>(emptyBoard);

  const HandleRotateClick = () => setRotated(!rotated);
  const toggleNewBoardPopover = () => setOpenPopover(!openPopover);

  const onCreateBoard = () => {
    setOpenPopover(false);
    const newBoard = { ...board };
    newBoard.boards.push(boardData);
    setBoard(newBoard);
    setBoardData(emptyBoard);
  };

  const setActiveboard = (i: number) => {
    const newBoard = { ...board };
    newBoard.active = i;
    setBoard(newBoard);
  };

  return (
    <div className="sidebar">
      {rotated ? (
        <div className="collapsed">
          <button
            onClick={HandleRotateClick}
            className="chevron-button chevron-right"
            aria-label="expand sidebar"
          >
            <ChevronRightIcon size={15} />
          </button>
        </div>
      ) : (
        <div className="not-collapsed">
          <div className="workspace">
            Workspace
            <button
              onClick={HandleRotateClick}
              className="chevron-button chevron-left"
              aria-label="collapse sidebar"
            >
              <ChevronLeftIcon size={15} />
            </button>
          </div>
          <div className="board">
            <div className="boardlist">Boards</div>
            <button className="plus-button" onClick={toggleNewBoardPopover}>
              <PlusIcon size={15} />
            </button>
            {openPopover && (
              <AddBoardPopover
                boardData={boardData}
                setBoardData={setBoardData}
                onClose={onCreateBoard}
              />
            )}
          </div>
          <ul className="board-ul">
            {board.boards?.map((x, i) => (
              <li key={i}>
                <button
                  onClick={() => setActiveboard(i)}
                  className="board-button"
                >
                  <div className="list-item-disc" />
                  <span
                    className="color-box"
                    style={{ backgroundColor: x.bgcolor }}
                  >
                    &nbsp;
                  </span>
                  <span>{x.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
