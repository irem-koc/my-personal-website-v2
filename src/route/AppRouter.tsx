import { createBrowserRouter } from "react-router-dom";

import About from "@pages/About/About";
import Contact from "@pages/Contact/Contact";
import Experiences from "@pages/Experiences/Experiences";
import Home from "@pages/Home/Home";
import Portfolio from "@pages/Portfolio/Portfolio";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/experiences",
        element: <Experiences />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <Home />,
      },
    ],
  },
]);
export default router;
