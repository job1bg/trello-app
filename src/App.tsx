import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { BoardsContext } from "./components/context/BoardsContext";
import { BoardDataType } from "./types/boardTypes";
import { boardData } from "./data/boardData";

function App() {
  const [board, setBoard] = useState<BoardDataType>(boardData);

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
