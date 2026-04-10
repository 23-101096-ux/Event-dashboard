import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Events from './pages/events';
import EditEvent from './pages/editEvents';
import CreateEvent from './pages/createEvents';
import BookingMangment from './pages/bookingMangment';
import CategoriesMangment from './pages/CategoriesManagement';

const Routess = () => {
    return ( <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/events" element={<Events />} />
     <Route path="/editEvents" element={<EditEvent />} />
     <Route path="/createEvents" element={<CreateEvent />} />
     <Route path="/bookingMangment" element={<BookingMangment/>} />
     <Route path="/CategoriesMangment" element={<CategoriesMangment/>} />
     </Routes>
     </BrowserRouter>
    
    </> );
}
 
export default Routess;