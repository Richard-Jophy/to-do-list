import React from "react";
import "./TaskCard.css";
import Tag from './Tag';
import deleteicon from '../assets/delete.png';

const TaskCard = ({ title, tags, onDelete }) => {
  return (
    <article className="task-card">
      <p className="task_text">{title}</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} />
          ))}
        </div>
        <div className="task_delete" onClick={onDelete}>
          <img src={deleteicon} className="delete_icon" alt="Delete task" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
