import { useState } from 'react'
import Header from './components/Header.js'
import Task from './components/Task.js'
import Form from './components/Form.js'

function App() {
  const [showform,setShowForm] = useState(false)
  const [tasks,setTasks] = useState([
    {
      id: 1,
      text: 'Meeting with the team',
      day: '2nd Feb at 1200',
    },

    {
      id: 2,
      text: 'Medical Checkup',
      day: '8th Feb at 1330',
    }

  ])

  const addTasks = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask])
  }
  return (
    <div className="container">
      <Header title='To-do' onAdd={() => setShowForm(!showform)} showform={showform} />
      {showform && <Form onAdd={addTasks} />}

      <>
        {tasks.map((task) => {
          if (!task.checked){
            return(
            <Task key={task.id} task={task} />
            )
          } else {
            return(
              <Task key={task.id} task={task} className='checked' />
            )
          }
        })}
      </>
    </div>
  );
}


export default App;
