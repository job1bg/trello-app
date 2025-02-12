import { Edit3 } from "react-feather";
import AddCard from "../AddCard/AddCard";

export const Main = () => {
  return (
    <div className="main">
      <div className="board-header">
        <h2>My Board</h2>
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
                    <Edit3 className="edit-description"></Edit3>
                  </button>
                </span>
              </div>
              <AddCard></AddCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
