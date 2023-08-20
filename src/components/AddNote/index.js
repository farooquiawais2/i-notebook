import { useContext, useState } from 'react';
import NoteContext from '../../context/note/NodeContext';

const AddNoteForm = () => {
  
  const context = useContext( NoteContext );
  const { addNote } = context;
  const [ note, setNote ] = useState( { title: "", description: "", tag: "" } );
  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}
  const handleClick = ( e ) => {
    e.preventDefault();
    addNote( note );
    setNote({title: "", description: "", tag: ""})
}


  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} required />
        </div>

        <button  className="btn btn-primary" type='submit' onClick={handleClick}>Add Note</button>
      </form>
    </div>
  );
}


export default AddNoteForm