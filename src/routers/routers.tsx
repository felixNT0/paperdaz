import { createBrowserRouter } from "react-router-dom";
import { childrenRoutes } from "./childrenRoutes";
import App from "../App";
import { NotFound } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: childrenRoutes,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
