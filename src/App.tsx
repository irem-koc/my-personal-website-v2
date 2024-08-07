import LeftMenu from "@components/organisms/LeftMenu/LeftMenu";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <LeftMenu />
      <Outlet />
    </div>
  );
}

export default App;
