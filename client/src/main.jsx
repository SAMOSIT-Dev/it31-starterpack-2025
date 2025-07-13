import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "./libs/queryClient.js";
import Modal from "react-modal";
import App from "./App.jsx";
import Providers from "./components/Providers.jsx";
import "./index.css";

Modal.setAppElement('#root');

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Providers>
        <App />
      </Providers>
    </QueryClientProvider>
  </StrictMode>
);