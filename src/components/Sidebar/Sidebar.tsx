import { useState } from "react";
import "../../index.scss";
import { ChevronLeftIcon } from "../asset-components/ChevronLeft";
import { ChevronRightIcon } from "../asset-components/ChevronRight";
import { PlusIcon } from "../asset-components/PlusIcon";

export const Sidebar = () => {
  const [rotated, setRotated] = useState<boolean>(false);

  const HandleRotateClick = () => setRotated(!rotated);

  return (
    <div className="sidebar">
      {rotated && (
        <div className="collapsed">
          <button
            onClick={HandleRotateClick}
            className="chevron-button chevron-right"
            aria-label="expand sidebar"
          >
            <ChevronRightIcon size={15} />
          </button>
        </div>
      )}
      {!rotated && (
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
            <button className="plus-button">
              <PlusIcon size={15}></PlusIcon>
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
