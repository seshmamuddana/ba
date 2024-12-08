import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import AddNewAdmin from "./components/AddNewAdmin"
import AddNewDoctor from "./components/AddNewDoctor"
import Doctors from "./components/Doctors"
import Messages from "./components/Messages"
import Sidebar from "./components/Sidebar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "./main"
import axios from 'axios'
import "./App.css"

const App = () => {
const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
useEffect(()=>{
  const fetchUser = async()=>{
    try {
      const response = await axios.get(
        "https://onlineconsultationsystem.onrender.com/api/v1/user/admin/me", 
        {
           withCredentials: true 
        });
      setIsAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      setUser({});
    }
  }
  fetchUser();
},[isAuthenticated])
  return (
    <>
      <Router>
      <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin/addnew" element={<AddNewAdmin/>}/>
          <Route path="/doctor/addnew" element={<AddNewDoctor/>}/>
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/messages" element={<Messages/>}/>
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  )
}

export default App