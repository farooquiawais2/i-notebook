import React, { useContext, useEffect } from 'react'
import nodeContext from '../../context/note/NodeContext'

const About = () => { 
    const a = useContext( nodeContext );
    useEffect( () => {
        a.update();
    }, [a] );
    
    return (
        <div>
            This is About { a?.state?.name}, It standard is { a?.state?.class}.
        </div>
    )
}

export default About