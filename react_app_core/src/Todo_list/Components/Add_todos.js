// import React from 'react'
import React, { useState } from 'react';

export const Add_todos = (props) => {
    // functions to change the addnotes
    const [title, setTile] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(title=="" || desc==""){
            alert("Title or Description cannot be blank!");
        }
        else{
            props.addtodo(title, desc);

            // empty the fields when user click Add note
            setDesc("");
            setTile("");

        }
    }
    return (
        <div className='container my-3'>

            {/* submit is passed when form is submitted */}
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTile(e.target.value)} className="form-control" id="emai-text" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                    <input type="text" onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}
