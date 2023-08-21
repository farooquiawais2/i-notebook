import { useContext, useEffect, useState } from 'react';
import NoteContext from '../../context/note/NodeContext';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const UpdateNoteForm = () => {
  
  const context = useContext( NoteContext );
  const { id } = useParams(); 
  const { addNote, notes, updateNote } = context;
  const [ note, setNote ] = useState( { title: "", description: "", tag: "" } );
  const navigate = useNavigate();
  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
}
  const handleClick = ( e ) => {
    e.preventDefault();
    updateNote( id, note );
    setNote({title: "", description: "", tag: ""})
    navigate(-1);
}

  useEffect( () => {
    setNote( notes.find( i => i._id == id ) );
}, [id]);
  return (
    <div className="container my-3">
      <h2>Update Note</h2>
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
          <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
        </div>

        <button  className="btn btn-primary" type='submit' onClick={handleClick}>Update Note</button>
      </form>
    </div>
  );
}


export default UpdateNoteForm