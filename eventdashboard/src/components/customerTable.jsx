import React, { useState, useEffect } from 'react';
import './eventsTable.css'; 
import { supabase } from "../supabase";
import edit from '../assets/edit.png';
import deletee from '../assets/trash.png';
import { Link } from 'react-router-dom';

const CustomersTable = () => {
    

    const [customers, setCustomers] = useState([]);

    const deleteCustomer = async (id) => {
        await supabase.from("customer").delete().eq('id', id);


    };

    useEffect(() => {
        const getCustomers = async () => {
            const res = await supabase.from("customer").select("*");

            setCustomers(res.data);
        };
        getCustomers();
    }, []);

    return (
        <div className="table-card">
            <div className="table-header">
                <div>
                    <h3>All Users ({customers.length})</h3>
                    <p>Manage user accounts and their roles</p>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="events-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Last Joined Date</th>
                            <th>Total spent</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <div className="event-cell">
                                        <div className="user-avatar">
                                            {user.full_name?.substring(0, 2).toUpperCase()}
                                        </div>
                                        <div className="event-names">
                                            <span className="name-en">{user.full_name}</span>
                                            <span className="user-id">ID: u{user.id}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-secondary">{user.email}</td>
                                <td className="text-secondary">{user.phone_number}</td>
                                <td className="text-secondary">{user.created_at}</td>
                                <td>
                                    <span className="spent-badge">{user.total_spent}</span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <Link to={"/editCustomer/" + user.id}>
                                            <button className="btn-icon"><img src={edit} alt="edit" /></button>
                                        </Link>
                                        <button onClick={() => deleteCustomer(user.id)} className="btn-icon delete">
                                            <img src={deletee} alt="delete" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomersTable;