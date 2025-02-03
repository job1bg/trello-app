import "../index.scss";

export const Header: React.FC = () => {
  return (
    <div className="header">
      <h3>Trello</h3>
      <div className="header-buttons">
        <button className="more-button">...</button>
      </div>
    </div>
  );
};
