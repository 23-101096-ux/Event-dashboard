import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Header from './components/topHeader';
import Dashboard from './pages/dashboard';
import EventsPage from './pages/events';
import EditEvent from './pages/editEvents';
import CreateEvent from './pages/createEvent';
import './index.css';
import BookingMangment from './pages/bookingMangment';
import CategoriesMangment from './pages/CategoriesManagement';
import EditCategory from './pages/editCategory';
import CreateCategory from './pages/createCategory';
import CustomerManagment from './pages/CustomerMangment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="page-layout"> 
        
        {/* <Sidebar />  */}

        <div className="main-content">
          <Header /> 
          
          <Routes>

            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/editEvent/:id" element={<EditEvent />} />
            <Route path="/events/create" element={<CreateEvent />} />
            <Route path="/bookingMangment" element={<BookingMangment />} />
            <Route path="/CategoriesMangment" element={<CategoriesMangment/>} />
            <Route path="editCategory/:id" element={<EditCategory />} />
            <Route path="/createCategory" element={<CreateCategory/>} />
            <Route path="/CustomerMangment" element={<CustomerManagment/>} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);