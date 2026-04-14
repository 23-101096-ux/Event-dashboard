import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './createEvent.css'; 

const CreateCategory = () => {
    const navigate = useNavigate();


    const [nameEn, setNameEn] = useState("");
    const [nameAr, setNameAr] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const handleCreate = async (e) => {
        e.preventDefault();


        await supabase.from("category").insert([
            {
                name_en: nameEn,
                name_ar: nameAr,
                img_url: imgUrl,
            }
        ]);

      
        navigate('/CategoriesMangment');
    };

    return (
        <div className="create-event-container">
            <div className="create-event-card">
                <div className="create-header">
                    <h2>Create New Category</h2>
                    <button type="button" className="close-btn" onClick={() => navigate('/CategoriesMangment')}>×</button>
                </div>

                <form onSubmit={handleCreate} className="create-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Category Name (English)</label>
                            <input 
                                type="text" 
                                placeholder="e.g. Music"
                                onChange={(e) => setNameEn(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Category Name (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                placeholder="مثال: موسيقى"
                                onChange={(e) => setNameAr(e.target.value)} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Image URL (Icon)</label>
                            <input 
                                type="text" 
                                placeholder="Paste icon URL here..."
                                onChange={(e) => setImgUrl(e.target.value)} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/CategoriesMangment')}>
                            Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Create Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;