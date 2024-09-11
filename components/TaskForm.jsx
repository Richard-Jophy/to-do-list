import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.includes(tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.includes(tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => ({ ...prev, tags: filteredTags }));
    } else {
      setTaskData((prev) => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task.trim()) {
      const newTask = { ...taskData, id: Date.now() };  // Add unique ID using timestamp
      setTasks((prev) => [...prev, newTask]);
      setTaskData({ task: "", status: "todo", tags: [] });  // Reset form after submission
    }
  };

  return (
   
    <header className="app_header">
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task-input"
          placeholder="Enter task"
          value={taskData.task}  // Controlled input
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="Coding" selectTag={selectTag} selected={checkTag("Coding")} />
            <Tag tagName="Exams" selectTag={selectTag} selected={checkTag("Exams")} />
            <Tag tagName="Entertainment" selectTag={selectTag} selected={checkTag("Entertainment")} />
            <Tag tagName="Health" selectTag={selectTag} selected={checkTag("Health")} />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}  // Controlled select
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">In progress</option>
              <option value="done">Completed</option>
            </select>

            <button type="submit" className="task_submit">
              +Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
