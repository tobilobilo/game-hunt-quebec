import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./i18n"; // Import i18n configuration
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:lang?/:store?" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
