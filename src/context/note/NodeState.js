import { useState } from 'react';
import NodeContext from './NodeContext';

const NoteState = ( props ) => {
  const info = {
    name: "Owais",
    class: "1st Standard"
  };
  const [ state, setState ] = useState( info );
  const update = () => { 
    setTimeout( () => {
      setState({
        "name": "Larry",
        "class": "10b"
      })
    }, 1000 );
  }
  return (
    <NodeContext.Provider value={{state, update}}>
      {props.children}
    </NodeContext.Provider>
  );
}


export default NoteState;