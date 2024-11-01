import { Student } from "../model/student.model.js";




///controller for all Students details
export const getStudents = async (req,res) => {
    try {
        const students = await Student.find({});
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

///controller for a single Student details
export const getStudent = async (re,res) => {
    try {
        const {id} = req.params;
        const student = await Student.findById(id);
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

///controller to create a Student details
export const createStudent = async (req,res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

///controller to create a update a student credentials
export const updateStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);
        if (!student) {
            return res.status(404).json({message: "Student not found"})
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updateStudent);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

///controller to remove a Student
export const deleteStudent = async (req,res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id);
        if(!student){
            return res.status(404).json({message: "Student not found"})
        }
        res.status(200).json({message: "Student deleted successfully"})
    } catch (error) {
        
    }
}

