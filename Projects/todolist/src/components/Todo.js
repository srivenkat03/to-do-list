import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Todo = ({task,togglecomplete,deleteToDo,editToDo}) => {
    return(<div className="Todo">
     <p onClick={() => togglecomplete(task.id)} className={`${task.completed ? 'completed' : ""}`} >{task.task}</p>

<div>
    <FontAwesomeIcon onClick={()=> editToDo(task.id)} icon={faPenSquare} /> 
    <FontAwesomeIcon onClick={() => deleteToDo(task.id)} icon={faTrash} />
</div>
</div>);
}

export default Todo;