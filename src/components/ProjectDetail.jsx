import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {

    const {id} = useParams();
    
    return (
        <div>
            <h1>este es el proyecto de Id nro{id} </h1>
            
        </div>
    );
};

export default ProjectDetail;