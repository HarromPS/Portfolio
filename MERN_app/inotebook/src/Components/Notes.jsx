import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from "../Context/Notes/NoteContext";
import { NoteItem } from "./NoteItem";
import { AddNote } from './AddNote';
import { useNavigate } from 'react-router';

export const Notes = () => {
    let navigate = useNavigate();

    // get the state variables using useContext from note context
    const context = useContext(NoteContext);

    // get the variables & update function
    const { notes, getAllNotes, editNote } = context;
    useEffect(() => {

        // if there is auth-token in localStorage
        // get all the notes of that user
        if(localStorage.getItem("auth-token")){
            getAllNotes();
        }
        else{
            // redirect the user to login page
            navigate("/login");

        }
        // eslint-disable-next-line
    }, []);

    // set temporary variables for the component
    const [notesTemp, setNotesTemp] = useState({
        title: "",
        description: "",
        tag: ""
    });

    const ref = useRef();
    const refClose = useRef();
    const updateNote = (notes) => {
        ref.current.click();

        // note which is clicked
        setNotesTemp(notes);
    }

    const handleClick = () => {
        editNote(notesTemp._id, notesTemp);
        refClose.current.click();

    }
    const onChange = (ele) => {
        //
        setNotesTemp({
            // spread syntax
            ...notesTemp,

            // whoever is changing set its name to its value
            [ele.target.name]: ele.target.value
        });
    }

    return (
        <>
            <AddNote />

            {/* Button trigger modal */}
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" />

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="my-4 modal-body">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" name="title" id="title" aria-describedby="emailHelp" onChange={onChange} value={notesTemp.title} />
                            </div>
                            <div className="mb-3 modal-body">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" name="description" id="description" onChange={onChange} value={notesTemp.description} />
                            </div>
                            <div className="mb-3 modal-body">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" className="form-control" name="tag" id="tag" onChange={onChange} value={notesTemp.tag} />
                            </div>
                        </form>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h2 className='my-3 '>Your Notes</h2>
                {notes.map((N) => {
                    return (
                        <NoteItem key={N._id} notes={N} update={updateNote} />
                    );
                })}
            </div>
        </>
    )
}
