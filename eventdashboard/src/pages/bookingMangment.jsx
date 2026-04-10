import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import './bookingMangment.css';
import Search from '../components/searchFilter';
import RecentBookings from '../components/rbSection';
import BookingStats from '../components/bookingStats';

const BookingMangment = () => {
      return ( <>
        <div className="page-layout">
            <Sidebar currentPage="bookings" />
            <div className="main-content">
  
  
              <div className="content-padding">
            <div className="overview-headerr">
                  <div className="header-left">
                      <h1>Bookings Management</h1>
                      <p>Manage all Bookings and their details</p>
                  </div>
   
                  </div>
  

                  <BookingStats />
                  <Search />
                  <RecentBookings />
  
             
              </div>
              
  
        
            </div>
          </div>
  
      </> );
  }
   
  export default BookingMangment;