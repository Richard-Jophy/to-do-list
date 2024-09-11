import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todo_icon from "./assets/direct-hit.png";
import inprogress from "./assets/glowing-star.png";
import completed from "./assets/check-mark-button.png";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1 className="app_title">TO-DO LIST MAKER</h1> {/* Add the title here */}
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          Title="To-do"
          icon={todo_icon}
          tasks={tasks}
          status="todo"
          onDeleteTask={deleteTask}
        />
        <TaskColumn
          Title="In Progress"
          icon={inprogress}
          tasks={tasks}
          status="doing"
          onDeleteTask={deleteTask}
        />
        <TaskColumn
          Title="Completed"
          icon={completed}
          tasks={tasks}
          status="done"
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
};

export default App;
