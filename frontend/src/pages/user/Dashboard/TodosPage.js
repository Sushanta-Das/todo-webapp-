import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react';

import { Todos } from "./todos.js";
export const TodosPage = () => {
    let init=[]
    const [todolist,settodo]=useState(
      [{
       sl:"1",
       title:"Go to the Gym",
       desc:"For fitness"
     },
     {
       sl:"2",
       title:"Go to the Restuarant",
       desc:"For Meal"
     },
     {
       sl:"3",
       title:"Do the HomeWork",
       desc:"For Mind exercise"
     }
 ]
        
    )
    // const fetchData = async () => {
    //   try {
    //     // const response3 = await axios.post('http://localhost:1337/api/auth/register',{username:"sushanta123",email:"sushanta123@gmail.com",password:"admin@123",confirm_password:"admin@123"});
    //     // console.log(response3.data);
       
    
    //     const response2 = await axios.get("http://localhost:1337/api/task/");
    //     console.log(response2.data);
    
        
    
       
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchData().then((res)=>{console.log(res)}).catch(err=>console.log(err))
    // ;
    // useEffect(() => {
    //   axios.post("http://localhost:1337/api/auth/login",{username:"sushanta2",password:"Admin@123"}).then((res)=>{console.log(res);
    //     axios.get("http://localhost:1337/api/task/")
    //     .then((res)=> { settodo(res.data);console.log(res.data)})
       
    //     .catch(error => console.log(error));}
    //  )
            
    //       .catch((err)=>{console.log(err)});

    
      
    // }, [])

    // if()
    //  {
    //   init= JSON.parse(localStorage.getItem("todo"));
    //  }
    
    
   
     // useEffect(() => {
     
     //   axios.post("/addTodo",todolist).then((res)=>{
     //     console.log(res)
     //   }).catch((err)=>{console.log(err)})
      
       
     // }, [todolist])
     
   const add=(obj)=>{
    
     console.log(obj)
    settodo(
       [...todolist,obj])
   
      //  axios.post("/addTodo", obj).then((res)=>{
      //    console.log(res)
      //  }).catch((err)=>{console.log(err)})
   }
     
     
   const update=(todo)=>
   {
     todolist[todo.sl-1]=todo;
     settodo(todolist)
   }
   const ondelete=(todo)=>{
     settodo(
       todolist.filter(
         (e)=>
         {
           return e!==todo;
         }
       )
     )
    //  axios.delete(`/delete/${todo.sl}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
     
   }
   
  return (
     <>
    <Todos todo={todolist} update={update} ondelete={ondelete}/>
  
    </>
  )
}
