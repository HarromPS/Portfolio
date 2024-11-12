// Use 1st capital letter for Models
const mongoose = require("mongoose");
const { Schema } = mongoose;

// a user schema
const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,

            // this is a primary key: if user enters same email- error
            unique: true
        },

        password: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
    }
    }
    // {
            // specify the collection where we want to store the data
    //     collection: "inotebook"

    // }
);

// to use this schema in routes
// i.e module.exports = mongoose.model("collectionName", Schema);

const User =  mongoose.model('user', UserSchema);
User.createIndexes();       // creates index corresponding to email(primary key)

module.exports = User;

