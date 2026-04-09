import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import Header from './components/topHeader';
import Dashboard from './pages/dashboard';
import EventsPage from './pages/events';
import EditEvent from './pages/editEvents';
import CreateEvent from './pages/createEvent';
import './index.css';

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

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);