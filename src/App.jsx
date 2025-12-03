// import { useState } from "react";
// import Title from "./components/Title/Title";
// import TaskForm from "./components/TaskForm/TaskForm";
// import TaskList from "./components/TaskList/TaskList";

// function App() {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (title) => {
//     setTasks([...tasks, { title, completed: false }]);
//   };

//   const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   const toggleTask = (index) => {
//     setTasks(
//       tasks.map((task, i) =>
//         i === index ? { ...task, completed: !task.completed } : task
//       )
//     );
//   };

//   return (
//     <>
//       <Title />
//       <TaskForm onAddTask={addTask} />
//       <TaskList
//         tasks={tasks}
//         onDeleteTask={deleteTask}
//         onToggleTask={toggleTask}
//       />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
// 1. Importamos el Contexto y el Botón
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import Title from "./components/Title/Title";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { title, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    /* 2. Envolvemos TODO el contenido con ThemeProvider */
    <ThemeProvider>
      {/* Contenedor principal (opcional, para márgenes generales) */}
      <main className="app-container">
        {/* 3. Agregamos el botón (con un estilo simple para alinearlo a la derecha) */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <ThemeToggle />
        </div>

        <Title />
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />
      </main>
    </ThemeProvider>
  );
}

export default App;
