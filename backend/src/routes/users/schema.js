const mongoose = require('mongoose')
const v = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'please include a valid email'],
        unique: true,
        validate: {
            validator: async (value) => {
                if (!v.isEmail(value)) {
                    throw new Error("Email is invalid");
                }
            },
        },
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
},
    {
        timestamps: true

    }
)

const userModel = mongoose.model("user", userSchema)
module.exports = userModel