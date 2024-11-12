// Use 1st capital letter for Models
const mongoose = require("mongoose");
const { Schema } = mongoose;

// a user schema
const NotesSchema = new Schema({

    // connecting a foreign key from User collection
    // Syntax:
    /*
    foreign key(fk)
    fk_name : {
        type : mongoose.Schema.Types.ObjectId,       // object id is pk in user collection
        ref : 'collections_name'
    }
    */

    // foreign key(fk)
    userId : {
        type: mongoose.Schema.Types.ObjectId,       // object id is pk in user collection
        ref: 'user',
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// to use this schema in routes
// i.e module.exports = mongoose.model("modelName", Schema);

module.exports = mongoose.model("notes", NotesSchema);

