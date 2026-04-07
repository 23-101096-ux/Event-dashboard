import React from 'react';
import './dashboardCharts.css';

import bookingsImg from '../assets/1.png'; 
import revenueImg from '../assets/2.png';

const DashboardCharts = () => {
    return ( <>
    <div className="charts-sec">
            <div className="charts-grid">
                
                <div className="ccard">
                    <div className="chart-text">
                        <h3>Bookings Trend</h3>
                        <p>Monthly bookings over the last 6 months</p>
                    </div>
                    <div className="chart-img-cont">
                        <img src={bookingsImg} alt="Bookings Graph" />
                    </div>
                </div>

                <div className="ccard">
                    <div className="chart-text">
                        <h3>Revenue by Category</h3>
                        <p>Top performing event categories</p>
                    </div>
                    <div className="chart-img-cont">
                        <img src={revenueImg} alt="Revenue Graph" />
                    </div>
                </div>

            </div>
        </div>
    </> );
}
 
export default DashboardCharts;