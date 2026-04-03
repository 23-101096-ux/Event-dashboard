import React from 'react';
const Nav = (props) => {
    return ( 
        <div className={props.s}>
      <img src={props.iconImg} alt="icon" className="nav-icon" />
      <p>{props.navtext}</p>
    </div>
     );
}
 
export default Nav;