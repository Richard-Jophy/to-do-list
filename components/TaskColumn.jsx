import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ Title, icon, tasks, status, onDeleteTask }) => {
  return (
    
    <section className="task_column">
     
      <h2 className="task_column_heading">
        <img className="icon" src={icon} alt={Title} />
        {Title}
      </h2>
      {tasks
        .filter((task) => task.status === status)
        .map((task) => (
          <TaskCard 
            key={task.id} 
            title={task.task} 
            tags={task.tags} 
            onDelete={() => onDeleteTask(task.id)}  // Pass task ID instead of index
          />
        ))}
    </section>
  );
};

export default TaskColumn;
