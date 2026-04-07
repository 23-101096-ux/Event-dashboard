import React from 'react';
import './rbSection.css';

import arrow from "../assets/arrow.png";

const RecentBookings = () => {
    const bookings = [
        { id: 1, user: "John Smith", initial: "JS", event: "Summer Music Festival 2026", tickets: 2, amount: "$300", status: "confirmed", date: "4/1/2026" },
        { id: 2, user: "Sarah Johnson", initial: "SJ", event: "Tech Conference 2026", tickets: 1, amount: "$250", status: "confirmed", date: "4/2/2026" },
        { id: 3, user: "Mohammed Ali", initial: "MA", event: "Art Exhibition: Modern Masters", tickets: 4, amount: "$140", status: "pending", date: "4/3/2026" },
        { id: 4, user: "Emily Davis", initial: "ED", event: "Food & Wine Festival", tickets: 2, amount: "$240", status: "confirmed", date: "4/2/2026" },
        { id: 5, user: "David Brown", initial: "DB", event: "Summer Music Festival 2026", tickets: 3, amount: "$450", status: "cancelled", date: "3/28/2026" },
    ];

    return (
        <div className="table-card">
            <div className="table-header">
                <div>
                    <h3>Recent Bookings</h3>
                    <p>Latest ticket bookings from users</p>
                </div>
                <img src={arrow} alt="" />
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
                        {bookings.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="user-info">
                                        <div className="user-circle">{item.initial}</div>
                                        <span>{item.user}</span>
                                    </div>
                                </td>
                                <td>{item.event}</td>
                                <td>{item.tickets}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <span className={`status-badge ${item.status}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="date-col">{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentBookings;