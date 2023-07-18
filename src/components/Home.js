
import './Home.css';


export default function Home() {  
 let about=true;
 let contacts=true;
 

 
  function ButtonAbout() {
    if (about===true) {
    document.getElementById('aboutCtx').textContent = `Welcome to TopGym.com. The best site for fitness trainings and programs.In this site you can create a fitness program and share it to another people. Please login for more information!`;
    document.getElementById('contactCtx').textContent = ``;
    document.getElementById("background-image").style.height = "65vh";
    about=false;
    
    }else{
      document.getElementById("background-image").style.height = "75vh";
      document.getElementById('aboutCtx').textContent = ``;
      document.getElementById('contactCtx').textContent = ``;
      about=true;
    }
    

   }
   function ButtonContact() {
    if (contacts===true) {
    document.getElementById('aboutCtx').textContent = ``;
    document.getElementById('contactCtx').textContent = `If you want to contact us ,you can make in on topgym@gmail.com or to call 0881235214`;
    document.getElementById("background-image").style.height = "65vh";
     contacts=false;
    }else{
    document.getElementById("background-image").style.height = "75vh";
    document.getElementById('aboutCtx').textContent = ``;
    document.getElementById('contactCtx').textContent = ``;
    contacts=true;
   }
    
   }
 
      return (<>

        <div className="background-image" id='background-image'></div>
      
          <div className="aboutus-contacts">
            <button className="button-aboutus" onClick={ButtonAbout}>About us</button>
            <button className="button-contacts" onClick={ButtonContact}>Contacts</button>
            </div>
            <div id='paragraphs'>
            <p className='about' id='aboutCtx' align="center"></p>
            <p className='contact' id='contactCtx' align="center"></p>
            </div>
            
        </>
      )
    
      
     
    }