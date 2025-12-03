import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.scss";

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  if (tasks.length === 0) {
    return <p className={styles.parrafo}>No hay tareas para mostrar.</p>;
  }

  return (
    <div className={styles.taskList}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          title={task.title}
          completed={task.completed}
          onDelete={() => onDeleteTask(index)}
          onToggle={() => onToggleTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
