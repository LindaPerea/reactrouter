import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
    const [ password, setPassword ] = useState("");

    const goToAbout = () => {
        if (password === "manzana") {
            navigate("/about")
        }else {
            alert("password incorrecto")
        }
        // navigate("/about");
    }
    return (
        <div>
            <h1>Bienvenido a nuestra Empresa</h1>
            <Link to="/about"> Ir a About</Link>
            <button onClick={goToAbout}>Ir a about</button>            
            <div>
                <input 
                    type="password" 
                    placeholder='password'
                    value={password}
                    onChange={e=> setPassword(e.target.value)}                                        
                />            
                <button onClick={goToAbout}>Go to about</button>            
            </div>
        </div>
    );
};

export default Home;