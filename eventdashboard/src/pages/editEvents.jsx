import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './editEvent.css';

const EditEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [eventData, setEventData] = useState({
        title_en: '',
        title_ar: '',
        date: '',
        location: '',
        price: 0
    });

    useEffect(() => {
        const getData = async () => {
            const res = await supabase.from('events').select("*").eq("id", id);
            setEventData(res.data[0]);
        };
        getData();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        await supabase.from('events').update({
            title_en: eventData.title_en,
            title_ar: eventData.title_ar,
            date: eventData.date,
            location: eventData.location,
            price: eventData.price
        }).eq('id', id);
        
        navigate('/events');
    };

    return (
        <div className="edit-event-container">
            <div className="edit-event-card">
                <div className="edit-header">
                    <h2>Edit Event</h2>
                    <button type="button" className="close-btn" onClick={() => navigate('/events')}>×</button>
                </div>

                <form onSubmit={handleUpdate} className="edit-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Title (English)</label>
                            <input 
                                type="text" 
                                value={eventData.title_en || ''} 
                                onChange={(e) => setEventData({ ...eventData, title_en: e.target.value })} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Title (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                value={eventData.title_ar || ''} 
                                onChange={(e) => setEventData({ ...eventData, title_ar: e.target.value })} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date</label>
                            <input 
                                type="date" 
                               
                                value={eventData.date ? eventData.date.slice(0, 10) : ''} 
                                onChange={(e) => setEventData({ ...eventData, date: e.target.value })} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input 
                                type="text" 
                                value={eventData.location || ''} 
                                onChange={(e) => setEventData({ ...eventData, location: e.target.value })} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Price</label>
                            <input 
                                type="number" 
                                value={eventData.price || 0} 
                                onChange={(e) => setEventData({ ...eventData, price: e.target.value })} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/events')}>Cancel</button>
                        <button type="submit" className="save-btn">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditEvent;