import express from "express";
import {
    createStudent,
    getStudents,
    getStudentById,
    deleteStudent,
    updateStudent

} from '../controllers/studentControllers.js'

const router = express.Router();


router.post("/create-student", createStudent);
router.get("/students",getStudents)
router.get("/student/:id",getStudentById)
router.delete("/delete/:id",deleteStudent)
router.put("/update/:id",updateStudent)


export default router;