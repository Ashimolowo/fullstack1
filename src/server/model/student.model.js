import mongoose from "mongoose";

const StudentSchema = mongoose.Schema(
    {
    fullname:{
        type: String,
        required: [true, "please enter your fullname, surname first!"],
    },
    department:{
        type: String,
        require: [true, "please, state your department!"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cgpa: 
    {
        type: Number,
        required: true
    }

});

export const Student = mongoose.model("Student", StudentSchema)