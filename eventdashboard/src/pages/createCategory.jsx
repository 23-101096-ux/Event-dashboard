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
    const [location, setLocation] = useState(""); 

    const createEvent = async (e) => {

        e.preventDefault(); 


        await supabase.from("events").insert([
            {
                title_en: titleEn,
                title_ar: titleAr,
                date: date,
                price: price,
                location: location,
                img_url: "https://via.placeholder.com/150" 
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
                                placeholder="Enter title"
                                onChange={(e) => setTitleEn(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Title (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                placeholder="العنوان بالعربي"
                                onChange={(e) => setTitleAr(e.target.value)} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date</label>
                            <input 
                                type="date" 
                                onChange={(e) => setDate(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input 
                                type="text" 
                                placeholder="Enter location"
                                onChange={(e) => setLocation(e.target.value)} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Price</label>
                            <input 
                                type="number" 
                                placeholder="0"
                                onChange={(e) => setPrice(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/events')}>
                            Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;