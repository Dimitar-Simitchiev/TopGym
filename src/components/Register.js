import './Register.css';

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {useState,useEffect} from "react";

export default function Register() {  
 const url='https://topgymserver.onrender.com/jsonstore/users'
  const [username, usernamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [reppassword, reppasswordchange] = useState("");
  const[user,setUser]=useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(x=>Object.values(x))
    .then(result=>{
      
    setUser(result)
  

    })
    
    
  },[])

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    if (username === null || username === '') {
        isproceed = false;
        errormessage += ' Username';
    }
    if (password === null || password === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    if (reppassword === null || reppassword === '') {
        isproceed = false;
        errormessage += ' RepPassword';
    }
    if (reppassword!==password) {
       isproceed = false;
        errormessage += ' Wrong Password';
    }
    if(!isproceed){
      toast.warning(errormessage)
  }else{
      if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(username)){

      }else{
          isproceed = false;
          toast.warning('Please enter the valid email')
      }
  }
  return isproceed;

    
}
const handlesubmit = (e) => {
  e.preventDefault();
  let regobj = { username, password, reppassword};
 
  let isnotHere= true;
  for (let i = 0; i < user.length; i++) {
    if (user[i].username===username) {
        isnotHere=false
    } 
  }
 

  if (IsValidate()&&isnotHere===true) {
  
  fetch(url, {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(regobj)
  }).then((res) => {
      toast.success('Registered successfully.')
      navigate('/login');
  }).catch((err) => {
      toast.error('Failed :' + err.message);
  });
}

}



    return (
      <div id='register'>
      <form action="action_page.pht" id='form' onSubmit={handlesubmit}>
      <div className="container">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <label htmlFor="email"><b>Email</b></label>
      <input value={username} onChange={e => usernamechange(e.target.value)} className="form-control"></input>
      <label htmlFor="psw"><b>Password</b></label>
      <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
      <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
       <input value={reppassword} onChange={e => reppasswordchange(e.target.value)} type="password" className="form-control"></input>
      <button type="submit" className="registerbtn">Register</button>
      </div>
      <div className="container signin">
      <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
      </div>
      </form>
        </div>
           
      
    )
  
    
   
    }