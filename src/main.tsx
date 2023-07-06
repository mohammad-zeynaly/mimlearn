import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./styles/app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
