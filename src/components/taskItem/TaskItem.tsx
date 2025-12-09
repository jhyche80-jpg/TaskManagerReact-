import type { TaskItemProps } from "../types";
import React from 'react'

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    const handleStatusUpdate = (e) => {
        onStatusChange(task.id, e.target.value)
    }

    return (
        <tr>
            <td>{task.title}</td>
            <td>{task.description} </td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>
                <select name="" id="" value={task.status} onChange={handleStatusUpdate} >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In progress</option>
                    <option value="completed">Completed</option>
                </select>
            </td>

            <td>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </td>          
        </tr>
    )
}
