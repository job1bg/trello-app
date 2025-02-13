import { Edit3 } from "react-feather";
import AddCard from "../AddCard/AddCard";
import { BoardsContext } from "../context/BoardsContext";
import { useContext } from "react";
import { BoardData } from "../../types/boardTypes";

export const Main = () => {
  const { board } = useContext(BoardsContext) as { board: BoardData };

  const boardData = board.boards[board.active];

  return (
    <div className="main">
      <div className="board-header">
        <h2>{boardData.name}</h2>
      </div>
      <div className="board-main">
        <div className="container-main">
          <div className="card-main">
            <div className="list-body">
              <div className="list-item">
                <span>To do</span>
                <button className="list-item-button">...</button>
              </div>
              <div className="item">
                <span>Description</span>
                <span className="edit-description-span">
                  <button>
                    <Edit3 className="edit-description" />
                  </button>
                </span>
              </div>
              <AddCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
