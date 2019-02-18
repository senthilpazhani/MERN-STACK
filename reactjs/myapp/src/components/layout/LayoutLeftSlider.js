import React, { Component } from 'react'; 

class LayoutLeftSlider extends Component {
        
    _toggle_show_hide=(event)=>{
        var _targetSlider = event.target.dataset.src; 
        this.refs[_targetSlider].classList.toggle('w3-show'); 
    }

    _leftmenufilter=(event)=>{        
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("leftmenufilterinput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("leftmenufilterUl");
        li = ul.getElementsByTagName("li");        
        for (i = 0; i < li.length; i++) {
            txtValue = li[i].textContent || li[i].innerText;
            li[i].style.display = (txtValue.toUpperCase().indexOf(filter) > -1) ? "" : "none";            
        }
    }

    render() {
        return ( 
            <aside id="leftsideslidebar" ref="leftsideslidebar"  className="w3-sidebar w3-bar-block w3-card-4 w3-black w3-animate-left w3-hide">
                <div id="leftsideovelay" >          
                    <div className="closebtn" href="#" data-src="leftsideslidebar"  onClick={this._toggle_show_hide.bind(this)}>&times;</div>
                    <div className="w3-button w3-block w3-left-align w3-theme" id="leftsidenav_accordion" data-src="leftsidenav_accordion_content" onClick={this._toggle_show_hide.bind(this)}>
                        Customer List <i className="fa fa-caret-down"></i>
                    </div>
                    <div id="leftsidenav_accordion_content" ref="leftsidenav_accordion_content" className="w3-hide w3-white w3-card">
                        <ul id="usertree">
                            <li><span className="caret caret-down">Beverages</span>
                                <ul className="nested active">
                                <li>Water</li>
                                <li>Coffee</li>
                                <li><span className="caret caret-down">Tea</span>
                                    <ul className="nested active">
                                    <li>Black Tea</li>
                                    <li>White Tea</li>
                                    <li><span className="caret caret-down">Green Tea</span>
                                        <ul className="nested active">
                                        <li>Sencha</li>
                                        <li>Gyokuro</li>
                                        <li>Matcha</li>
                                        <li>Pi Lo Chun</li>
                                        </ul>
                                    </li>
                                    </ul>
                                </li>  
                                </ul>
                            </li>
                        </ul>
                    </div>                 
                    <div className="w3-panel w3-theme-d1">
                        <p>Filter List</p>
                        <input className="w3-input w3-border w3-padding" type="text" placeholder="Search for names.." id="leftmenufilterinput" onKeyUp={this._leftmenufilter.bind(this)} />
                        <ul className="w3-ul w3-margin-small-top" id="leftmenufilterUl">
                            <li>Adele</li>
                            <li>Agnes</li>
                            <li>Billy</li>
                            <li>Bob</li>
                            <li>Calvin</li>
                            <li>Christina</li>
                            <li>Cindy</li>
                        </ul>
                    </div>                
                </div>
            </aside>  
            );
        }
}   
export default LayoutLeftSlider;