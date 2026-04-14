import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './createEvent.css'; 

const EditCustomer = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Individual states for each field
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [totalSpent, setTotalSpent] = useState("");

    // 1. Fetch current data on load
    useEffect(() => {
        const getCustomerData = async () => {
            const { data, error } = await supabase
                .from('customer')
                .select("*")
                .eq("id", id)
                .single(); // Get one object instead of an array
            
            if (data) {
                setFullName(data.full_name);
                setEmail(data.email);
                setPhone(data.phone_number);
                setTotalSpent(data.total_spent);
            }
        };
        getCustomerData();
    }, [id]);

    // 2. Handle the update logic
    const handleUpdate = async (e) => {
        e.preventDefault();

        await supabase
            .from("customer")
            .update({
                full_name: fullName,
                email: email,
                phone_number: phone,
                total_spent: totalSpent,
            })
            .eq('id', id);

        navigate('/CustomerMangment');
    };

    return (
        <div className="create-event-container">
            <div className="create-event-card">
                <div className="create-header">
                    <h2>Edit User</h2>
                    <button type="button" className="close-btn" onClick={() => navigate('/CustomerMangment')}>×</button>
                </div>

                <form onSubmit={handleUpdate} className="edit-form" noValidate>
                    <div className="form-row">
                        <div className="form-group">
                            <label>User Name</label>
                            <input 
                                type="text" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                value={email}
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
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Total Spent</label>
                            <input 
                                type="number" 
                                value={totalSpent}
                                onChange={(e) => setTotalSpent(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/CustomerMangment')}>
                            Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditCustomer;