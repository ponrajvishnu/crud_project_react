import React,{useContext,useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {userContext} from '../ContextComponent/UserContextComponent';
import { useNavigate } from 'react-router-dom';

function AddUser() {

    let context = useContext(userContext);

    let navigate = useNavigate();

    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [batch,setBatch] = useState("");
    let [timing,setTimings] = useState("");
    
    let handleSubmit = () => {
        let newData = {name,email,mobile,batch,timing}
        let newArray = [...context.users]
        newArray.push(newData)
        context.setUsers(newArray)
        navigate('/list-user')
    }

  return <div className='container-fluid'>
    <h1>Add User</h1>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile no" onChange={(e) =>setMobile(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter batch" onChange={(e) =>setBatch(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Timing</Form.Label>
        <Form.Select defaultValue={0} onChange={(e)=>setTimings(e.target.value)}>
          <option value="0" disabled>Session Timings</option>
          <option value="10am to 12pm">10am to 12pm</option>
          <option value="11am to 2pm">11am to 2pm</option>
          <option value="12pm to 3pm">12pm to 3pm</option>
          <option value="1pm to 4pm">1pm to 4pm</option>
        </Form.Select>
    </Form.Group>
    <Button variant='primary' onClick={()=>handleSubmit()}>Submit</Button>
  </div>
}

export default AddUser
