import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase";
import './feedbackcom.css'; 
import deleteIcon from '../assets/trash.png';

const Feedbackcom = () => {
    const [feedback, setFeedback] = useState([]); 

  
        const getFeedback = async () => {
            
            const res = await supabase.from("feedback").select("*");
            
            
            const res2 = await supabase.from("customer").select("id, full_name");
            const res3 = await supabase.from("events").select("id, title_en");
        
            const finalData = res.data.map(fb => {
                const user = res2.data.find(u => u.id === fb.customer_id);
                
                return {
                    ...fb,
                    customer_name: user ? user.full_name : "Unknown"
                };
            });
        
            setFeedback(finalData);
        };


    const deleteFeedback = async (id) => {
        await supabase.from("feedback").delete().eq('id', id);
        getFeedback(); 
    };

    useEffect(() => {
        getFeedback();
    }, []);

    return (
        <div className="feedback-grid">
           
            {feedback && feedback.map((item) => (
                <div className="feedback-card" key={item.id}>
                    <div className="card-top">
                        <div className="user-info">
                            <div className="avatar">
                               
                                {item.customer_name.charAt(0)}
                            </div>
                            <div className="user-details">
                            <h3>{item.customer_name}</h3>
                                <span>{item.created_at}</span>
                            </div>

                            
                        </div>
                        <button onClick={() => deleteFeedback(item.id)} className="delete-btn">
                            <img src={deleteIcon} alt="delete" />
                        </button>
                    </div>

                    <div className="rating-stars">
                        <span className="stars">{"★".repeat(item.rating || 0)}</span>
                        <span className="empty-stars">{"★".repeat(5 - (item.rating || 0))}</span>
                    </div>

                    <div className="event-label">
                        {item.events?.title}
                    </div>

                    <p className="comment">{item.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default Feedbackcom;