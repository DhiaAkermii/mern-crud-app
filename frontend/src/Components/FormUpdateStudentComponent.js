import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect,useState } from "react";
import { updateStudent } from "../api/studentApi";
import TextField from "@mui/material/TextField";
import { getOneStudent } from "../api/studentApi";


export default function FormUpdateStudentComponent(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [address, setAddress] = useState("");
  const [studentId, setStudentId] = useState("");
  const [oneStudent,setOneStudent] = useState("");

  useEffect(() => {
    getOneStudent(props.id).then((response) => {
      setOneStudent(response.data)
      console.log("data====>",response.data)
    })
  }, []);

  const handleSubmit = () => {
    
    const student = {
      name: name,
      familyName: familyName,
      address: address,
    };

    updateStudent(props.id,student).then((response) => {
      console.log("done", response);
    });
  };

  return (
    <>
   
   <>
      <Button variant="primary" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update student </Modal.Title>
        </Modal.Header>
        <Modal.Body>    
          <TextField id="outlined-basic" fullWidth placeholder={oneStudent.name}   onChange={e => setName(e.target.value)}/> <br></br><br></br>
          <TextField id="outlined-basic" fullWidth placeholder={oneStudent.familyName}  onChange={e => setFamilyName(e.target.value)}/><br></br><br></br>
          <TextField id="outlined-basic" fullWidth placeholder={oneStudent.address} onChange={e => setAddress(e.target.value)}/><br></br><br></br>
          {/* <Button variant="primary" type="button">
            Update
          </Button> */}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
    
      
    
    </>
  );
}
