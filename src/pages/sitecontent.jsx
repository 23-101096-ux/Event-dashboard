import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import './bookingMangment.css';
import SiteContentTable from '../components/contentTable';


const Site = () => {

      return ( <>
        <div className="page-layout">
        <Sidebar currentPage="sitecontent" />
            <div className="main-content">
  
  
              <div className="content-padding">
            <div className="overview-headerr">
                  <div className="header-left">
                      <h1>Site Content Management</h1>
                      <p>Manage navigation menu content</p>
                  </div>

                  </div>
  
                    <SiteContentTable />


  
             
              </div>
              
  
        
            </div>
          </div>
  
      </> );
  }
   
  export default Site;