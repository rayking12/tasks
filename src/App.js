import Header from './components/Header'
import { useState, useEffect } from 'react'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
import './App.css';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect (() => {
    const getTasks = async () => {
      const getTasksFromServer = await fetchTasks()
      setTasks(getTasksFromServer)
    }
    getTasks()
  }, [])

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }
  // AddTask
  const addTasks = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })
    const data = await res.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }
  // DeleteTask
  const deleteTasks = async (id) => {
    await fetch (`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter(task => (task.id !== id)))
  }
  // Togglereminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => ( task.id === id ? { ...task, reminder: !task.reminder} : task )))
  }

  return (
    <div className="container">
    < Header onAdds={() => setShowAddTask(!showAddTask)} showAdd= {showAddTask}/>
    { showAddTask && < AddTasks  onAdd = {addTasks}/>}
    { tasks.length > 0 ? < Tasks  tasks= {tasks} onDelete={deleteTasks} onToggle={toggleReminder}/> : "No Tasks, Please Create some tasks" }
    
    </div>
  );
}

export default App;
