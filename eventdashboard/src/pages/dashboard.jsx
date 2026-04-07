import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/topHeader';
import StatCard from '../components/dashboardCard';
import './dashboard.css';
import DashboardCharts from '../components/dashboardCharts';
import RecentBookings from '../components/rbSection';
import UpcomingEvents from '../components/upSection';




const Dashboard = () => {
    return (  <>
        <div className="page-layout">
          <Sidebar currentPage="dash" />
          <div className="main-content">
            <Header />
            <div className="content-padding">
            <div className="overview-header">
              <h1>Dashboard Overview</h1>
              <p>Welcome back! Here's what's happening today.</p>
            </div>

            <StatCard />
            <DashboardCharts />
            <RecentBookings />
            <UpcomingEvents />
            </div>
            

      
          </div>
        </div>

    </>);
}
 
export default Dashboard;