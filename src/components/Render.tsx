import React from 'react'
import type { Task, TaskStatus } from './types'
import TaskItem from './taskItem/TaskItem'
import { useState } from 'react'
import TaskFilter from './TaskFilter/TaskFilter'
import TaskList from './TaskList/TaskList'

export default function Render() {

  const [task, setTask] = useState<Task[]>([])
  const [date, setDate] = useState('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low')

  const [filters, setFilters] = useState<{
    status?: TaskStatus
    priority?: 'low' | 'medium' | 'high'
  }>({})
  // Handle filter change 
  const handleFilterChange = (newfilters: any) => {
    setFilters(newfilters)
  }
  // status change 
  const handleStatusChange = (taskid: string, newStatus: TaskStatus) => {
    setTask(prev => prev.map(task => task.id === taskid ? { ...task, status: newStatus } : task))

  }
  const handleDelete = (taskid: string) => {
    setTask(prev => prev.filter(task => task.id !== taskid))
  }
  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      dueDate: date,
      priority,
      status: 'pending'
    }

    setTask(prev => [...prev, newTask])

    // clear form after submit
    setTitle('')
    setDescription('')
    setDate('')
    setPriority('low')
  }



const filteredTask = task.filter(task => {
    if (filters.status && task.status !== filters.status) return false
    if (filters.priority && task.priority !== filters.priority) return false
    return true
  })

  return (
    <>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button onClick={handleAddTask}>Add Task</button>

      <TaskFilter onFilterChange={handleFilterChange} />

      <TaskList
        tasks={filteredTask}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </>
  )
}