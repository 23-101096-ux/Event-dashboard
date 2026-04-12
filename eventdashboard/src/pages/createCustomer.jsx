import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './createEvent.css'; 

const CreateCustomer = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [totalSpent, setTotalSpent] = useState("");

    const handleCreate = async (e) => {
        e.preventDefault();


        await supabase.from("customer").insert([
            {
                full_name: fullName,
                email: email,
                phone_number: phone,
                total_spent: totalSpent,
            }
        ]);

        
        navigate('/CustomerMangment');
    };

    return (
        <div className="create-event-container">
            <div className="create-event-card">
                <div className="create-header">
                    <h2>Create New User</h2>
                    <button type="button" className="close-btn" onClick={() => navigate('/CustomerMangment')}>×</button>
                </div>

                <form onSubmit={handleCreate} className="create-form">
  
                    <div className="form-row">
                        <div className="form-group">
                            <label>User Name</label>
                            <input 
                                type="text" 
                                placeholder="e.g. John Smith"
                                onChange={(e) => setFullName(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                placeholder="john@example.com"
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input 
                                type="text" 
                                placeholder="123456"
                                onChange={(e) => setPhone(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Total Spent</label>
                            <input 
                                type="number" 
                                placeholder="0"
                                onChange={(e) => setTotalSpent(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/CustomerMangment')}>
                            Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCustomer;