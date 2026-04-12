import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase";
import './eventsTable.css'; 
import edit from '../assets/edit.png';
import deletee from '../assets/trash.png';

const SiteContentTable = () => {
   
    const [content, setContent] = useState([]);

    
    const getContent = async () => {
        const res = await supabase
            .from("site_content")
            .select("*")
            .eq("section", "navbar") 
            .order("order", { ascending: true });

        setContent(res.data || []);
    };

   
    const deleteItem = async (id) => {
        await supabase.from("site_content").delete().eq('id', id);
        getContent(); 
    };

    useEffect(() => {
        getContent();
    }, []);

    return (
        <div className="table-card">
            <div className="table-header">
                <div>
                    <h3>Navigation Menu Items</h3>
                    <p>Manage website navigation links</p>
                </div>
                <button className="add-btn">+ Add Menu Item</button>
            </div>

            <div className="table-wrapper">
                <table className="events-table">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Label (EN)</th>
                            <th>Label (AR)</th>
                            <th>URL</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content.map((item) => (
                            <tr key={item.id}>
                                <td>{item.order}</td>
                                <td>{item.value_en}</td>
                                <td>{item.value_ar}</td>
                                <td>
                                    <span className="url-badge">/{item.value_en?.toLowerCase()}</span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon"><img src={edit} alt="edit" /></button>
                                        <button onClick={() => deleteItem(item.id)} className="btn-icon">
                                            <img src={deletee} alt="delete" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SiteContentTable;