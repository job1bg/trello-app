import { useState } from "react";
import "../index.scss";
import { ChevronLeft } from "./asset-components/ChevronLeft";
import { ChevronRight } from "./asset-components/ChevronRight";
import { Plus } from "./asset-components/PlusIcon";

export const Sidebar = () => {
  const [rotated, setRotated] = useState<boolean>(false);
  return (
    <div className="sidebar">
      {rotated && (
        <div className="collapsed">
          <button
            onClick={() => setRotated(!rotated)}
            className="chevron-button chevron-right"
          >
            <ChevronRight size={15}></ChevronRight>
          </button>
        </div>
      )}
      {!rotated && (
        <div className="not-collapsed">
          <div className="workspace">
            Workspace
            <button
              onClick={() => setRotated(!rotated)}
              className="chevron-button chevron-left"
            >
              <ChevronLeft size={15}></ChevronLeft>
            </button>
          </div>
          <div className="board">
            <div className="boardlist">Boards</div>
            <button className="plus-button">
              <Plus size={15}></Plus>
            </button>
          </div>
          <ul className="board-ul">
            <li>
              <button className="board-button">
                <div className="list-item-disc" />
                <span className="color-box">&nbsp;</span>
                <span>My Board</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
