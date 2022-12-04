import React,{useContext} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import {userContext} from '../ContextComponent/UserContextComponent';

function ListUser() {
    
    let context = useContext(userContext);

    let navigate = useNavigate();

    let handleDelete = (i) => {
        let newArray = [...context.users] //deep copy the main array
        newArray.splice(i,1) // delete the element in the new array
        context.setUsers(newArray) // update the new array to the state function
    }

  return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <div className="container-fluid">
            <h1>Users List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Batch</th>
                        <th>Timing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.users.map((e,i) => {
                            return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.batch}</td>
                                <td>{e.timing}</td>
                                <td>
                                    <Button variant='warning' onClick={()=>navigate(`/user-profile/${i}`)}><i className="fas fa-eye"></i>View</Button> &nbsp;
                                    <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}><i className="fas fa-pen-to-square"></i>Edit</Button> &nbsp;
                                    <Button variant='danger' onClick={() => handleDelete(i)} ><i className="fas fa-trash"></i>Delete</Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    </div>        
  </div>
}

export default ListUser
