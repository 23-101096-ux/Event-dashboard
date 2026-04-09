import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './createEvent.css'; 

const CreateEvent = () => {
    const navigate = useNavigate();

    const [eventData, setEventData] = useState({
        title_en: '',
        title_ar: '',
        description_en: '',
        description_ar: '',
        date: '',
        location: '',
        price: 0,
        total_tickets: 100,
        status: 'Active'
    });


    const createEvent = async (e) => {

        // e.preventDefault(); 
    
        const res = await supabase.from('events').insert([
            {
                title_en: eventData.title_en,
                title_ar: eventData.title_ar,
                description_en: eventData.description_en,
                description_ar: eventData.description_ar,
                date: eventData.date,
                location: eventData.location,
                price: eventData.price,
                total_tickets: eventData.total_tickets,
                status: eventData.status
            }
        ]);
    
        navigate('/events');
    };

    return ( <>
        <div className="create-event-container">
            <div className="create-event-card">
                <div className="create-header">
                    <h2>Create New Event</h2>
                    <button className="close-btn" onClick={() => navigate('/events')}>×</button>
                </div>

                <form onSubmit={createEvent} className="create-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Title (English)</label>
                            <input 
                                type="text" 
                                placeholder="Enter English Title"
                                value={eventData.title_en} 
                                onChange={(e) => setEventData({ ...eventData, title_en: e.target.value })} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Title (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                placeholder="العنوان بالعربي"
                                value={eventData.title_ar} 
                                onChange={(e) => setEventData({ ...eventData, title_ar: e.target.value })} 
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date</label>
                            <input 
                                type="date" 
                                value={eventData.date} 
                                onChange={(e) => setEventData({ ...eventData, date: e.target.value })} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Price ($)</label>
                            <input 
                                type="number" 
                                value={eventData.price} 
                                onChange={(e) => setEventData({ ...eventData, price: e.target.value })} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/events')}>Cancel</button>
                        <button type="submit" className="save-btn">Create Event</button>
                    </div>
                </form>
            </div>
        </div>
        </> );
}

export default CreateEvent;