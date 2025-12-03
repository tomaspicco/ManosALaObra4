// src/components/Button/Button.jsx
import styles from "./Button.module.scss";

// Agregamos 'className' a los props con un valor por defecto vacío
function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      // Concatenamos la clase base del botón + la clase extra que recibamos
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
