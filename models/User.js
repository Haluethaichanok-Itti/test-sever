/* Model === class == object Generator */
const mongoose = require("mongoose");
/* Define Schema */
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    fullname:{
        type: String,
        required: true,
    },
    birthdate:{
        type: Date,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    gender:{
        type: String,
        required: true,
    },
    picture:{
        type: String,
        required: true,
    },
    height:{
        type: Number,
        required: true,
    },
    weight:{
        type: Number,
        required: true,
    },
    coverImage:{
        type: String,
        required: true,
    },
    quote:{
        type: String,
        required: true,
    },
    emoji:{
        type: String,
        required: true,
    },

});
/* Create Model */
const UserModel = mongoose.model("User", UserSchema);

/* Export Model for another file use */

module.exports = UserModel;