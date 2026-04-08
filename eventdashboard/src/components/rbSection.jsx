import React, { useState, useEffect } from 'react';
import './rbSection.css';
import { supabase } from "../supabase" ;



    const RecentBookings = () => {
        
    const [bookings, setBookings] = useState([""]);
    useEffect(()=>{
    const getBookings = async ()=>{
        const res = await supabase.from("booking").select("*");
        setBookings(res.data)
        console.log(res.data);
}
    getBookings();
},[])
    return (<>
       <div className="table-card">
            <div className="table-header">
                <div>
                    <h3>Recent Bookings</h3>
                    <p>Latest ticket bookings from users</p>
                </div>
                <span className="arrow-icon">↗</span>
            </div>
            
            <div className="table-wrapper">
                <table>
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
                        {/* 2. الـ map هنا بس هي اللي بتكرر الصفوف */}
                        {bookings.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="user-info">
                                        <div className="user-circle">
                                            {item.customer?.full_name?.charAt(0) || "U"}
                                        </div>
                                        <span>{item.customer?.full_name || "Unknown"}</span>
                                    </div>
                                </td>
                                <td>{item.events?.title_en || "No Event"}</td>
                                <td>{item.tickets_count}</td>
                                <td>${item.total_price}</td>
                                <td>
                                    <span className={`status-badge ${item.status?.toLowerCase()}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="date-col">
                                    {new Date(item.created_at).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
</>);
};

export default RecentBookings;