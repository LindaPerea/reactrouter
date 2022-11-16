import React from 'react';
import { useNavigate } from 'react-router-dom';

const RutaPrincipal = () => {
    
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about");
    }
    return (
        <div>
            <h1>Ruta Principal</h1>
            <input type="text" placeholder='ingrese manzana'/>
            <button onClick={() => navigate (-1)}>Ir Atras</button>
            
        </div>
    );
};



export default RutaPrincipal;
