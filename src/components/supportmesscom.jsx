import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase";
import './supportmesscom.css'; 
import deleteIcon from '../assets/trash.png';

const Supportmesscom = () => {
    const [messages, setMessages] = useState([]);

    const getMessages = async () => {

        const res = await supabase.from("support_messages").select(`*,customer:customer_id (full_name)`);
        
    console.log("Supabase Result:", res);
        
        setMessages(res.data);
    };

    const deleteMessage = async (id) => {
        await supabase.from("support_messages").delete().eq('id', id);
        getMessages();
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <div className="support-container">
            {messages.map((item) => {
                return (
                    <div className="support-card" key={item.id}>
                        
                        <div className="card-content">
                            <div className="user-avatar">
                              
                                {item.customer && item.customer.full_name.charAt(0)}
                            </div>
                            
                            <div className="user-details">
                                <div className="user-header">
                                   
                                    <h3 className="user-name">
                                        { item.customer.full_name }
                                    </h3>
                                    <span className="status-badge">
                                        {item.status}
                                    </span>
                                </div>
                                
                                <p className="email-text">Date: {item.created_at}</p>
                                <h4 className="subject-title">{item.title}</h4>
                                <p className="message-body">{item.message}</p>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button className="btn">View</button>
                            <button className="btn resolve">Resolve</button>
                            
                            <button onClick={() => deleteMessage(item.id)} className="btn delete">
                                <img src={deleteIcon} alt="delete" />
                            </button>
                        </div>

                    </div>
                );
            })}
        </div>
    );
};

export default Supportmesscom;