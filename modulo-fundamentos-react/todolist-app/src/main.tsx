import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globols.css";
import { ThemeProvides } from "./contexts/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvides>
      <App />
    </ThemeProvides>
  </StrictMode>
);
