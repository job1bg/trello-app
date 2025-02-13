import React, { ChangeEvent } from "react";
import "../../index.scss";
import { AddBoardPopoverType } from "../../types/popoverTypes";

const AddBoardPopover: React.FC<AddBoardPopoverType> = ({
  onClose,
  boardData,
  setBoardData,
}) => {
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBoardData({ ...boardData, name: e.target.value });
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBoardData({ ...boardData, bgcolor: e.target.value });
  };

  return (
    <div className="popover-container">
      <div className="title">Add new board</div>
      <hr className="separator" />
      <div className="new-board-title">
        <label>Enter title:</label>
        <input
          value={boardData.name}
          onChange={handleTitleChange}
          type="text"
          className="title-input"
        />
      </div>
      <div className="new-board-color">
        <label>Choose color:</label>
        <input
          value={boardData.bgcolor}
          onChange={handleColorChange}
          type="color"
          className="color-input"
        />
      </div>
      <button className="create-board-button" onClick={onClose}>
        Create
      </button>
    </div>
  );
};

export default AddBoardPopover;
