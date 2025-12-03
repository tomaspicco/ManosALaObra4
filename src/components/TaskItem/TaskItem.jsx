import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import styles from "./TaskItem.module.scss";

// Importamos ambas imágenes
import iconDelete from "../../assets/IconDelete.png";
import tachoBlanco from "../../assets/tachoblanco.png";

import { useTheme } from "../../context/ThemeContext";

function TaskItem({ title, completed, onDelete, onToggle }) {
  const { theme } = useTheme();

  // Elegimos la imagen del tacho según el tema
  const currentIcon = theme === "dark" ? tachoBlanco : iconDelete;

  return (
    <div className={styles.container}>
      <Checkbox checked={completed} onChange={onToggle} />

      <span className={`${styles.text} ${completed ? styles.completed : ""}`}>
        {title}
      </span>

      <div className={styles.actions}>
        <Button onClick={onDelete}>
          {/* La imagen cambiará automáticamente al cambiar el tema */}
          <img src={currentIcon} alt="Eliminar" width={16} height={16} />
        </Button>
      </div>
    </div>
  );
}

export default TaskItem;
