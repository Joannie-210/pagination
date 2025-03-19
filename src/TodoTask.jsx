import React, { useState } from 'react'

const TodoTask = () => {
    const [tasks, setTasks] = useState([
        "Finish up pagination",
        "play game",
        "social media",
    ])
  return (
    <div>
      <h1>Task List</h1>
      <ul>{tasks.map((prevTask, index)=>[...prevTask])}</ul>
    </div>
  )
}

export default TodoTask
