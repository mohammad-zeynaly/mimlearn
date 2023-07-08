import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

import { Provider } from "react-redux";
import store from "./Redux/store/store";
import "./styles/app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
