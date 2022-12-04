import React,{useState} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';
import UserProfile from './components/UserProfile';
import DashboardContextComponent from './ContextComponent/DashboardContextComponent';
import UserContextComponent from './ContextComponent/UserContextComponent';
import NestedComponent from './components/NestedComponent';
import Profile from './components/NestedComponent/Profile';
import Account from './components/NestedComponent/Account';

function App() {

  return <div id="wrapper">
    <BrowserRouter>
    <Sidebar />
    <UserContextComponent>
    <Routes>
      <Route path='/dashboard' element={
      <DashboardContextComponent>
          <Dashboard/>
      </DashboardContextComponent>}/>
      <Route path="/list-user" element={<ListUser />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/user-profile/:id" element={<UserProfile />} />
      <Route path="/edit-user/:id" element={<EditUser />} />
      <Route path="/nested-page" element={<NestedComponent />}>
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="*" element={<Navigate to={'/dashboard'}/>} />
    </Routes>
    </UserContextComponent>
    </BrowserRouter>
  </div>
}

export default App;
