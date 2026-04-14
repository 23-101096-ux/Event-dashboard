import React, { useState, useEffect } from 'react';
import '../components/eventsTable.css';
import { supabase } from "../supabase";

const RecentBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const getBookings = async () => {
            // STEP 1: Get ONLY the bookings table (no joins)
            // This proves the connection works.
            const res = await supabase.from('bookings').select('*');
            
            console.log("RAW DATA CHECK:", res.data);
            setBookings(res.data || []);
        };
        getBookings();
    }, []);

    return (
        <div className="table-card">
            <div className="table-header">
                <h3>Recent Bookings</h3>
            </div>
            <div className="table-wrapper">
                <table className="events-table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((item) => (
                            <tr key={item.id}>
                                <td>{item.customer_id}</td>
                                <td>${item.total_price}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentBookings;