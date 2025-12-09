import React from 'react'
import type { TaskListProps } from '../types'
import TaskItem from '../taskItem/TaskItem'
export default function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
    return (
        <ul className='task-list'>
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
        </ul>
    )
}
