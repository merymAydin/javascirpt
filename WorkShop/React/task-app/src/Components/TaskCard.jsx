import React, { useState } from 'react'
import TaskForm from './TaskForm';

function TaskCard({task,deleteTask,updateTask}) {
    const[isUpdate,setIsUpdate] = useState(false);
    const handleDelete = () =>{
        deleteTask(task.id);
    }
    const handleUpdateClick = () => {
        setIsUpdate(true);
    }
    const handleSubmit = (id,title,description,important) => {
        setIsUpdate(false);
        //updateTask(id,title,description,important)
    }
  return (
    <div className='card-container'>
        {
            isUpdate ? <TaskForm updateSubmit={handleSubmit} task={task}/>  :
            <div className='task-card'>
        <div className='card-group'>
            <h3 className='card-title'>Title</h3>
            <p className='card-text'>{task.title}</p>
        </div>
        <div className='card-group'>
            <h3 className='card-description'>description</h3>
            <p className='card-text'>{task.description}</p>
        </div>
        <div className='card-group'>
            <h3 className='card-title'>important</h3>
            <p className='card-text'>{task.important ? "important" : "normal"}</p>
        </div>
        <div className='car-group'>
            <button className='card-button update-button' onClick={handleUpdateClick}>update</button>
            <button className='card-button delete-button' onClick={handleDelete}>delete</button>
        </div>
    </div>
            
        }
    
    </div>
  )
}

export default TaskCard
