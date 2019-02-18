import React, { Component } from 'react';

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
            <aside id="leftmenubar"> 
                <nav id="leftsidenav">          
                    {this.props.links.map((link, index) => (
                        !link.parent ?
                            !link.child ? 
                                <a href={link.url} title={link.text}><i className="fa fa-fw fa-home"></i> <span>{link.text}</span></a>
                                :
                                <div>
                                    <a className="w3-dropdown-click w3-hover-none" href="#" title={link.text}>
                                        <div onClick={this._toggleDropdown.bind(this)} data-src={link.child}> 
                                            <i className="fa fa-fw fa-home"></i> {link.text} <i className="fa fa-caret-down"></i>
                                        </div>
                                    </a>
                                    <div id={link.child} ref={link.child} className="w3-dropdown-content w3-bar-block w3-white w3-card">
                                        {this.props.links.filter(sublink => sublink.parent===link.child).map((sublink, index) => (
                                        <a href={sublink.url} className="w3-bar-item w3-button">{sublink.text}</a> 
                                        ))}  
                                    </div>
                                </div>
                            :''                        
                    ))}                
                </nav>
            </aside>
        );
    }
}   
  
export default LayoutLeftNav;