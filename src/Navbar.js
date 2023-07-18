
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {  useNavigate, } from "react-router-dom";
import {useState,useEffect} from "react";







export default function Navbar() {
  const navigate=useNavigate();
  const[user,setUser]=useState([])
  

 useEffect(()=>{
   fetch('https://topgymserver.onrender.com/jsonstore/logetuser')
   .then(res=>res.json())
   .then(x=>Object.values(x))
   .then(result=>{
   setUser(result)
   if (user.length!==0) {
    return <p1 className="welcome">
      {"Welcome !: "+user[0].email}
    </p1>
     
  }
   })
 },[])


 



 
 const Logout = (e) => {
    e.preventDefault()
    document.getElementById("login").style.display = "flex";
    document.getElementById("register").style.display = "flex";
     document.getElementById("menu").style.display = "none";
   
    fetch('https://topgymserver.onrender.com/jsonstore/logetuser', {
  method: 'DELETE',
})
.then(res => res.text()) 


 
document.getElementById("top").textContent=`TOPGYM`;
   navigate('/')
  
   
 }
  
   
  
   
  
    return (
   
      <nav className="nav">
        
       <Link to="/" className="site-title" id='top' >
      
       TOPGYM: 
      </Link>
      <ul>
       <li className='login' id='login'>
       <CustomLink to="/login" className="site-title">Login</CustomLink>
       </li>
       <li className='login' id='register'>
       <CustomLink to="/register" className="site-title" >Register</CustomLink>
       </li>
       <div id="menu" div className="dropdown">
       <button  id="menu-btn" className="dropbtn">MENU
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <CustomLink  to="/calculator">Calculator</CustomLink>
    <CustomLink  to="/programs">Programs</CustomLink>
    <CustomLink  to="/createprogram">Create</CustomLink>
    <CustomLink to="/" onClick={Logout} >Logout</CustomLink>
    </div>
    </div>
     </ul>
    </nav>
    )
     
     function CustomLink({ to, children, ...props }) {
      const resolvedPath = useResolvedPath(to)
      const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
      return (
        <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
      )
    }
   
}