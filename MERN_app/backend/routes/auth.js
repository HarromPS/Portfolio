// so when '/api/auth' endpoint is hit
// we can do GET/POST/PUT/DELETE, etc requests usign Router of express from here './routes/auth.js'

// Syntax:
const express = require("express");
const router = express.Router();

// for password encryption
const bcrypt = require("bcryptjs");

// for unique token generation for user
const jwt = require("jsonwebtoken");
let JWT_SECRET = "ABC123"

// npm install express-validator for validation
const { body, validationResult } = require("express-validator");

// import User model
const User = require("../models_means_collections/Users");

// ROUTE 1:

// Used to create user(which does not require Authentication) using user
// POST:'/api/auth/createuser' request & handled using post router:

// a validator array
router.post("/createuser", [
    // length of name field must be at least 3 chars
    body("name", "Please enter name at least 3 characters").isLength({ min: 3 }),

    // is that a valid email
    body("email", "Please enter valid email").isEmail(),

    // password length must be at least 5 characters
    body("password", "Please enter password at least 5 characters").isLength({ min: 5 })

], async (request, response) => {

    // checking if the request passes the validations
    const errors = validationResult(request);

    // if returns empty, means valid else not
    if (!errors.isEmpty()) {
        // bad request and error array
        return response.status(400).json({
            // return the error array as response to the request(client)
            errors: errors.array()
        });
    }

    else {

        try {
            // Method 1:
            // Creating a user using await: returns a promise
            // let user1 = await User.create({
            //     name: request.body.name,
            //     email: request.body.email,
            //     password: request.body.password
            // });
            // user1.then((usr) => {
            //     response.status(200).json(usr);
            // }).catch((err) => {
            //     if(err.code === 11000){
            //         // duplicate user
            //         return response.status(400).json({
            //             error: "Email already exists"
            //         });
            //     }
            //     else{
            //         console.log(err);
            //         return response.status(500).json({
            //             error: "Server error"
            //         });
            //     }
            // });

            // Method 2: directly add all users
            // console.log(request.body);
            // // Adding a user to database
            // const user1 = User(request.body);
            // user1.save();
            // response.json({"status" : 200});

            let result = false;
            // Method 3: function is async as await is used to resolve a promise
            let usr = await User.findOne({
                email: request.body.email
            });
            // console.log(usr);

            // Password Hashing
            const salt = await bcrypt.genSalt(10);
            const secretPassword = await bcrypt.hash(request.body.password, salt);

            // if found a user
            if (usr) {
                return response.status(400).json({
                    success: result,
                    error: "Email already exist"
                });
            }

            usr = await User.create({
                name: request.body.name,
                email: request.body.email,
                password: secretPassword
            });

            // Instead of returning user we return token after user creation
            let data = {
                USER: {
                    id: usr.id
                }
            }

            // sign the token by admin
            const authToken = jwt.sign(data, JWT_SECRET);

            result = true;
            // sending authToken
            return response.status(200).json({
                success: result,
                authToken: authToken
            });
            // return response.status(200).json({
            //     usr
            // });
        }
        catch (err) {
            // console.log("Some error occured");
            response.status(500).send("Some error occured");
        }
    }
});

/*
e.g POST : [options]
    header={
        "content-type": "application/json"
    },
    body = {
        "name" : "Hello",
        "email" : "hello@mail.com",
        "passwd" : 12345
    }

    Auth will get this as a Request from the client (after express.json() parsed into JSON)
    as request.body

    and response will be
    {
        'status' : 200
    }

    we can send the request as it is as well lol
    <div className=""></div>
*/

// ROUTE 2:

// Authenticate a user using POST: '/api/auth/login' No login required
router.post("/login", [
    body('email', "Enter a valid email").isEmail(),
    // check if exist (blank or not)
    body("password", "Password cannot be blank").exists()
], async (request, response) => {
    let result = false;

    // if error found return bad request & error
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({
            errors: errors.array()
        });
    }
    else {

        // get the email & password using destucturing
        const { email, password } = request.body;

        try {
            let usr = await User.findOne({ email: email });

            // if user not found -> no user exist -> no login
            if (!usr) {
                return response.status(400).json({
                    success: result,
                    error: "Invalid Credentials"
                });
            }

            // comparing passwords
            let passwordCompare = await bcrypt.compare(password, usr.password);

            // if password do not match
            if (!passwordCompare) {
                return response.status(400).json({
                    success: result,
                    error: "Invalid Credentials"
                });
            }

            // sign the token
            let payload = {
                USER: {
                    id: usr.id
                }
            }

            // sign the token by admin
            const authToken = jwt.sign(payload, JWT_SECRET);

            result = true;
            // sending authToken
            return response.status(200).json({
                success : result,
                authToken: authToken
            });
        }
        catch (err) {
            console.log(err);
            response.status(500).send("Internal server error");
        }
    }
});

const fetchUser = require("../middleWare/fetchUser");
// ROUTE 3: POST Login required '/api/auth/getUser'
router.post('/getUser', fetchUser, async (request, response) => {
    // get the user from the id extracted using middleware function
    try {
        let userId = request.USER.id;
        const usr = await User.findById(userId).select("-password");     // select without password

        // console.log(usr);
        response.status(200).send(usr);
    }
    catch (err) {
        // console.log(err);
        response.status(500).send("Internal server error");
    }
});

module.exports = router;