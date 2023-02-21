import React from 'react';
import {Link} from "react-router-dom";
import  "./layout.css";

function Sidebar() {
    return (
        <>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
              <Link to="/pay-buddy/dashboard" className="list-group-item list-group-item-action py-2 ripple active"><i className="fa fa-home" aria-hidden="true"></i> &nbsp;&nbsp;&nbsp;Home</Link>
              <Link to="/pay-buddy/payment" className="list-group-item list-group-item-action py-2 ripple"><i className="fa fa-credit-card" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; Payment</Link>
              <Link to="/pay-buddy/settings-menu"  className="list-group-item list-group-item-action py-2 ripple"><i className="fa fa-cog" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp; Settings</Link>
           </div>
            </div>
          </nav>
        </>
    );
}

export default Sidebar;