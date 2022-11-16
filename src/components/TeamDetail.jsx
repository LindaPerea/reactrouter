import React from 'react';
import { useParams } from 'react-router-dom';

const TeamDetail = () => {

    const { name } = useParams();

    return (
        <div>
            <h1>Hola Soy {name} </h1>
            
        </div>
    );
};

export default TeamDetail;

