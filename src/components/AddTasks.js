import { useState } from 'react'
const AddTasks = ( {onAdd} ) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert(" Please add a Task")
            return
        }
        onAdd({text, date, reminder})

        setText('')
        setDate('')
        setReminder(false)
    }
    return (
        <form className="" onSubmit = {onSubmit}>
        <div className="form-group">
            <label >Task</label>
            <input type="text" placeholder="Add Task" className="form-control" value={text} onChange={(e) => setText(e.target.value) }/>
        </div>
        <div className="form-group">
            <label > Day & Time</label>
            <input type="text" placeholder="Add day and Time" className="form-control" value={date} onChange={(e) => setDate(e.target.value) }/>
        </div>
        <div className="form-control-check">
            <label > Set Reminder</label>
            <input type="checkbox" className="form-control" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) }/>
        </div>
        <input type="submit" placeholder = " Add tasks " className="btn btn-block btn-dark mb-3"/>
            
        </form>
    )
}

export default AddTasks
