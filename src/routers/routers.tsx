import { createBrowserRouter } from "react-router-dom";
import { childrenRoutes } from "./childrenRoutes";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: childrenRoutes,
  },
]);

export default router;
