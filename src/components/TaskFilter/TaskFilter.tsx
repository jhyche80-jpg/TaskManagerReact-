
import React, { useState } from 'react'
import type { TaskFilterProps } from '../types'

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
    const [status, setStatus] = useState()
    const [priority, setPriority] = useState()
    const updateFilter = (key, value) => {
        const filters = {
            status, priority, [key]: value,
        }
        onFilterChange(filters)
    }
    return (
        <div className='taskFilter'>
            <select
                name=""
                id=""
                onChange={(e) => {
                    setStatus(e.target.value)
                    updateFilter('status', e.target.value)
                }}
            >
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In progress</option>
                <option value="completed">Completed</option>
            </select>

            <select onChange={(e) => {
                setPriority(e.target.value)
                updateFilters('priority', e.target.value)
            }}>
                <option value="">All Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </div>
    )
}
