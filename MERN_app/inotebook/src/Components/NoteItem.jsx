import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext';

export const NoteItem = (props) => {
    const { notes, update} = props;

    const context = useContext(NoteContext);

    const {deleteANote} = context;
    return (
        <div className='col-md-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title">Title: {notes.title}</h5>
                    <p className="card-text">Description: {notes.description}</p>
                    <p className="card-text">Tag: {notes.tag}</p>
                    <i className="fa-regular fa-pen-to-square mx-3" onClick={()=>{update(notes)}}></i>
                    <i className="fa-regular fa-trash-can mx-3" onClick={()=>{deleteANote(notes._id)}}></i>
                </div>
            </div>
        </div>
    );
}
