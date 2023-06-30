
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Todo({task, toggleComplete, deleteTodo}) {
  return (
    <div className="Todo">
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>
        {task.task}
        </p>
        <div>
        <FontAwesomeIcon icon={faTrash} fade
        onClick={()=> deleteTodo(task.id)} />
        </div>
    </div>
  );
}
