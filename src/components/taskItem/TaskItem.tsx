import type { TaskItemProps } from "../types";
import React from 'react'

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    const handleStatusUpdate = (e) => {
        onStatusChange(task.id, e.target.value)
    }

    return (
        <div>
            <li className="TasskItem">
                <h3>{task.title}</h3>
                <p>  {task.description} </p>
                <p> Due: {task.dueDate}</p>
                <p> Priority: {task.priority} </p>
                <select name="" id="" value={task.status} onChange={handleStatusUpdate} >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </li>
        </div>
    )
}
