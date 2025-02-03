import "./App.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

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
