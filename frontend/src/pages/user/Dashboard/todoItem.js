import React from 'react'
import deleteImg from"./../../../userSpace_icons/delete.png"
import editImg from"./../../../userSpace_icons/edit.png"
import"./todos.css"
export const TodoItem = ({todo,update,ondelete}) => {
  return (<>
    <div className="todoItem">
    <div className="head">
    <input  className="chkBox" type="checkbox" name="" id=""/>
        <div className="date">Fri<br />08</div>
        <div className="time">12:00<br />
            PM</div>
            <div className="hBar"></div>
            <div className="todoRow">
            <div className="todo">
            <div className="title">{todo.title}<div id="category">Private</div></div>
            <div className="desc">{todo.desc}</div>
            
        </div>
        <div className="todoRight"><div className="deadline">Deadline in 21 Hrs</div>
        <div className="op">
        <div className="edit"><img src={editImg} alt="edit" /></div>
            <div className="delete" onClick={()=>{ondelete(todo)}}><img src={deleteImg} alt="delete" /></div>

        </div>
            </div></div>
        
        
    </div>
    
</div>
{/* <div className="todoItem">
    <div className="head">
        <div className="date">Fri<br />08</div>
        <div className="time">12:00<br />
            PM</div>
            <div className="hBar"></div>
        <div className="todo">
            <div className="title">Web Design<div id="category">Team</div></div>
            <div className="desc">is simply dummy text of the printing and typesetting industry. Lorem Ipsum . </div>
            
        </div>
    </div>
    <div className="subtask"><input  className="chkBox" type="checkbox" name="" id=""/>
        <div className="todo">
            <div className="title">Web Design</div>
            <div className="desc">is simply dummy text of the printing and typesetting industry. Lorem Ipsum . </div>

        </div>
        <div className="deadline">Deadline in 21 Hrs</div>
        <div className="op">
        <div className="edit"><img src={editImg} alt="edit" /></div>
            <div className="delete"><img src={deleteImg} alt="delete" /></div>

        </div>
    </div>

    <div className="subtask"><input  className="chkBox" type="checkbox" name="" id=""/>
        <div className="todo">
            <div className="title">Web Design</div>
            <div className="desc">is simply dummy text of the printing and typesetting industry. Lorem Ipsum . </div>

        </div>
        <div className="deadline">Deadline in 21 Hrs</div>
        <div className="op">
            <div className="edit"><img src={editImg} alt="edit" /></div>
            <div className="delete"><img src={deleteImg} alt="delete" /></div>
        </div>
    </div>

    <div className="subtask"><input  className="chkBox" type="checkbox" name="" id=""/>
        <div className="todo">
            <div className="title">Web Design</div>
            <div className="desc">is simply dummy text of the printing and typesetting industry. Lorem Ipsum . </div>

        </div>
        <div className="deadline">Deadline in 21 Hrs</div>
        <div className="op">
        <div className="edit"><img src={editImg} alt="edit" /></div>
            <div className="delete"><img src={deleteImg} alt="delete" /></div>
        </div>
    </div>
</div> */}
</>
  )
}
