import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./TaskForm.module.scss";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    onAddTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe una nueva tarea..."
        className={styles.input}
      />
      <Button type="submit" className={styles.Button}>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>✓</span>
      </Button>
    </form>
  );
}

export default TaskForm;
