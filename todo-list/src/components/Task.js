import { useState } from 'react'

const Task = ({task}) => {
  const [done,setDone] = useState(false)
  return (
    <div className="task-container" style={done ? {backgroundColor: 'grey'}: {backgroundColor: 'lightgrey'}}>
      <div className="task">
        <h3>
          {task.text}
        </h3>
        <p>
          {task.day}
        </p>
      </div>
      <form className='check'>
        <input type="checkbox" value={done} onChange = {(e) => {
          setDone(!done)
        }} />
      </form>
    </div>
  )
}

export default Task
