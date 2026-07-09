import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { initErrorReporting } from "./lib/sentry";
import App from "./App";

initErrorReporting();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
