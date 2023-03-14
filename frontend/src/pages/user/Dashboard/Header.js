import React from 'react'
import searchIcon from "../../../userSpace_icons/Search.png"
import bell from "../../../userSpace_icons/bell.png"
import profile from "../../../userSpace_icons/profile.png"
export const Header = () => {
  const style={
    head:{
        display:"flex",
        padding:"10px 10px",
        allignItems:"center",
        justifyContent:"space-between"
    },
    search:
{
    width: "260px",
    border: "1px solid #555",
    display: "block",
    padding: "9px 4px 9px 40px",
    background: `rgba(217, 217, 217, 0.5) url(${searchIcon}) no-repeat  2% center`
},
notification:{
    position:"relative",
    borderRadius:"50%",
    backgroundColor:"white",
outline:"none",
border:"none",
width: "40px",
height: "40px",
display:"flex",
alignItems:"center",
justifyContent:"center"
},
bell:{position:"absolute",
top:"-10px",
right:"-10px",
height:"100px",width:"100px"},
rightIcons:
{
  display:"flex",
  padding:"10px 10px",
  gap:"7px",
  marginRight:"35px"

}
} 
  return (
    <div style={style.head} className="head"><div className="searchBox"><input style={style.search} type="search" placeholder="Search for Task..."/></div>
    <div className="rightIcons" style={style.rightIcons}>
      <div className="notification" style={style.notification}><img src={bell} alt="Notification"  /></div>
    <div className="points"style={style.notification}>30</div>
    <div className="profileImage" style={style.notification} ><img src={profile} alt="Profile Picture"  /></div>
    </div>
  </div>
  )
}
