import React, { useState, useEffect } from 'react';
import './eventsTable.css';
import { supabase } from "../supabase" ;
import edit from '../assets/edit.png';
import deletee from '../assets/trash.png';
import { Link } from 'react-router-dom';




const EventsTable = () => {
        
    const [eventss, setEventss] = useState([""]);
    // const [ eventCategories, setEventCategories] = useState([""]);
    const deleteEvents = async (id)=>{
        const res2= await supabase.from("event_catigories").delete().eq('event_id',id)
        const res= await supabase.from("events").delete().eq('id',id)
    }
    useEffect(()=>{
    const getEventss = async ()=>{
        const res = await supabase.from("events").select(`*`);
        setEventss(res.data)
        // console.log(res.data);
}
getEventss();

// const event_categories = async (id)=>{
//     const res = await supabase.from("event_categories").select(`*`).eq("event_id",id);
//     res.map(async (i)=>{

//         const res = await supabase.from("category").select(`*`).eq("id",i.category_id);

//         console.log(res.data);
//     })
//     setEventCategories(res.data)
// }
// event_categories(1);



},[])
return (<>
<div className="table-card">
            <div className="table-header">
                <div>
                <h3>All Events </h3>
                    <p>View and manage event listings</p>
                </div>
            </div>

            <div className="table-wrapper">
                <table className="events-table">
                    <thead>
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventss.map((event) => (
                            <tr key={event.id}>
                                <td>
                                    <div className="event-cell">
                                        <img 
                                            src={event.img_url || 'https://via.placeholder.com/40'} 
                                            alt={event.title_en} 
                                            className="event-img"
                                        />
                                        <div className="event-names">
                                            <span className="name-en">{event.title_en}</span>
                                            <span className="name-ar">{event.title_ar}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-secondary">{event.date}</td>
                                <td className="text-secondary">{event.location}</td>
                                <td className="price-bold">${event.price}</td>
                                <td>
                                <span className="category-badge">
                                {event.category || 'Festival'}
                                    </span>
                                </td>
                                <td>
                                <span className={`status-pill ${event.status ? event.status.toLowerCase() : 'draft'}`}>
                                        {event.status || 'Draft'}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                       <Link to={"editEvent/"+event.id}><button className="btn-icon"><img src={edit} alt="edit" /></button></Link> 
                                        <button onClick={()=> deleteEvents(event.id)} className="btn-icon delete"><img src={deletee} alt="edit" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


</>);
};

export default EventsTable;