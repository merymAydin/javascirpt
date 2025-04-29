import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';



function App() {
  const [tasks,setTasks] = useState([]);

  const createTask = (title,description,important) => {
    setTasks([...tasks,{
      id : Math.ceil(Math.random() * 9999999),
      title,
      description,
      important
    }]);
    console.log(tasks);
    
  }
  //numbers = {1,2,3,4,5};

  //newNumbers=Numbers.filter((number) => number !== 3)
  //[1,2,4,5]

  //tasks = [{id:1},title:Html,description:"asdadfas",important]
  function deleteTask(id){
    const deletedAfterTasks = tasks.filter((task) => task.id !== id )
    setTasks(deletedAfterTasks);
  } 

  const updateTask = (id,title,description,important) => {
    const updatedTask = tasks.map((task) => {
      if(task.id === id){
        return{id,title,description,important}
      }
      return task;
    })
    setTasks(updatedTask);
  }


  return (
    <>
    <div id="app">
      <div id="task-form-container">
        <TaskForm create={createTask}/>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
    </>
  )
}

export default App

