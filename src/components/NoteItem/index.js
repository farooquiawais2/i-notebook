import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = ( props ) => {
  const { note, deleteNote, updateNote } = props;
  return (
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src="../../assets/images/card-286x180.svg" alt={"Card cap"} />
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}.</p>
        <Link to="#" className="btn btn-primary">{note.tag}</Link>
        <button className="btn btn-danger" onClick={() => deleteNote(note._id)}>Delete</button>
        <Link className="btn btn-success" to={`/update-note/${note._id}`}>Update</Link>
      </div>
    </div>
  );
}
 
export default NoteItem;
