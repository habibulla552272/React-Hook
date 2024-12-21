import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UseContex } from "./Commponent/UseContex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseContex>
      <App />
    </UseContex>
  </StrictMode>
);
