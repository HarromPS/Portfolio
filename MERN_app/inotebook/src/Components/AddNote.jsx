import React, { useContext, useState } from 'react'
import NoteContext from "../Context/Notes/NoteContext";

export const AddNote = (props) => {
    // get the state variables using useContext from note context
    const context = useContext(NoteContext);

    // get the variables & update function of the State of the App
    const { addANote } = context;

    // set temporary variables for the component
    const [notesTemp, setNotesTemp] = useState({
        title: "",
        description: "",
        tag: ""
    })
    // handle function after user add the note
    const handleOnClick = (ele) => {
        // to prevent the default behaviour of the form submitting
        ele.preventDefault();
        // console.log(notesTemp);
        addANote(notesTemp);
        let inputs = document.getElementsByClassName("form-control");
        Array.from(inputs).forEach((inputs)=>{
            inputs.value = "";
        });
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
            <div className="container my-3">
                <h2>Add a Note</h2>

                <form>
                    <div className="my-4">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="title" id="title" aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" id="description" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" name="tag" id="tag" onChange={onChange} />
                    </div>
                    <button disabled={notesTemp.title.length<3 || notesTemp.description.length<3?true:false} type="submit" className="btn btn-primary" onClick={handleOnClick}>Add</button>
                </form>
            </div>
        </>
    );
}
