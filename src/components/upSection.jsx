import React from 'react';
import './upSection.css';

import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

const UpcomingEvents = () => {
    return ( <>
    <div className="upcoming-cont">
            <div className="header">
                <h3>Upcoming Events</h3>
                <p>Events happening soon</p>
            </div>

            <div className="events-wrapper">
            <div className="event-row">
                <div className="event-img">
                    <img src={event1} alt="Summer Music" />
                </div>
                <div className="event-content">
                    <h4>Summer Music Festival 2026</h4>
                    <span className="event-date">Jul 15, 2026</span>
                    <p className="event-price">$150</p>
                </div>
            </div>


            <div className="event-row">
                <div className="event-img">
                    <img src={event2} alt="Tech Conference" />
                </div>
                <div className="event-content">
                    <h4>Tech Conference 2026</h4>
                    <span className="event-date">Jun 20, 2026</span>
                    <p className="event-price">$250</p>
                </div>
            </div>


            <div className="event-row">
                <div className="event-img">
                    <img src={event3} alt="Art Exhibition" />
                </div>
                <div className="event-content">
                    <h4>Art Exhibition: Modern Masters</h4>
                    <span className="event-date">May 10, 2026</span>
                    <p className="event-price">$35</p>
                </div>
            </div>
            </div>
        </div>
    </>);
}
 
export default UpcomingEvents;