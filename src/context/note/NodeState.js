import { useEffect, useState } from 'react';
import NodeContext from './NodeContext';


const NoteState = ( props ) => {
  const host = "http://localhost:5000"
  const initialNotes = [];
  const [ notes, setNotes ] = useState( initialNotes );

  // Get all the notes
  const getNotes = async () => {
    // API Call 
    const url = `${ host }/api/notes/fetch-all-notes`;
    const response = await fetch( url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc3NzE4N2ZiMDg2NWZkNzRhMmY1OCIsImlhdCI6MTY5MjU0ODczNH0.V2vkFMJE3WFthkGm8o438v6wXJ7u_2-WKr5j2npb0UE"
      }
    } );
    const json = await response.json()
    setNotes( json )
  }

  // Add a Note
  const addNote = async ( note ) => {
    console.log('ddd');
    const url = `${ host }/api/notes/add-notes`;
    const response = await fetch( url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc3NzE4N2ZiMDg2NWZkNzRhMmY1OCIsImlhdCI6MTY5MjU0ODczNH0.V2vkFMJE3WFthkGm8o438v6wXJ7u_2-WKr5j2npb0UE"
      },
      body: JSON.stringify( note)
    } );
    const json = await response.json()

    notes.push( json );
    setNotes( notes );
  }

  // Delete note api
  const deleteNote = async ( id ) => {
    
    const url = `${ host }/api/notes/delete-notes/${ id }`;
    const response = await fetch( url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc3NzE4N2ZiMDg2NWZkNzRhMmY1OCIsImlhdCI6MTY5MjU0ODczNH0.V2vkFMJE3WFthkGm8o438v6wXJ7u_2-WKr5j2npb0UE"
      }
    } );
    const updatedList = await getNotes()

    setNotes( updatedList );
  }

  // Edit note api
  const updateNote = async ( id, note ) => {
    const url = `${ host }/api/notes/update-notes/${ id }`;
    const response = await fetch( url, {
      method: 'PUT',
      headers: {
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDc3NzE4N2ZiMDg2NWZkNzRhMmY1OCIsImlhdCI6MTY5MjU0ODczNH0.V2vkFMJE3WFthkGm8o438v6wXJ7u_2-WKr5j2npb0UE"
      },
      body: JSON.stringify( note)
    } );
    const json = await response.json()

    const updatedList = await getNotes()

    setNotes( updatedList );
  
  }


  return (
    <NodeContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </NodeContext.Provider>
  );
}


export default NoteState;