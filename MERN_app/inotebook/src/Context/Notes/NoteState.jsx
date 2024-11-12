// Get the Note context of Note state
// & provide the states to all children under its provider

// Creating State Provider
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    // const s1 = {
    //     "name" : "Hello",
    //     "class" : "3"
    // }

    // update function
    //   const [state, setState] = useState(s1);

    //   const update = () => {
    //     setTimeout(() => {
    //       setState({
    //         "name": "World",
    //         "class": "4"
    //       }, 5000);
    //     });
    //   }

    let host = "http://localhost:3011";
    let notesHardcoded = [];

    const [notes, setNotes] = useState(notesHardcoded);

    // fetch all the notes
    // TODO API CALL
    const getAllNotes = async (noteTemp) => {
        // adding note to backend
        let url = `${host}/api/notes/fetchAllNotes`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSIjp7ImlkIjoiNjUwZjFhODE4ZWYzYTNjMzc2YWYxODM1In0sImlhdCI6MTY5NTQ4ODY0MX0.cJt8KjBY2ZFNl2GDFxf0AtuOpwc0MymMMB2YiUnzo1Y"
                "auth-token": localStorage.getItem("auth-token")
            },
        });
        const json = await response.json();
        // console.log(json);
        setNotes(json);
        return json;

    }
    // Add a note
    // TODO API CALL
    const addANote = async (noteTemp) => {
        // adding note to backend
        let url = `${host}/api/notes/addANote`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSIjp7ImlkIjoiNjUwZjFhODE4ZWYzYTNjMzc2YWYxODM1In0sImlhdCI6MTY5NTQ4ODY0MX0.cJt8KjBY2ZFNl2GDFxf0AtuOpwc0MymMMB2YiUnzo1Y"
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({
                "title": noteTemp.title,
                "description": noteTemp.description,
                "tag": noteTemp.tag
            })
        });
        const json = await response.json();
        // console.log(json);

        // logic to add a note to client
        let { _id, title, description, tag, date } = json;

        const newNote = {
            "userId": "650f1a818ef3a3c376af1835",
            "title": title,
            "description": description,
            "tag": tag,
            "_id": _id,
            "date": date,
            "__v": 0
        }

        setNotes(
            notes.concat(newNote)
        )
    }

    // Delete a note
    // TODO API CALL
    const deleteANote = async (id) => {
        // deleting note from backend
        let url = `${host}/api/notes/deleteNote/${id}`;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSIjp7ImlkIjoiNjUwZjFhODE4ZWYzYTNjMzc2YWYxODM1In0sImlhdCI6MTY5NTQ4ODY0MX0.cJt8KjBY2ZFNl2GDFxf0AtuOpwc0MymMMB2YiUnzo1Y"
                "auth-token": localStorage.getItem("auth-token")
            },
        });
        const json = await getAllNotes(id);
        console.log(response);

        // logc to delete a note
        // const newNote = notes.filter((notes) => {
        //     return (notes._id !== id);
        // });
        setNotes(json);

    }

    // Edit a note
    const editNote = async (id, thatNote) => {

        // fetch api to edit in backend
        let url = `${host}/api/notes/updateNotes/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSIjp7ImlkIjoiNjUwZjFhODE4ZWYzYTNjMzc2YWYxODM1In0sImlhdCI6MTY5NTQ4ODY0MX0.cJt8KjBY2ZFNl2GDFxf0AtuOpwc0MymMMB2YiUnzo1Y"
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({ title: thatNote.title, description: thatNote.description, tag: thatNote.tag })
        });
        const json = await response.json();
        console.log(json);

        let NewNotes = JSON.parse(JSON.stringify(notes));
        // logic to edit in the client
        let { title, description, tag } = thatNote;
        for (let i = 0; i < NewNotes.length; i++) {
            const element = NewNotes[i];
            if (element._id === id) {
                NewNotes[i].title = title;
                NewNotes[i].description = description;
                NewNotes[i].tag = tag;
                break;
            }
        }

        setNotes(NewNotes);
    }

    return (
        <NoteContext.Provider value={{ notes: notes, setNotes: setNotes, addANote: addANote, deleteANote: deleteANote, editNote: editNote, getAllNotes: getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
        // <NoteContext.Provider value={{state:state, update:update}}>
        //     {props.children}
        // </NoteContext.Provider>
    );
}

export default NoteState;