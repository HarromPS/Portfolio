// Connect to MongoDB

const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/inotebooks";
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}
// using async function
const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI,options);
        console.log("Connected to mongodb successfully");
    }
    catch (err) {
        console.log(err);
    }
}

// connectToMongo();

module.exports = connectToMongo;

// No longer accepts callbacks
// // OR callback function
// mongoose.connect(mongoURI, (err)=>{
//     if (err){
//         console.log("Failed to connect to Database");
//     }
//     else{
//         console.log("Successfully connected");
//     }
// });
// let db = mongoose.connection;

// db.on("error",
//     console.error.bind(console,"connection error: ")
// );

// db.once("open",()=>{
//     console.log("Connected");
// });