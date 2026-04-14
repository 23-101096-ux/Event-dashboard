import React, { useState } from 'react';
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
import burger from "../assets/buger.png";
import site from "../assets/site.png";


const Sidebar = ({ currentPage }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeSidebar = () => setMenuOpen(false);
    const toggleSidebar = () => setMenuOpen(prev => !prev);

    return (
        <>
   
            <button className="mobile-toggle" onClick={toggleSidebar}>
                <img src={burger} alt="menu" />
            </button>

          
            <div
                className={`sidebar-overlay ${menuOpen ? 'active' : ''}`}
                onClick={closeSidebar}
            />

            <div className={`sidebar ${menuOpen ? 'mobile-open' : ''}`}>
                <div className="sidebar-top">
                    <img src={logo} alt="EventHub" />
                    <h1>Tickety</h1>
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
                        s={currentPage === "categories" ? "active-link" : "normal-link"}
                        path="/CategoriesMangment"
                    />
                    <Nav
                        navtext="Customer"
                        iconImg={users}
                        s={currentPage === "customer" ? "active-link" : "normal-link"}
                        path="/CustomerMangment"
                    />
                    <Nav
                        navtext="Support Messages"
                        iconImg={support}
                        s={currentPage === "support" ? "active-link" : "normal-link"}
                        path="/supportMessages"
                    />
                    <Nav
                        navtext="Feedback / Reviews"
                        iconImg={feedback}
                        s={currentPage === "feedback" ? "active-link" : "normal-link"}
                        path="/feedback"
                    />
                    <Nav
                        navtext="Site Content"
                        iconImg={site}
                        s={currentPage === "sitecontent" ? "active-link" : "normal-link"}
                        path="/sitecontent"
                    />
                </div>

                <div className="sidebar-last">
                    <div className="box">
                        <div className="circle">NY</div>
                        <div className="details">
                            <b>Nada Yasserr</b>
                            <span>admin@Tickety.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;