import React from 'react';
import './dashboardCard.css';

import event from '../assets/Container.png';
import booking from '../assets/Container1.png';
import user from '../assets/Container2.png';
import revenue from '../assets/Container3.png';
import star from '../assets/Container4.png';


const StatCard = () => {
    return (<>
         <div className="content-body">
            <div className="overview-section">
      
      <div className="stats-container">

        <div className="stat-card">
          <div className="stat-top">
            <div>
              <span className="stat-label">Total Events</span>
              <h2 className="stat-number">126</h2>
            </div>
            <div className="stat-icon-bg">
              <img src={event} alt="icon" />
            </div>
          </div>
          <div className="stat-bottom">
            <span className="trend-up">↗ +12%</span>
            <span className="compare-text"> vs last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <div>
              <span className="stat-label">Total Bookings</span>
              <h2 className="stat-number">8,542</h2>
            </div>
            <div className="stat-icon-bg">
              <img src={booking} alt="icon" />
            </div>
          </div>
          <div className="stat-bottom">
            <span className="trend-up">↗ +23%</span>
            <span className="compare-text"> vs last month</span>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-top">
            <div>
              <span className="stat-label">Total Users</span>
              <h2 className="stat-number">12,845</h2>
            </div>
            <div className="stat-icon-bg">
              <img src={user} alt="icon" />
            </div>
          </div>
          <div className="stat-bottom">
            <span className="trend-up">↗ +8%</span>
            <span className="compare-text"> vs last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <div>
              <span className="stat-label">Revenue</span>
              <h2 className="stat-number">$284,590</h2>
            </div>
            <div className="stat-icon-bg">
              <img src={revenue} alt="icon" />
            </div>
          </div>
          <div className="stat-bottom">
            <span className="trend-up">↗ +18%</span>
            <span className="compare-text"> vs last month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-top">
            <div>
              <span className="stat-label">Average Rating</span>
              <h2 className="stat-number">4.8</h2>
            </div>
            <div className="stat-icon-bg">
              <img src={star} alt="icon" />
            </div>
          </div>
          <div className="stat-bottom">
            <span className="trend-up">↗ +0.2</span>
            <span className="compare-text"> vs last month</span>
          </div>
        </div>
      </div>
    </div>

            </div>
      
   </>);
  };
  
  export default StatCard;