const express = require('express')
const userRouter = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('./schema')
const { auth } = require('../../middleware/authMiddleware')

//Register a user

userRouter.post("/register", async (req, res) => {

    const { name, email, password, image } = req.body;
    try {
        // see if user exists
        let user = await userModel.findOne({ email });
        if (user) {
            res.status(400).json({ msg: "user already exists" });
        } else {

            //hash password
            const salt = await bcrypt.genSalt(10)
            const harsedPassword = await bcrypt.hash(password, salt)

            // create user and replace user's password with the harsdpassword

            user = new userModel({
                name,
                email,
                image,
                password: harsedPassword
            });

            console.log('user', user)

            await user.save()

            if (user) {
                res.json({
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    token: generateToken(user._id)
                })
            }


        }
    } catch (error) {
        console.log(error.message)
    }
})


//login a user
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    //check for user email
    const user = await userModel.findOne({ email })
    // if the user is found, compare its password from req.body with the harsed password before returning the token
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            token: generateToken(user._id)

        })
    } else {
        res.status(400).send('invalid user data')
    }
})

//
// generate token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.jwt_secret, {
        expiresIn: '30d'
    })
}


// get logged in user
userRouter.get("/profile", auth, async (req, res) => {
    const user = await userModel.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});

module.exports = userRouter