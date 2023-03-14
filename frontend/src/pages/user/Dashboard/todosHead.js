import React from 'react'
import "./TodosHead.css"
export const Todoshead = () => {
  return (<>
   <div className="heading">
       <div className="heading1">Today's Task</div>
       <div className="heading2">Wednesday , 8 Feb</div>
   </div>
   <div className="todoStatus"><div className="status"><div style={{color: " #3661EB"}}>ALL <div className="count count1">0</div> </div>
   <div className="vBar"></div>
   <div>Completed <div className="count">0</div></div>
   <div>Open <div className="count">0</div></div>
   <div>Close <div className="count">0</div></div>
   </div>
   <div className="todoCount">showing <select name="numberOfTodos" >
  <option value="5">5</option>
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="50">50</option>
</select> items out of 100</div>
   </div>
   </>
  )
}
