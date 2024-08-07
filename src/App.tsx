import LeftMenu from "@components/organisms/LeftMenu/LeftMenu";
import ContextProvider from "@context/Context";
import { Outlet } from "react-router-dom";
import "./App.css";

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
