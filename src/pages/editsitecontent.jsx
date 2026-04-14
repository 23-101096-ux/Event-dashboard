import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './editCategory.css'; 

const EditSiteContent = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [contentData, setContentData] = useState({
        value_en: '',
        value_ar: '',
        order: ''
    });


    useEffect(() => {
        const getContent = async () => {
            const res = await supabase.from('site_content').select("*").eq("id", id);
            

            if (res.data && res.data.length > 0) {
                setContentData(res.data[0]);
            }
        };
        getContent();
    }, [id]);


    const handleUpdate = async (e) => {
        e.preventDefault();

        await supabase.from('site_content').update(contentData).eq('id', id);
        navigate('/sitecontent'); 
    };

    return (
        <div className="edit-event-container">
            <div className="edit-event-card">
                <div className="edit-header">
                    <h2>Edit Menu Item</h2>
                    <button className="close-btn" onClick={() => navigate('/sitecontent')}>×</button>
                </div>

                <form onSubmit={handleUpdate} className="edit-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Label (English)</label>
                            <input 
                                type="text" 
                                value={contentData.value_en} 
                                onChange={(e) => setContentData({ ...contentData, value_en: e.target.value })} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Label (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                value={contentData.value_ar} 
                                onChange={(e) => setContentData({ ...contentData, value_ar: e.target.value })} 
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Display Order</label>
                            <input 
                                type="number" 
                                value={contentData.order} 
                                onChange={(e) => setContentData({ ...contentData, order: e.target.value })} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/sitecontent')}>Cancel</button>
                        <button type="submit" className="save-btn">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditSiteContent;