import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase";
import './bookingStats.css';

import img1 from '../assets/234.png';
import img2 from '../assets/345.png';
import img3 from '../assets/456.png';
import img4 from '../assets/567.png';

const BookingStats = () => {


    const [stats, setStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            const res = await supabase.from("bookings").select("*");
            
            
            setStats(res.data || []); 
        }
        getStats();
    }, []);


    const total = stats.length;
    const confirmed = stats.filter(item => item.status === 'Completed' || item.status === 'Completed').length;
    const pending = stats.filter(item => item.status === 'Pending').length;
    const cancelled = stats.filter(item => item.status === 'Cancelled').length;

    return (
        <div className="cards-cont">
            <div className="card">
                <div className="card-info">
                    <p>Total Bookings</p>
                    <h2>{total}</h2>
                </div>
                <div className="card-icon brown"><img src={img1}  /></div>
            </div>

            <div className="card">
                <div className="card-info">
                    <p>Confirmed</p>
                    <h2>{confirmed}</h2>
                </div>
                <div className="card-icon brown"><img src={img2}  /></div>
            </div>

            <div className="card">
                <div className="card-info">
                    <p>Pending</p>
                    <h2>{pending}</h2>
                </div>
                <div className="card-icon brown"><img src={img3} /></div>
            </div>

            <div className="card">
                <div className="card-info">
                    <p>Cancelled</p>
                    <h2>{cancelled}</h2>
                </div>
                <div className="card-icon brown"><img src={img4}  /></div>
            </div>
        </div>
    );
};

export default BookingStats;