import Button from "react-bootstrap/button";
import React, { useState } from "react";
import { addStudent } from "../api/studentApi";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function FormStudentComponent() {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [address, setAddress] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleSubmit = () => {
    const student = {
      studentId: studentId,
      name: name,
      familyName: familyName,
      address: address,
    };

    addStudent(student).then((response) => {
      console.log("done", response);
    });
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField size="lg" id="outlined-basic" label="Cin" onChange={e => setStudentId(e.target.value)}/>
        <TextField id="outlined-basic" label="Name"  onChange={e => setName(e.target.value)}/>
        <TextField id="outlined-basic" label="Last Name"  onChange={e => setFamilyName(e.target.value)}/>
        <TextField id="outlined-basic" label="Address" onChange={e => setAddress(e.target.value)}/>
       
          <Button variant="primary" type="button" onClick={handleSubmit}>
            Add student now
          </Button>
      
      </Box>
    </>
    
  );
}
