import React, {useState} from 'react'

function TodoList(){

  const [ tasks, setTasks ] = useState([]);
  const [ newTask , setNewTask ] = useState("");

  function handleInputChange(e){
    setNewTask(e.target.value);

  }

  function addTask(){
    if(newTask.trim() !== ""){//won't add empty task
      setTasks(tasks => [...tasks,newTask]);
    setNewTask(""); // otherwise the input box will fill by the taks

    }
     }

  function deleteTask(index){

    const updatedTask = tasks.filter((elem,indx) => indx!==index);
    setTasks(updatedTask);

  }

  return(
    <div style={{width:'100%',height:'100vh', textAlign:'center',marginTop:'100px'
    }}>
      <h1>To Do List</h1> 
      <div className='input'>
        <input type = "text" value={newTask} placeholder='Enter your task..' onChange={handleInputChange} className='input-box'/>
        <button onClick={addTask} className='addTask' >Add Task</button>
      </div>

      
    <ol>
      {tasks.map((elem,index) => 
        <li key = {index}>
          <span className='tasks'>{elem}</span>
          <button className='delete-tasks' onClick={ ()=>deleteTask(index) }>Delete</button>
        </li>

      )}
      
    </ol>

    </div>

  )
}

export default TodoList;