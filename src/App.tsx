import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GAME_TEST, ROUTER_HOME } from "./core/config/routerPath";
import MainLayout from "./components/Layout/main/MainLayout";
import HomePage from "./containers/HomePage/MainLayout";
import "./App.less";
import GameTest from "./components/Games/GameTest/GameTest";

function App() {
  return (
    <div id="app" className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTER_HOME} element={<HomePage />}></Route>
          </Route>
          <Route path={GAME_TEST} element={<GameTest />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
