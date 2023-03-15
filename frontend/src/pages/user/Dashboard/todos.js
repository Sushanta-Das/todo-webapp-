import React from 'react'
import { TodoItem } from './todoItem'
import"./todos.css"
import deleteImg from"./../../../userSpace_icons/delete.png"
import editImg from"./../../../userSpace_icons/edit.png"
export const Todos = (props) => {
    console.log("Length",props.todo)
  return (
    <>
    <div className='container'>
     
    {
     props.todo.length===0 || props.todo===undefined ?<h4>Todos list is Empty</h4> :  props.todo.map((item) =>{
        return <TodoItem todo={item}  key={item.sl} update={props.update}  ondelete={props.ondelete }/>
        })
    }
    
   
    </div>
   
    </>
  )
}
