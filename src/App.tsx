import "./App.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Header></Header>
      <div className="content">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
