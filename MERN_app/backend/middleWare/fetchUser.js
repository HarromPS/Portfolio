// for unique token generation for user
const jwt = require("jsonwebtoken");
// let JWT_SECRET = process.env.JWT_SECRET
let JWT_SECRET = "ABC123"

/*
Middleware Node.JS is a function that plays a vital role in the request-response lifecycle of Node.JS execution.

Using middleware functions, you can run any code and easily change response and request objects

You can end the request-response lifecycle if you want and run the following middleware function using the next function
*/
// Syntax: (request, response, "next" => 'async(req,res) function of the route')
const fetchUser=(request, response, next)=>{
    try{
        // get the user from jwt token & add ID to request object
        const token = request.header("auth-token");

        // if invalid token
        if(!token){
            response.status(401).send("Enter valid token");
        }

        // if valid token-> extract the data/payload from token
        const data = jwt.verify(token, JWT_SECRET);

        // generate a request from token as:
        request.USER = data.USER;

        // call next function i.e request response cycle
        next();
    }
    catch(err){
        response.status(401).send("Enter a valid token");
    }
}
module.exports = fetchUser;