import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase";
import './bookingStats.css';

const BookingStats = () => {

    // 1. لازم تبدأ بمصفوفة فاضية []
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            const res = await supabase.from("bookings").select("*");
            
            // 2. الحركة دي هي اللي هتحل الـ Error من غير if
            // بنقول له: حط الـ data، ولو الـ data مش موجودة حط مصفوفة فاضية []
            setStats(res.data || []); 
        }
        getStats();
    }, []);

    // 3. الحسابات دي دلوقتي هتشتغل 100% لأن stats مستحيل تبقى null
    const total = stats.length;
    const confirmed = stats.filter(item => item.status === 'Confirmed' || item.status === 'Completed').length;
    const pending = stats.filter(item => item.status === 'Pending').length;
    const cancelled = stats.filter(item => item.status === 'Cancelled').length;

    return (
        <div className="cards-cont">
            <div className="card">
                <div className="card-info">
                    <p>Total Bookings</p>
                    <h2>{total}</h2>
                </div>
                <div className="card-icon purple">🎫</div>
            </div>

            <div className="card">
                <div className="card-info">
                    <p>Confirmed</p>
                    <h2>{confirmed}</h2>
                </div>
                <div className="card-icon green">✅</div>
            </div>

            <div className="card">
                <div className="card-info">
                    <p>Pending</p>
                    <h2>{pending}</h2>
                </div>
                <div className="card-icon yellow">🕒</div>
            </div>

            <div className="card">
                <div className="card-info">
                    <p>Cancelled</p>
                    <h2>{cancelled}</h2>
                </div>
                <div className="card-icon red">❌</div>
            </div>
        </div>
    );
};

export default BookingStats;