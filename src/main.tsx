import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster
        toastOptions={{
          className: "bg-slate-800 text-white",
          style: {
            background: "#1e293b",
            color: "#fff",
            border: "1px solid #06b6d4",
          },
        }}
      />
      <App />
    </BrowserRouter>
  </StrictMode>
);
