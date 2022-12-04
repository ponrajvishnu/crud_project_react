import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {userContext} from '../ContextComponent/UserContextComponent';
import { useNavigate } from 'react-router-dom';

function EditUser() {
    let params = useParams();
    
    let context = useContext(userContext);

    //useEffect with empty dependency array
    useEffect(() => {
        if(params.id){
          setName(context.users[params.id].name)
          setEmail(context.users[params.id].email)
          setMobile(context.users[params.id].mobile)
          setBatch(context.users[params.id].batch)
          setTimings(context.users[params.id].timing)
        }
    },[])

    let navigate = useNavigate();

    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [batch,setBatch] = useState("");
    let [timing,setTimings] = useState("");
    
    let handleSubmit = () => {
        let newData = {name,email,mobile,batch,timing}
        let newArray = [...context.users]
        newArray.splice(params.id,1,newData)  // remove the data using index and add the new value using index
        context.setUsers(newArray)
        navigate('/list-user')
    }

  return <div className='container-fluid'>
    <h1>Edit User {params.id}</h1>
    <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile no" value={mobile} onChange={(e) =>setMobile(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter batch" value={batch} onChange={(e) =>setBatch(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Timing</Form.Label>
        <Form.Select value={timing} onChange={(e)=>setTimings(e.target.value)}>
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

export default EditUser
