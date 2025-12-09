import React from 'react'
import type { Task, TaskStatus } from './types'
import TaskItem from './taskItem/TaskItem'
import { useState } from 'react'
import TaskFilter from './TaskFilter/TaskFilter'
import TaskList from './TaskList/TaskList'

export default function Render() {
 
  const [task,setTask]= useState<Task[]>([])
  const [date,setDate]= useState()
  const [filters,setFilters]= useState<{
    status?: TaskStatus
    priority?: 'low' | 'medium' | 'high'
  }>({})
  // Handle filter change 
const handleFilterChange = (newfilters:any)=>{
  setFilters(newfilters)
}
// status change 
const handleStatusChange = (taskid:string, newStatus:TaskStatus)=>{
  setTask(prev=>prev.map(task=>task.id === taskid?{...task,status: newStatus}:task))

}
const handleDelete = (taskid:string)=>{
  setTask(prev=> prev.filter(task=> task.id !== taskid))
}
//Apply the filter 
const filteredTask = task.filter(task=>{
  if(filters.status && task.status !== filters.status) return false
  if (filters.priority && task.priority !== filters.priority) return false
  return true 
})

  return (
    <>
    <input type="text" />
    <input type="date" value={date}
    onChange={{(e)}}
    />
    <TaskFilter onFilterChange={handleFilterChange}/>
    <TaskList tasks={filteredTask}
    onStatusChange={handleStatusChange}
    onDelete={handleDelete}/>

    </>
  )
}
