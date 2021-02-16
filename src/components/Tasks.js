import React from 'react'
import Task from './Task'

function Tasks( { tasks, onDelete, onToggle }) {
    return (
        <div className="">
            {tasks.map ( (task,index) => (
                 (< Task task={task} key={index} onDelete={onDelete} onToggle = {onToggle}/>) 
            ))}
        </div>
    )
}

export default Tasks
