// Syntax of Routing :
const express = require("express");
const router = express.Router();
const Notes = require("../models_means_collections/Notes");
const fetchUser = require("../middleWare/fetchUser");
const { body, validationResult } = require("express-validator");

// ROUTE: 1
// Get Notes user using GET: '/api/notes/fetchAllNotes' Login Required

// using a middle ware to get the user
router.get("/fetchAllNotes", fetchUser, async (request, response) => {
    try {

        // get the user using the ID extracted using fetchUser middleWare function after login
        let userId = request.USER.id
        // console.log(userId);

        // A/c to schema ({user}) is a foreign key to User
        let userNotes = await Notes.find({ userId: userId });
        // console.log(userNotes);
        response.status(200).json(userNotes);
    }
    catch (err) {
        console.log(err);
        response.status(400).send("Some error occured");
    }
});

// ROUTE: 2
// Add Notes user using POST: '/api/notes/addANote' Login Required

// using a middle ware to get the user
router.post("/addANote", fetchUser, [
    // length of name field must be at least 3 chars
    body("title", "Title cannot be blank", "Please enter a title of at least 3 characters").exists().isLength({ min: 3 }),

    // is that a valid email
    body("description", "Please enter a description of at least 3 characters").isLength({ min: 3 }),
], async (request, response) => {
    // validate the notes
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array });
    }
    else {
        try {
            const { title, description, tag } = request.body;

            // create a new note
            const userNote = await Notes.create({

                // we need to add the foreign key also
                userId: request.USER.id,
                title: title,
                description: description,
                tag: tag
            });
            // console.log(request.body);
            response.status(200).json(userNote);
        }
        catch (err) {
            response.status(400).json({ error: "Some error occured" });
        }
    }
});

// ROUTE: 3
// Updating Existing Notes user using PUT: '/api/notes/updateNotes/:id' Login Required

// using a middle ware to get the user

// "/:id" is a parameter of Note Id send with the endpoint
router.put("/updateNotes/:id", fetchUser, async (request, response) => {
    // get the noteId from params
    let note_Id = request.params.id;

    // get the new updated data
    const { title, description, tag } = request.body;

    // Create a new note
    const newNote = {};

    // check if the fields are valid
    if (title) {
        newNote.title = title
    };
    if (description) {
        newNote.description = description
    };
    if (tag) {
        newNote.tag = tag
    };

    try {
        // get the Note from datbase using note id
        let note = await Notes.findById(note_Id);

        // check if the note having id note_Id exists
        if (!note) {
            return response.status(404).send("Not Found");
        }

        // check if the user of the note(who wants to update note) with id note_Id is same as the one
        // who send the request to update
        // get the USER id using the ID extracted using fetchUser middleWare function after login
        if (note.userId.toString() !== request.USER.id) {   // user through TOKEN
            return response.status(401).send("Not allowed");
        }

        // else update the note
        note = await Notes.findByIdAndUpdate(note_Id, { $set: newNote }, { new: true });
        response.status(200).json(note);
    }
    catch (err) {
        response.status(500).send("Internal Server error");
    }
});

// ROUTE: 4
// Deleting Existing Notes user using DELETE: '/api/notes/deletNote/:id' Login Required
// "/:id" is a parameter of Note Id send with the endpoint
router.delete("/deleteNote/:id", fetchUser, async (request, response) => {
    // get the noteId from params
    let note_Id = request.params.id;

    try {
        // get the Note from datbase using note id
        let note = await Notes.findById(note_Id);

        // check if the note having id note_Id exists
        if (!note) {
            return response.status(404).send("Note Not Found");
        }

        // check if the user of the note(who wants to Delete note) with id note_Id is same as the
        // who send the request to Delete

        // get the USER id using the ID extracted using fetchUser middleWare function after login
        if (note.userId.toString() !== request.USER.id) {   // user through TOKEN
            return response.status(401).send("Not allowed");
        }

        // else update the note
        note = await Notes.findByIdAndDelete(note_Id);
        response.status(200).send("Note Deleted");
    }
    catch (err) {
        response.status(500).send("Internal Server error");
    }
});

module.exports = router;