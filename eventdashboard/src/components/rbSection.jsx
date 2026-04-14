import React, { useState, useEffect } from 'react';
import './rbSection.css'; 
import { supabase } from "../supabase";

const RecentBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const getBookings = async () => {
            const res = await supabase
                .from('booking')
                .select(`
                    id,
                    tickets_count,
                    total-price,
                    status,
                    created_at,
                    customer:customer_id ( full_name ),
                    events:event_id ( title_en )
                `);
            
          
            console.log("Data from Supabase:", res);
            setBookings(res.data || []);
        };

        getBookings();
    }, []);

    return (
        <div className="table-card">
            <div className="table-header">
                <div>
                    <h3>Recent Bookings</h3>
                    <p>Latest ticket bookings from users</p>
                </div>
            </div>
            
            <div className="table-wrapper">
                <table className="events-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Event</th>
                            <th>Tickets</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="user-info">
                                        <div className="user-circle">
                                            {item.customer?.full_name?.charAt(0) || "C"}
                                        </div>
                                        <span>{item.customer?.full_name || "Guest"}</span>
                                    </div>
                                </td>
                                <td>{item.events?.title_en || "No Event"}</td>
                                <td>{item.tickets_count}</td>
                               
                                <td className="price-bold">${item.total_price}</td>
                                <td>
                                    <span className={`status-pill ${item.status?.toLowerCase() || 'pending'}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="text-secondary">
                                    {item.created_at ? item.created_at.slice(0, 10) : "N/A"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentBookings;