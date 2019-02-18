import React, { Component } from 'react'; 

class LayoutHeader extends Component {
  render() {
    return (
        <header id="header">
            <nav className="w3-top" id="topnavbar" style={{"z-index":2}}>
                <div className="w3-bar w3-theme-d2 w3-left-align">
                    <a className="fixedmenu icon w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-theme-d2" 
                    href="javascript:void(0);" onClick="headerTopBar()"><i className="fa fa-bars"></i></a>
                    <a href="#" className="fixedmenu logo w3-hover-none w3-bar-item w3-button w3-padding-small"><i className="fa fa-compass w3-xxlarge"></i></a>
                    <a href="#" className="w3-bar-item w3-button 3-hide-small w3-padding-large w3-hover-white" title="Vehicles"><i className="fa fa-car w3-large"></i> <span>Vehicles</span></a>
                    <a href="#" className="w3-bar-item w3-button 3-hide-small w3-padding-large w3-hover-white" title="Expenses"><i className="fa fa-credit-card w3-large"></i> <span>Expenses</span></a>
                    <a href="#" className="w3-bar-item w3-button 3-hide-small w3-padding-large w3-hover-white" title="Reports"><i className="fa fa-pie-chart w3-large"></i> <span>Reports</span></a>
                    <div className="alert w3-dropdown-hover 3-hide-small">
                        <button className="w3-button w3-padding-large w3-hover-white" title="Notifications"><i className="fa fa-bell w3-large"></i><span className="w3-badge w3-right w3-small w3-green">3</span></button>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width:"250px"}}>
                            <div className="w3-bar-item w3-padding-small w3-small w3-blue-grey w3-hover-blue-grey">Recent Notifications</div>
                            <a href="#" className="w3-bar-item w3-button w3-padding-small w3-border-bottom w3-small">One new friend request</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding-small w3-border-bottom w3-small">One new friend request</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding-small w3-border-bottom w3-small">One new friend request</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding-small w3-border-bottom w3-small">One new friend request</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding-small w3-border-bottom w3-small">One new friend request</a>
                            <a href="#" className="w3-bar-item w3-padding-small w3-small w3-blue-grey w3-hover-blue-grey w3-right-align">View All</a>
                        </div>
                    </div>
                    <div className=" w3-dropdown-hover 3-hide-small w3-right w3-padding">
                        <img src="./images/avatar2.png" className="w3-circle" style={{height:"30px",width:"30px"}} alt="Avatar"/>
                        <div className="w3-dropdown-content w3-card-4 w3-bar-block w3-left-align" style={{"marginTop":"9px",width:"200px",right:0}}>
                            <a href="#" className="w3-bar-item w3-button w3-small"><i className="fa fa-user"></i> My Profile</a>
                            <a href="#" className="w3-bar-item w3-button w3-small"><i className="fa fa-gears"></i> Settings</a>
                            <a href="#" className="w3-bar-item w3-button w3-small"><i className="fa fa-power-off"></i> Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
  }
}   
export default LayoutHeader;