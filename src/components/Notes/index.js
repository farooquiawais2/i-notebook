import { useContext, useEffect } from 'react';
import NoteContext from '../../context/note/NodeContext';
import NoteItem from '../NoteItem';
const Notes = () => {
  const context = useContext( NoteContext );
  const { notes, getNotes, deleteNote, updateNote } = context;
  useEffect(  () => {
    getNotes()
    // eslint-disable-next-line
}, [notes])
  return (
    <div className="container">
      <h1>Your notes</h1>
      <div className="row">
        {notes?.map( ( i, index ) => {
          return <NoteItem note={i} key={index} deleteNote={deleteNote} updateNote={updateNote} />
        } )}
      </div>
    </div>
  );
}

export default Notes;