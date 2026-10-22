import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./i18n"; // Import i18n configuration
import { HashRouter, Route, Routes } from "react-router";
import NotFound from "./app/NotFound.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path=":lang?/" element={<App />}>
          <Route path="store/:storeId?" element={<App />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
