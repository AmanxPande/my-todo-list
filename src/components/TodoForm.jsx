import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus } from '@fortawesome/free-solid-svg-icons'

export const  TodoForm = ({addTodo}) => {
 
   const [value , setValue] = React.useState("")
   

   const handleSubmit = event => {
    event.preventDefault()
   
     console.log(value)
     addTodo(value)
     setValue("")

   }
 
  return (
    <form className="TodoForm"
        onSubmit={handleSubmit}> 
       <input type="text" className='todo-input' 
        placeholder="What is the task today?"
        onChange={(event)=> setValue(event.target.value)}
         value={value}
      />
      <button className="todo-btn" ><FontAwesomeIcon icon={faPlus} beat size="lg" />
 </button>
    </form>
  );
}




























//  function handleChange(event) {
  //   const {name, value} = event.target
  //   setValue(prevValue => {
  //       return{
  //           ...prevValue,
  //       [name]: value
  //       }
  //   })
  

  //  } 