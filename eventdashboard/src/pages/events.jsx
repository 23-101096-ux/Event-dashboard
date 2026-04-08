import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import './events.css';
import Search from '../components/searchFilter';
import EventsTable from '../components/eventsTable';


const Events = () => {
    return ( <>
      <div className="page-layout">
          <Sidebar currentPage="event" />
          <div className="main-content">


            <div className="content-padding">
          <div className="overview-header">
                <div className="header-left">
                    <h1>Events Management</h1>
                    <p>Manage all events and their details</p>
                </div>
                
                <button className="add-event-btn">
                    <span className="plus-icon">+</span> Add Event
                </button>
                </div>


                <Search />
                <EventsTable />

           
            </div>
            

      
          </div>
        </div>

    </> );
}
 
export default Events;