import React,{useState} from 'react';

const TodoForm=({addTodo})=>{
    const [value,setvalue]=useState("");

    const submithandle= e =>{
        e.preventDefault();
        if(value){
        addTodo(value);
        setvalue("");
        }
    };
    return(
    <form className='Todoform' onSubmit={submithandle}>
         <input type="text" className='todo-input' value={value} placeholder='add the task' onChange={(e)=>{setvalue(e.target.value)}}/>
         <button type="submit" className='to-do-submit'>Add Task</button> 
    </form>
    );
};

export default TodoForm;