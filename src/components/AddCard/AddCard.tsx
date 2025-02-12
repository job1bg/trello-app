import { useState } from "react";
import { X } from "react-feather";
import "../../index.scss";

const AddCard = () => {
  const [card, setCard] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="card-add">
      {show ? (
        <div className="card-input">
          <textarea
            value={card}
            onChange={(e) => setCard(e.target.value)}
            className="textarea"
            placeholder="Enter title..."
            rows={2}
          ></textarea>
          <div className="button-group">
            <button className="add-button">Add Card</button>
            <button onClick={() => setShow(false)} className="close-button">
              <X size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setShow(true)} className="add-card-button">
          Add card
        </button>
      )}
    </div>
  );
};

export default AddCard;
