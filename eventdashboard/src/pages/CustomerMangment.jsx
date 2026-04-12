import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import './bookingMangment.css';
import Search from '../components/searchFilter';
import CustomersTable from '../components/customerTable';
import { useNavigate } from 'react-router-dom';


const CustomerManagment = () => {
  const navigate = useNavigate();
      return ( <>
        <div className="page-layout">
            <Sidebar currentPage="bookings" />
            <div className="main-content">
  
  
              <div className="content-padding">
            <div className="overview-headerr">
                  <div className="header-left">
                      <h1>Customer Management</h1>
                      <p>Manage user accounts and permissions</p>
                  </div>
                  <button className="add-event-btn" onClick={() => navigate('/createCustomer')}><span className="plus-icon">+</span> Add Customer</button>
                  </div>
  


                  <Search />
                  <CustomersTable />
  
             
              </div>
              
  
        
            </div>
          </div>
  
      </> );
  }
   
  export default CustomerManagment;