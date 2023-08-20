import React from 'react';

const NoteItem = ( props ) => {
  const { note } = props;
  return (
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src="../../assets/images/card-286x180.svg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}.</p>
        <a href="#" className="btn btn-primary">{note.tag}</a>
        <a href="#" className="btn btn-danger">Delete</a>
        <a href="#" className="btn btn-success">Update</a>
      </div>
    </div>
  );
}
 
export default NoteItem;
