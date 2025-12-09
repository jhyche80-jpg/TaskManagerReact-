import React from 'react'
import type { TaskListProps } from '../types'
import TaskItem from '../taskItem/TaskItem'
import "./TaskList.css"
export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    return (
        <table>

            <tr>
                <th>Task</th>
                <th>Description</th>
                <th>Due</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Delete?</th>



            </tr>
            {
                tasks.map(tasks => (
                    <TaskItem
                        key={tasks.id}
                        task={tasks}
                        onStatusChange={onStatusChange}
                        onDelete={onDelete}
                    />
                ))
            }
        </table>
    )
}
