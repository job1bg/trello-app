import React from "react";
import "../../index.scss";

const AddBoardPopover: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="popover-container">
      <div className="title">Add new board</div>
      <hr className="separator" />
      <div className="new-board-title">
        <label>Enter title:</label>
        <input type="text" className="title-input"></input>
      </div>
      <div className="new-board-color">
        <label>Choose color:</label>
        <input type="color" className="color-input"></input>
      </div>
      <button className="create-board-button" onClick={onClose}>
        Create
      </button>
    </div>
  );
};

export default AddBoardPopover;
