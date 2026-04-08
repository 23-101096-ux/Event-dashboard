import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Events from './pages/events';
import EditEvent from './pages/editEvents';

const Routess = () => {
    return ( <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/events" element={<Events />} />
     <Route path="/editEvents" element={<EditEvent />} />
     </Routes>
     </BrowserRouter>
    
    </> );
}
 
export default Routess;