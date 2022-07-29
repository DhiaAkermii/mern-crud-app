import { useEffect, useState } from "react";
import { fetchStudents, deleteStudent } from "../api/studentApi";
import React from "react";
import Table from "react-bootstrap/table";
import Button from "react-bootstrap/button";
import FormUpdateStudentComponent from "../Components/FormUpdateStudentComponent";
const baseURL = "http://localhost:8000/student/students";

export default function StudentComponent(prop) {
  const [students, setStudents] = useState([]);

  const handleDelete = (id) => {
    deleteStudent(id);
  };

  useEffect(() => {
    fetchStudents().then((response) => {
      setStudents(response.data);
    });

  }, []);

  if (!students) return <div>empty</div>;
  return (
    <Table hover >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.familyName}</td>
            <td>{student.address}</td>
            <td>
              <FormUpdateStudentComponent id={student._id}>  </FormUpdateStudentComponent>
            </td>
            <td>
              <Button
                className="btn btn-danger"
                onClick={(e) => handleDelete(student._id)}
              >
                Delete{" "}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
