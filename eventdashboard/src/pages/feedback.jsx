import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import './bookingMangment.css';
import Search from '../components/searchFilter';
import Feedbackcom from '../components/feedbackcom';




const Feedback = () => {

      return ( <>
        <div className="page-layout">
            <Sidebar currentPage="feedback" />
            <div className="main-content">
  
  
              <div className="content-padding">
            <div className="overview-headerr">
                  <div className="header-left">
                      <h1>Feedback & Reviews</h1>
                      <p>Monitor and manage customer reviews</p>
                  </div>

                  </div>
  


                  <Search />
                  <Feedbackcom />

  
             
              </div>
              
  
        
            </div>
          </div>
  
      </> );
  }
   
  export default Feedback;