import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const ToDoList=(props)=>{
    return(
        <>
         <div className="todo_style">
         <CloseIcon 
         onClick={()=>{
            props.onSelect(props.id);
         }}/>  
    <li>{props.text}</li> 
       </div>
    </>
    );
};

export default ToDoList;
