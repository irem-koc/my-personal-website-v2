import { Outlet } from "react-router-dom";
import "./App.css";
import LeftMenu from "./components/organisms/LeftMenu/LeftMenu";
import ContextProvider from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <LeftMenu />
      <Outlet />
    </ContextProvider>
  );
}

export default App;
