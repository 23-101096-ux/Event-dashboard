import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/sidebar';
import Header from './components/topHeader';
import Dashboard from './pages/dashboard';
import EventsPage from './pages/events';
import './index.css';
import EditEvent from './pages/editEvents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="page-layout"> 
        
        {/* <Sidebar />  */}

        <div className="main-content">
          <Header /> 
          
        
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/editEvent/:id" element={<EditEvent />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>


  </React.StrictMode>
);

