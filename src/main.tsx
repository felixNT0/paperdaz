import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { AppContextProvider } from "./context";
import "./index.css";
// import Receipt from "./pages/receipt";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <RouterProvider router={router} />
        {/* <Receipt /> */}
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
