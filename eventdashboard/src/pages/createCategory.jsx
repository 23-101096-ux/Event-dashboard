import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './createEvent.css'; 

const CreateCategory = () => {
    const navigate = useNavigate();


    const [nameEn, setNameEn] = useState("");
    const [nameAr, setNameAr] = useState("");
    const [imgUrl, setImgUrl] = useState("");


    const createCategory = async (e) => {
        

        const res = await supabase.from("category").insert([
            {
                name_en: nameEn,
                name_ar: nameAr,
                img_url: imgUrl,
            }
        ]);


        navigate('/categories');
    };

    return (
        <div className="create-event-container">
            <div className="create-event-card">
                <div className="create-header">
                    <h2>Create New Category</h2>
                    <button type="button" className="close-btn" onClick={() => navigate('/categories')}>×</button>
                </div>

                <form onSubmit={createCategory} className="create-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Category Name (English)</label>
                            <input 
                                type="text" 
                                placeholder="Enter English name"
                                onChange={(e) => setNameEn(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Category Name (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                placeholder="الاسم بالعربي"
                                onChange={(e) => setNameAr(e.target.value)} 
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group" style={{width: '100%'}}>
                            <label>Image URL (Icon)</label>
                            <input 
                                type="text" 
                                placeholder="Paste image or icon link"
                                onChange={(e) => setImgUrl(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/CategoriesMangment')}>Cancel</button>
                        <button type="submit" className="save-btn" onClick={() => navigate('/CategoriesMangment')}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCategory;