import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './editCategory.css'; 

const EditCustomer = () => {
    const { id } = useParams();
    const navigate = useNavigate();


    const [userData, setUserData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        total_spent: ''
    });

    useEffect(() => {
        const getCustomer = async () => {
            const res = await supabase.from('customer').select("*").eq("id", id);
            
            if (res.data) {
                setUserData(res.data[0]);
            }
        };
        getCustomer();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        await supabase.from('customer').update(userData).eq('id', id);
        navigate('/CustomerMangment'); 
    };

    return (
        <div className="edit-event-container">
            <div className="edit-event-card">
                <div className="edit-header">
                    <h2>Edit Customer</h2>
                    <button className="close-btn" onClick={() => navigate('/CustomerMangment')}>×</button>
                </div>

                <form onSubmit={handleUpdate} className="edit-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                value={userData.full_name} 
                                onChange={(e) => setUserData({ ...userData, full_name: e.target.value })} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" value={userData.phone_number} onChange={(e) => setUserData({ ...userData, phone_number: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label>Total Spent</label>
                            <input type="text" value={userData.total_spent} onChange={(e) => setUserData({ ...userData, total_spent: e.target.value })} />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/CustomerMangment')}>Cancel</button>
                        <button type="submit" className="save-btn" onClick={() => navigate('/CustomerMangment')}>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCustomer;