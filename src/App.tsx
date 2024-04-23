import { Outlet } from "react-router-dom";
import "./App.css";
import LeftMenu from "./components/organisms/leftMenu/LeftMenu";

function App() {
  return (
    <>
      <LeftMenu />
      <Outlet />
    </>
  );
}

export default App;
