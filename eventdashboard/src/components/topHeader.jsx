import React from 'react';
import './topHeader.css';

import bellicon from "../assets/NOTFICATION.png";
import logout from "../assets/logout.png";


const Header = () => {

  const handleLogout = () => {

      window.location.href = "/login"; 
  
  };

  return ( 
      <header className="headerdiv">
          <div className="header-right-sec">
              <div className="notification">
                  <img src={bellicon} alt="notifications" className="header-icon" />
              </div>

              <div className="divider"></div>

              <div className="header-card">
                  <div className="circle">AD</div>
                  <div className="header-ut">
                      <p className="header-un">Admin User</p>
                      <p className="header-user-role">Administrator</p>
                  </div>
              </div>


              <button className="logout-btn" onClick={handleLogout}>
                  <img src={logout} alt="logout" />
              </button>
          </div>
      </header>
  );
}

export default Header;
