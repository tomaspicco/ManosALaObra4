import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// 1. Importamos el Provider del Contexto
import { ThemeProvider } from "./context/ThemeContext";

// 2. Importamos los estilos globales (SCSS)
// Asegúrate de crear este archivo (ver punto 2 abajo)
import "./main.module.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 3. Envolvemos la App con el Provider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
