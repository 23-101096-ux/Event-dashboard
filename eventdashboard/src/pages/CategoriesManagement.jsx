import React, { Component } from 'react';
import Sidebar from '../components/sidebar';
import './CategoriesManagement.css';
import { useNavigate } from 'react-router-dom';
import Categories from '../components/cartegoryGrid';




const CategoriesMangement = () => {
   
    const navigate = useNavigate();
      return ( <>
        <div className="page-layout">
            <Sidebar currentPage="bookings" />
            <div className="main-content">
  
  
              <div className="content-padding">
            <div className="overview-headerr">
                  <div className="header-left">
                      <h1>Categories Management</h1>
                      <p>Organize events into categories</p>
                  </div>
                  <button className="add-event-btn" onClick={() => navigate('/createCategory')}><span className="plus-icon">+</span> Add Category</button>
                  </div>
  
               <Categories />
  
             
              </div>
              
  
        
            </div>
          </div>
  
      </> );
  }
   
  export default CategoriesMangement;