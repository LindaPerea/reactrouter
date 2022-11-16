import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h1>acerca de</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum nemo repudiandae eligendi dignissimos non optio corporis iste magnam sequi expedita eum voluptatem labore omnis nihil voluptatibus animi, debitis hic consectetur.

            </p>
            <button onClick={() => navigate(-1)}>Ir atras</button>
            <Link to=""></Link>
            
        </div>
        
    );
};

export default About;