import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { BoardsContext } from "./components/context/BoardsContext";
import { BoardData } from "./types/boardTypes";

function App() {
  const boardData: BoardData = {
    active: 0,
    boards: [
      {
        name: "Bane's Board",
        bgcolor: "black",
        list: [
          {
            id: "1",
            title: "To do",
            items: [{ id: "1toDo", title: "Description I" }],
          },
          {
            id: "2",
            title: "In Progress",
            items: [{ id: "2inProgress", title: "Description II" }],
          },
          {
            id: "3",
            title: "Done",
            items: [{ id: "3done", title: "Description III" }],
          },
        ],
      },
    ],
  };

  const [board, setBoard] = useState<BoardData>(boardData);

  return (
    <>
      <Header></Header>
      <div className="content">
        <BoardsContext.Provider value={{ board, setBoard }}>
          <Sidebar></Sidebar>
          <Main></Main>
        </BoardsContext.Provider>
      </div>
    </>
  );
}

export default App;
