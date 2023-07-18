import { useEffect, useState } from "react";
import Diets from "./Diets"
const url='https://topgymserver.onrender.com/jsonstore/diets'
export default function Programs() {
  const[program,setPrograms]=useState([])
  
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(x=>Object.values(x))
    .then(result=>{
     setPrograms(result)
  

    })
    
  },[])
    
     
    
  
    return ( 
    <div className="App">
      
     {program.map(x=>< Diets program={x}/>)}
    
    </div>
    );
  }

