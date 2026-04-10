import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import './bookingMangment.css';
import Search from '../components/searchFilter';
import CustomersTable from '../components/customerTable';


const CustomerManagment = () => {
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
                
                  </div>
  


                  <Search />
                  <CustomersTable />
  
             
              </div>
              
  
        
            </div>
          </div>
  
      </> );
  }
   
  export default CustomerManagment;