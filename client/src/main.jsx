import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Providers from "./components/Providers.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
        <App />
    </Providers>
  </StrictMode>
);
