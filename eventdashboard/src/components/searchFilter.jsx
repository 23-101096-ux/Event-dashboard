import React from 'react';
import './searchFilter.css';

import search from '../assets/search.png';

const Search = () => {
    return ( <>
    <div className="filter-card">
      <div className="search-container">
        {/* <img src={search} alt="search" /> */}
        <input 
          type="text" 
          placeholder="Search events..." 
          className="search-input"
        />
      </div>

      <div className="select-container">
        <select className="filter-select">
          <option>All Status</option>
          <option>Active</option>
          <option>Draft</option>
          <option>Completed</option>
        </select>
      </div>

      <div className="select-container">
        <select className="filter-select">
          <option>All Categories</option>
          <option>Conference</option>
          <option>Workshop</option>
          <option>Webinar</option>
        </select>
      </div>
    </div>
    </> );
}
 
export default Search;