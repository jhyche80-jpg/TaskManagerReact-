import React from 'react'
import type { Task, TaskStatus } from './types'
import TaskItem from './taskItem/TaskItem'
import { useState } from 'react'
import TaskFilter from './TaskFilter/TaskFilter'
import TaskList from './TaskList/TaskList'
import './Render.css'
export default function Render() {

  const [task, setTask] = useState<Task[]>([])
  const [date, setDate] = useState('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low')
  const [error, setError] = useState<string>('')
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
    setError("")
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      dueDate: date,
      priority,
      status: 'pending'
    }

    if (!title.trim()) {
      setError("Please enter a Task!")
      return
    }
    if (!description.trim()) {
      setError('Please enter a description!')
      return
    }
    if (!date) {
      setError("Please enter a due date!")
      return

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
      <div className='RenderArea'>
        <h1>Task Manager </h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='InputArea'>


          <div className='InputTask'>
            <label htmlFor="Title">  Task:</label>

            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name='Title'
            />
          </div>
          <div className='textArea'>
            <label htmlFor="">Description:</label>
            <textarea
              rows={5}
              cols={20}
              placeholder="Task description max 20 characters"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={20}
            />


          </div>
          <div className='InputDate'>
            <label htmlFor="">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

          </div>
          <div className="InputP">
            <label htmlFor="">  Priority:</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>


          </div>

          <button onClick={handleAddTask} className='TaskButton'>Add Task</button>
          <div className='Filter'>

          </div>


        </div>

        <div className='ListItems'>        
        <TaskFilter onFilterChange={handleFilterChange} />
        <TaskList
          tasks={filteredTask}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}

        />
      </div>
      </div>
    </>
  )
}