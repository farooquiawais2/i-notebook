import { useState } from 'react';
import NodeContext from './NodeContext';

const NoteState = ( props ) => {
  const initialNotes = 
  [
    {
      "_id": "64d7b5e9bead700311e27d82",
      "userId": "64d777187fb0865fd74a2f58",
      "title": "Namze",
      "description": "Isha namaz",
      "tag": "General",
      "date": "2023-08-12T16:40:09.797Z",
      "__v": 0
    },
    {
      "_id": "64d7b619bead700311e27d84",
      "userId": "64d777187fb0865fd74a2f58",
      "title": "Namze",
      "description": "Isha namaz",
      "tag": "Islam",
      "date": "2023-08-12T16:40:57.856Z",
      "__v": 0
    },
    {
      "_id": "64e1d1d242fd55d46b23f41a",
      "userId": "64d777187fb0865fd74a2f58",
      "title": "Namze",
      "description": "Isha namaz",
      "tag": "Islam",
      "date": "2023-08-20T08:41:54.858Z",
      "__v": 0
    }
  ];
  const [ notes, setNotes ] = useState( initialNotes );
  return (
    <NodeContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NodeContext.Provider>
  );
}


export default NoteState;