import { useState } from 'react';
import React from 'react';
import TodoForm from './TodoForm';
import Todo from "./Todo";
import {v4 as uuidv4} from 'uuid';
uuidv4();

const Wrapper=()=>{
    const [todos,settodo]=useState([]);

    const addTodo=todo=>{
        settodo([...todos,{id:uuidv4(),task:todo,completed:false,isediting:false}])
        console.log(todos);
    }
    const togglecomplete = (id) => {
        settodo(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };

    const Delete = (id) => settodo(todos.filter((todo) => todo.id !== id));

    const Edit = (id) => {
        settodo(todos.map((todo)=>
            todo.id === id? {...todo, isediting: !todo.isediting} : todo
        ))

    }

    return(<div className='Wrapper'>
        <h1>Things to be done!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,index)=>{
           return <Todo task={todo} key={index} toggleComplete={togglecomplete}
           deleteTodo={Delete} editToDo={Edit}/>
        })}
    </div>)
}

export default Wrapper;