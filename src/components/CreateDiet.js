import { useState } from "react";
import { useNavigate, } from "react-router-dom";
import './CreateDiet.css'

const AddEmployee = () => {
    // state variables
    const randomId = function(length = 6) {
        return Math.random().toString(36).substring(2, length+2);
      };
    const _id =randomId();
    let username=document.getElementById("top").textContent.slice(9);
    const [type, typechange] = useState('');
    const [description, descriptionchange] = useState('');
    const [img, imgchange] = useState('');
    const [name, namechange] = useState(username);

    const navigate=useNavigate();

    // functions
    const handlesubmit = (e) => {
        e.preventDefault();
   
        const empobj = {type, description, name,img ,_id};

        console.log(empobj);

        fetch("https://topgymserver.onrender.com/jsonstore/diets", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empobj)
        }).then(() => {
            console.log(empobj);
            navigate('/programs');
        }).catch((err) => {
            console.log(err.message);
        })
    }



    return (
        <div id="creatediets">

            <form className="container" onSubmit={handlesubmit}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                    
                        <div className="form-group">
                            <label> Fitness Program</label>
                            <input value={type} onChange={e => typechange(e.target.value)} className="form-control" required></input>
                            {type.length === 0 && <span className="errormessage"> Please enter the type of the fitness program!</span>}
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input value={description} onChange={e => descriptionchange(e.target.value)} className="form-control" required></input>
                            {description.length === 0 && <span className="errormessage">Please enter the description of the program</span>}
                        </div>
                        <div className="form-group">
                            <label>Picture of the instructor </label>
                            <input value={img} onChange={e => imgchange(e.target.value)} className="form-control" ></input>

                        </div>
                        <div className="form-group">
                            <br></br>
                            <button className="create" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default AddEmployee;