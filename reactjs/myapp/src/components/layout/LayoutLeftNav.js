import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainContent from './LayoutMain';

class LayoutLeftNav extends Component { 
    constructor(){
        super();
        var {...NavLinks} = this.props; 
    }     
    
    _toggleDropdown=(event)=>{
        var _targetDropdown = event.target.dataset.src; 
        this.refs[_targetDropdown].classList.toggle('w3-show');   
        
    }

    render() {
        return ( 
            <Router>
                <aside id="leftmenubar"> 
                    <nav id="leftsidenav">          
                        {this.props.links.map((link, index) => (
                            !link.parent ?
                                !link.child ?                                    
                                    <Link to={link.url} title={link.text}><i className="fa fa-fw fa-home"></i> <span>{link.text}</span></Link>
                                    :
                                    <div>
                                        <a className="w3-dropdown-click w3-hover-none" href="#" title={link.text}>
                                            <div onClick={this._toggleDropdown.bind(this)} data-src={link.child}> 
                                                <i className="fa fa-fw fa-home"></i> {link.text} <i className="fa fa-caret-down"></i>
                                            </div>
                                        </a>
                                        <div id={link.child} ref={link.child} className="w3-dropdown-content w3-bar-block w3-white w3-card">
                                            {this.props.links.filter(sublink => sublink.parent===link.child).map((sublink, index) => (
                                            <Link to={sublink.url} className="w3-bar-item w3-button">{sublink.text}</Link> 
                                            ))}  
                                        </div>
                                    </div>
                                :''                        
                        ))}                        
                        <Route exact path={`/:pageId`} component={MainContent} /> 
                    </nav>
                </aside>
            </Router>
        );
    }
}   
   
export default LayoutLeftNav;