import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from "../supabase";
import './editCategory.css'; 

const EditCategory = () => {
    const { id } = useParams();
    const navigate = useNavigate();


    const [categoryData, setCategoryData] = useState({
        name_en: '',
        name_ar: '',
        img_url: ''
    });

    useEffect(() => {
        const getCategory = async () => {
            const res = await supabase.from('category').select("*").eq("id", id);
            

            if (res.data) {
                setCategoryData(res.data[0]);
            }
        };
        getCategory();
    }, [id]);


    const handleUpdate = async (e) => {
        e.preventDefault();
        await supabase.from('category').update(categoryData).eq('id', id);
        navigate('/CategoriesMangment'); 
    };

    return (
        <div className="edit-event-container">
            <div className="edit-event-card">
                <div className="edit-header">
                    <h2>Edit Category</h2>
                    <button className="close-btn" onClick={() => navigate('/categories')}>×</button>
                </div>

                <form onSubmit={handleUpdate} className="edit-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label>Category Name (English)</label>
                            <input 
                                type="text" 
                                value={categoryData.name_en} 
                                onChange={(e) => setCategoryData({ ...categoryData, name_en: e.target.value })} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Category Name (Arabic)</label>
                            <input 
                                type="text" 
                                dir="rtl"
                                value={categoryData.name_ar} 
                                onChange={(e) => setCategoryData({ ...categoryData, name_ar: e.target.value })} 
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Image URL (Icon)</label>
                            <input 
                                type="text" 
                                value={categoryData.img_url} 
                                placeholder="Paste image link here..."
                                onChange={(e) => setCategoryData({ ...categoryData, img_url: e.target.value })} 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/CategoriesMangment')}>Cancel</button>
                        <button type="submit" className="save-btn" onClick={() => navigate('/CategoriesMangment')}>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCategory;