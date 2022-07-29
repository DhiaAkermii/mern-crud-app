import axios from 'axios'

const BASE_URL = `http://localhost:8000/student`

export  const fetchStudents =  async () => {
         return axios.get(`${BASE_URL}/students`)  
}

export const getOneStudent = async (id) => {
  return await axios.get(`${BASE_URL}/student/${id}`)
}

export const addStudent = async (newStudent) => {
   console.log(newStudent)
   await axios.post(`${BASE_URL}/create-student/`,newStudent).then((response) =>{
      console.log(response.data)
      return window.location.reload(false);
   

   })
}

export const deleteStudent  = async (id) => {
   await axios.delete(`${BASE_URL}/delete/${id}`).then((response) =>{
      console.log(response.data)
      return window.location.reload(false);
   })
}


export const updateStudent  = async (id,student) => {
   await axios.put(`${BASE_URL}/update/${id}`,student).then((response) =>{
      console.log(response.data)
      return window.location.reload(false);
   })
}