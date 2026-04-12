import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from "../supabase";
import './createEvent.css'; 

const CreateSiteContent = () => {
    const navigate = useNavigate();


    const [valueEn, setValueEn] = useState("");
    const [valueAr, setValueAr] = useState("");
    const [order, setOrder] = useState("");


    const handleCreate = async (e) => {
        e.preventDefault();


        await supabase.from("site_content").insert([
            {
                value_en: valueEn,
                value_ar: valueAr,
                order: order,
                section: "navbar" 
            }
        ]);


        navigate('/sitecontent');
    };

    return (
        <div className="create-event-container">
            <div className="create-event-card">
                <div className="create-header">
                    <h2>Create New Menu Item</h2>

                    <Link to="/sitecontent" className="close-btn">×</Link>
                </div>

                <form onSubmit={handleCreate} className="create-form">
  
                    <div className="form-row">
                        <div className="form-group">
                            <label>Label (English)</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Services"
                                onChange={(e) => setValueEn(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Label (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                placeholder="مثلاً: الخدمات"
                                onChange={(e) => setValueAr(e.target.value)} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Display Order</label>
                            <input 
                                type="number" 
                                placeholder="e.g. 6"
                                onChange={(e) => setOrder(e.target.value)} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-actions">

                        <Link to="/sitecontent" className="cancel-btn">
                            Cancel
                        </Link>
                        <button type="submit" className="save-btn">
                            Create Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateSiteContent;