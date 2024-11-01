import express from "express";
import { createStudent, deleteStudent, getStudent, getStudents, updateStudent } from './../controllers/student.controller.js';
export const router = express.Router();

///route to get all getStudents
router.get('/students', getStudents);
///route to get a single Student
router.get('/student/:id', getStudent);
///route to add Students
router.post('/students', createStudent);
///route to upddate a product
router.put('/student/:id', updateStudent);
////route to delete a Student
router.delete('/student/:id', deleteStudent)
