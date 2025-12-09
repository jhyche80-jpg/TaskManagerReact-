import type { TaskItemProps } from "../types";
import React from 'react'

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
    const handleStatusUpdate = (e) => {
        onStatusChange(task.id, e.target.value)

    }
    const getStatusColor = (status: string) => {
        switch (status) {
            case "pending":
                return "#fef3c7";
            case "in-progress":
                return "#bfdbfe"
            case "completed":
                return "#bbf7d0"
            case "low":
                return "blue"
            case "medium":
                return "purple"
            case "high":
                return"red"
            default:
                return "white"

        }
    }

    return (
        <tr>
            <td>{task.title}</td>
            <td>{task.description} </td>
            <td>{task.dueDate}</td>
            <td  style={{
            color: getStatusColor(task.priority),
          }}>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</td>
            <td>
                <select
                    style={{
                        backgroundColor: getStatusColor(task.status),
                        padding: "5px",
                        borderRadius: "4px"
                    }}
                    value={task.status}
                    onChange={handleStatusUpdate} >
                    <option value="pending" id="Pending">Pending</option>
                    <option value="in-progress" id="IP">In progress</option>
                    <option value="completed" id="comp">Completed</option>
                </select>
            </td>

            <td>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </td>
        </tr>
    )
}
