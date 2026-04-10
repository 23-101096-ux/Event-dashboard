import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './createEvent.css'; 

const CreateEvent = () => {
    const navigate = useNavigate();


    const [titleEn, setTitleEn] = useState("");
    const [titleAr, setTitleAr] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState(0);


    const createEvent = async (e) => {
        e.preventDefault(); 

        const res = await supabase.from("events").insert([
            {
                title_en: titleEn,
                title_ar: titleAr,
                date: date,
                price: price,
            }
        ]);

        navigate('/events');
    };

    return (
        <div className="create-event-container">
            <div className="create-event-card">
                <div className="create-header">
                    <h2>Create New Event</h2>
                    <button type="button" className="close-btn" onClick={() => navigate('/events')}>×</button>
                </div>

              
                <form onSubmit={createEvent} className="create-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Title (English)</label>
                            <input 
                                type="text" 
                                placeholder="enter title"
                                onChange={(e) => setTitleEn(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Title (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                placeholder="العنوان بالعربي"
                                onChange={(e) => setTitleAr(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date</label>
                            <input 
                                type="date" 
                                onChange={(e) => setDate(e.target.value)} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input 
                                type="number" 
                                onChange={(e) => setPrice(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/events')}>Cancel</button>
    
                        <button className="save-btn">create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;