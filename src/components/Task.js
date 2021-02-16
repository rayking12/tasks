import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({task, onDelete, onToggle}) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick= {() => onToggle(task.id)} >
            <h5>{task.text} <FaTimes onClick={() => onDelete(task.id)} /> </h5>
            <p>{task.date}</p>
        </div>
    )
}     
export default Task
