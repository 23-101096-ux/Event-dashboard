import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase";
import { Link } from 'react-router-dom';
import './cartegoryGrid.css';

import editIcon from '../assets/edit.png';
import deleteIcon from '../assets/trash.png';

const Categories = () => {
    const [categories, setCategories] = useState([]);


    const deleteCategory = async (id) => {
        const res = await supabase.from("category").delete().eq('id', id);
        

        if (res.error === null) {
            const newCategories = categories.filter(item => item.id !== id);
            setCategories(newCategories);
        }
    };

    useEffect(() => {
        const getCategories = async () => {

            const res = await supabase.from("category").select("*");
            if (res.data) {
                setCategories(res.data);
            }
        };
        getCategories();
    }, []);

    return (
        <div className="categories-grid">
            {categories.map((item) => {
                return (
                    <div className="category-card" key={item.id}>
            
                        <div className="category-icon-wrapper">
                      <div className="category-icon-bg">
                    <img src={item.img_url} alt={item.name_en} /> 
                </div>
                        </div>

     
                        <div className="category-info">
                            <h3 className="name-en">{item.name_en}</h3>
                            <p className="name-ar">{item.name_ar}</p>
                        </div>


                        <div className="category-footer">
                            
                            <div className="category-actions">
                 
                                <Link to={"/editCategory/" + item.id} className="action-btn">
                                    <img src={editIcon} alt="edit" />
                                </Link>
                                
                          
                                <button onClick={() => deleteCategory(item.id)} className="action-btn delete">
                                    <img src={deleteIcon} alt="delete" />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Categories;