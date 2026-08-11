import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import "maplibre-gl/dist/maplibre-gl.css";
import "@/index.css";
import App from "@/App";
import { LanguageProvider } from "@/contexts/LanguageProvider";

inject();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
