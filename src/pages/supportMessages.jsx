import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import './bookingMangment.css';
import Search from '../components/searchFilter';
import Supportmesscom from '../components/supportmesscom';




const SupportMessages = () => {

      return ( <>
        <div className="page-layout">
            <Sidebar currentPage="support" />
            <div className="main-content">
  
  
              <div className="content-padding">
            <div className="overview-headerr">
                  <div className="header-left">
                      <h1>Support Messages</h1>
                      <p>Manage customer support inquiries</p>
                  </div>

                  </div>
  


                  <Search />
                  <Supportmesscom />

  
             
              </div>
              
  
        
            </div>
          </div>
  
      </> );
  }
   
  export default SupportMessages;