import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import {userContext} from '../ContextComponent/UserContextComponent';

function UserProfile() {
    let params = useParams();

    let context = useContext(userContext);

    return <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
        <div className="container-fluid">
            <h1>Profile - {context.users[params.id].name}</h1>
            <p>Name    : {context.users[params.id].name}</p>
            <p>Email   : {context.users[params.id].email}</p>
            <p>Mobile  : {context.users[params.id].mobile}</p>
            <p>Batch   : {context.users[params.id].batch}</p>
            <p>Timings : {context.users[params.id].timing}</p>
        </div>
    </div>
 </div>
}

export default UserProfile
