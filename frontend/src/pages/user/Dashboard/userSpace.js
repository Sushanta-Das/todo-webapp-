import React from 'react'
import dashboardIcon from"./../../../userSpace_icons/dashboard.png"
import logout from"./../../../userSpace_icons/Logout.png"
import plus from"./../../../userSpace_icons/Plus.png"
import store from"./../../../userSpace_icons/store.png"
import badgesStar from"./../../../userSpace_icons/badges-star.png"

import {Todoshead} from "./todosHead"
import { Header } from './Header'
import { Todos } from './todos'
import "./user.css"
import {  TodosPage} from "./TodosPage";
export const UserSpace = () => {
    return (
        <><div className="space"><div className="sideMenu"><div className="TodoList"><div className="icon"></div><h2>Todo List</h2></div>
        
        
        <div className="dashboard"><div className="icon"><img src={dashboardIcon} alt="Dashboard" /></div><div>Dashboard</div></div>
        <div className="createTask"><div className="icon"><img src={plus} alt="Create Task" /></div><div> Create Task</div></div>
        <div className="store"><div className="icon"><img src={store} alt="Store" /></div><div> Store</div></div>
        <div className="profileMenuOpt"><div className="icon"><img src={badgesStar} alt="Profile" /></div><div> Profile</div></div>
        <div className="logout"><div className="icon"><img src={logout} alt="Logout" /></div><div> Log Out</div></div>

        </div><div className="content"><Header/>
        <Todoshead/>
        <TodosPage/>

        </div></div></>
    )
}
