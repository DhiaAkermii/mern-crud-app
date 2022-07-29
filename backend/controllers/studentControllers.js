import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
  const { studentId, name, familyName, address } = req.body;

  try {
    const student = await Student.create({
        studentId: studentId,
        name: name,
        familyName: familyName,
        address: address,
      })
    
      res.status(200).json(student);
  }catch (e) {
    res.status(401).json(e)
  }
  
};

export const getStudents = async (req, res) => {
  try {
    const Students = await Student.find();
    res.status(200).json(Students);
  } catch (e) {
    res.status(404).json(e);
  }
};


export const getStudentById = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try{
        const student = await Student.findById(id)
        res.json(student);
        
    }catch(e){
        console.log("ops")
        res.status(404).json(e);
    }
}

export const deleteStudent = async (req, res) => {
  const id = req.params.id
  try{
    const student = await Student.findByIdAndRemove(id)
    res.status(200).json(student);
    console.log(student)
    console.log("here")
    }catch(e){
        console.log("ops")
        res.status(404).json(e);
    }
}

export const updateStudent = async (req, res) => { 
  const {name, familyName, address } = req.body;
  const id = req.params.id
  try{
    const student = await Student.findByIdAndUpdate(id, { $set: 
      { 
        name: name,
        familyName: familyName,
        address: address,
      }
    })
    res.status(200).json(student);
    console.log(student)

    }catch(e){
        console.log(e)
        res.status(404).json(e);
    }
}


