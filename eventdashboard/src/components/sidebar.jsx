import React from 'react';
import Nav from './nav';
import './sidebar.css';
import logo from "../assets/Icon.png";
import dash from "../assets/dash.png";
import event from "../assets/event.png";
import booking from "../assets/booking.png";
import category from "../assets/category.png";
import users from "../assets/users.png";
import support from "../assets/support.png";
import feedback from "../assets/feedback.png";
import site from "../assets/site.png";


const Sidebar = ({ currentPage }) => {
    return (
          <div className="sidebar">

                        <div className="sidebar-top">
                        <img src={logo} alt="EventHub" />
                        <h1>EventHub</h1>
                        </div>
  

        <div className="sidebar-mid">
          
                                <Nav 
                                    navtext="Dashboard" 
                                    iconImg={dash} 
                                    s={currentPage === "dash" ? "active-link" : "normal-link"} 
                                    path="/dashboard"
                                />
                        
                                <Nav 
                                    navtext="Events" 
                                    iconImg={event}
                                    s={currentPage === "events" ? "active-link" : "normal-link"} 
                                    path="/events"
                                />
                        
                                <Nav 
                                    navtext="Bookings" 
                                    iconImg={booking} 
                                    s={currentPage === "bookings" ? "active-link" : "normal-link"} 
                                    path="/bookingMangment"
                                />
                                <Nav 
                                    navtext="Categories" 
                                    iconImg={category} 
                                    s={currentPage === "bookings" ? "active-link" : "normal-link"} 
                                    path="/CategoriesMangment"
                                />
                                    <Nav 
                                    navtext="Customer" 
                                    iconImg={users} 
                                    s={currentPage === "bookings" ? "active-link" : "normal-link"} 
                                    path="/CustomerMangment"
                                />
                                    <Nav 
                                    navtext="Support Messages" 
                                    iconImg={support} 
                                    s={currentPage === "bookings" ? "active-link" : "normal-link"} 
                                    path="/supportMessages"
                                />
                                    <Nav 
                                    navtext="Feedback / Reviews" 
                                    iconImg={feedback} 
                                    s={currentPage === "bookings" ? "active-link" : "normal-link"} 
                                     path="/feedback"
                                />
                                        <Nav 
                                    navtext="Site Content" 
                                    iconImg={site} 
                                    s={currentPage === "bookings" ? "active-link" : "normal-link"} 
                                />
                        
        </div>
  
        <div className="sidebar-last">
                <div className="box">
                    <div className="circle">AD</div>
                    <div className="details">
                    <b>Admin User</b>
                    <span>admin@eventhub.com</span>
                    </div>
                </div>
        </div>
      </div>
       
       
    );
}
 
export default Sidebar;