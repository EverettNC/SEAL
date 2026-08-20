import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("SEAL has no root.");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
