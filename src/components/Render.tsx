import React from 'react'
import type { Task, TaskStatus } from './types'
import TaskItem from './taskItem/TaskItem'
import { useState } from 'react'
import TaskFilter from './TaskFilter/TaskFilter'
import TaskList from './TaskList/TaskList'

export default function Render() {

  const [task,setTask]= useState<Task[]>([])

  const [filters,setFilters]= useState<{
    status?: TaskStatus
    priority?: 'low' | 'medium' | 'high'
  }>({})
const handleFilterChange = (newfilters)=>{
  setFilters(newfilters)
}
const handleStatusChange = (taskid:string, newStatus:TaskStatus)=>{
  setTask(prev=>prev.map(task=>task.id === taskid?{...task,status: newStatus}:task))

}
const 

  return (
    
  )
}
