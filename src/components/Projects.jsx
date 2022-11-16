import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

const Projects = () => {

    const [ id, setId ] = useState("")
    const navigate = useParams();

    const goToId = () => {
        navigate("/projects/id")
        // alert("ingresando id") 
        //llego hasta aqui le desactivo la linea 10 y no se ejecuta
    }

    return (
        <div>
            <h1>Protafolio</h1>
            <Link to="/home" >ir a Home </Link>
            <input 
                type="number" 
                placeholder='ingrese id'    
                value={id}            
                onChange={ e => setId(e.target.value)}
                
            />
            <button onClick={() => goToId()}> ir..
                
            </button>
            
        </div>
    );
};

export default Projects;
