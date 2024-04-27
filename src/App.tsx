import LeftMenu from "@components/organisms/LeftMenu/LeftMenu";
import { Outlet } from "react-router-dom";
import "./App.css";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <div className="flex">
        <LeftMenu />
        <Outlet />
      </div>
    </ContextProvider>
  );
}

export default App;
