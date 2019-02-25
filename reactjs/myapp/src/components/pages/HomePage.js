import React, { Component } from 'react'; 

class HomePage extends Component {

    _sideslidePanel=(event)=>{
        var _targetSlider = event.target.dataset.src; 
        // console.log(_targetSlider);
        document.getElementById(_targetSlider).classList.toggle('w3-show');
        //this.refs[_targetSlider].classList.toggle('w3-show'); Throw error : TypeError: Cannot read property 'classList' of undefined         
    }

    _SlidePanel_toggle=(event)=>{
        var _targetSlider = event.target.dataset.src;  
        console.log("Action Element Source", _targetSlider);
        document.getElementById(_targetSlider).classList.toggle('w3-lesswidth'); 
    }

    _maintabnav=(event)=>{
        var _targetSlider = event.target.dataset.src;  
        var containerList = document.getElementsByClassName('maintabContainer');
        var tabList = document.getElementsByClassName('tablink');
        [...containerList].map(x => x.classList.add('w3-hide'));
        [...tabList].map(x => x.classList.remove('w3-theme'));
        event.target.classList.add('w3-theme');
        this.refs[_targetSlider].classList.toggle('w3-hide');
    }

    _maintabnavModal=(event)=>{event.preventDefault();
        var _targetSlider = event.target.dataset.src;  
        var containerList = document.getElementsByClassName('tabContainerModal');
        var tabList = document.getElementsByClassName('tablinkModal');
        //console.log(containerList);
        [...containerList].map(x => x.classList.add('w3-hide'));
        [...tabList].map(x => x.classList.remove('w3-theme'));
        event.target.classList.add('w3-theme');
        this.refs[_targetSlider].classList.toggle('w3-hide');
    }

    _toggle_show_hide=(event)=>{
        var _targetSlider = event.target.dataset.src;  
        this.refs[_targetSlider].classList.toggle('w3-show'); 
    }
    
    render() {
        return (
            <section id="content">
                <div className="w3-panel w3-pale-yellow w3-leftbar w3-border-yellow">
                    <p>with a metropolitan area of over 9 million inhabitants.</p>
                </div>
                <div className="w3-panel w3-card-2 w3-white" id="profile">
                    <div className="w3-container">
                        <img className="w3-round w3-margin-right w3-col s2" src="./images/avatar2.png" alt="image" style={{"min-width":"85px","max-width":"100px",float:"left"}} />
                        <div className="w3-col l5 s8 w3-xsmall"><i className="fa fa-user-o"></i> Senthil Kumar Palanisamy</div>
                        <div className="w3-col l5 s8 w3-xsmall"><i className="fa fa-phone"></i> 98899 00039 </div>
                        <div className="w3-col l5 s8 w3-xsmall"><i className="fa fa-envelope-o"></i> SenthilKumar@gmail.com</div>
                        <div className="w3-col l5 s8 w3-xsmall"><i className="fa fa-users"></i> Senthil Kumar Palanisamy</div>
                    </div>                    
                </div>                
                <div className="w3-hide w3-panel w3-blue-grey">
                    <p>9 million inhabitants.</p>
                </div>
                <section id="maintab" className="w3-white">
                    <div className="w3-bar w3-theme-d4">
                        <button className="w3-bar-item w3-button tablink w3-theme" data-src="one" onClick={this._maintabnav.bind(this)}>Form</button>
                        <button className="w3-bar-item w3-button tablink" data-src="two" onClick={this._maintabnav.bind(this)}>Table</button>
                        <button className="w3-bar-item w3-button tablink" data-src="three" onClick={this._maintabnav.bind(this)}>Report</button>
                    </div>
                    <div id="one" ref="one" className="w3-container w3-border maintabContainer ">
                        <div className="w3-container w3-blue-grey">
                            <h6>Input Form</h6>
                        </div>
                        <form className="w3-container w3-card-4" noValidate>
                            <div className="w3-row w3-padding-24">
                                <div className="w3-half">
                                    <div className="w3-col">
                                        <label className="w3-text-grey">Name</label>
                                        <input className="w3-input w3-border" type="text" required="" />
                                    </div>
                                    <div className="w3-col">
                                        <label className="w3-text-grey">Email</label>
                                        <input className="w3-input w3-border" type="text" required="" />
                                    </div>
                                    <div className="w3-col">
                                        <label className="w3-text-grey">Subject</label>
                                        <textarea className="w3-input w3-border" style={{resize:"none"}}></textarea>
                                    </div>
                                </div>
                                <div className="w3-half w3-padding-left-adjust"> 
                                    <div className="w3-col">
                                        <label className="w3-text-grey">Name</label>
                                        <input className="w3-input w3-border" type="text" required="" />
                                    </div>
                                    <div className="w3-col">
                                        <label className="w3-text-grey">Email</label>
                                        <input className="w3-input w3-border" type="text" required="" />
                                    </div>
                                    <div className="w3-col">
                                        <label className="w3-text-grey">Subject</label>
                                        <textarea className="w3-input w3-border" style={{resize:"none"}}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="w3-row">
                                <div className="w3-half">
                                    <input id="milk" className="w3-check" type="checkbox" checked="checked" />
                                    <label>Milk</label>
                                    <br/>
                                    <input id="sugar" className="w3-check" type="checkbox" />
                                    <label>Sugar</label>
                                    <br/>
                                    <input id="lemon" className="w3-check" type="checkbox" disabled="" />
                                    <label>Lemon (Disabled)</label>                                
                                </div>                                
                                <div className="w3-half">
                                    <input id="male" className="w3-radio" type="radio" name="gender" value="male" checked="" />
                                    <label>Male</label>
                                    <br/>
                                    <input id="female" className="w3-radio" type="radio" name="gender" value="female" />
                                    <label>Female</label>
                                    <br/>
                                    <input id="unknown" className="w3-radio" type="radio" name="gender" value="" disabled="" />
                                    <label>Not Mentioned (Disabled)</label>
                                </div>
                            </div>                            
                            <div className="w3-panel w3-right">
                                <button type="button" data-src="id01" onClick={this._toggle_show_hide.bind(this)} className="w3-button w3-black">Modal</button>
                                <button type="button" className="w3-btn w3-padding w3-teal">Save</button>
                                <button type="button" className="w3-btn w3-padding w3-grey">Reset</button>
                            </div>
                        </form>                            
                        <div id="id01" ref="id01" className="w3-modal">
                            <div className="w3-modal-content w3-card-4 w3-animate-zoom">
                                <header className="w3-container w3-blue-grey"> 
                                    <span data-src="id01" onClick={this._toggle_show_hide.bind(this)} 
                                    className="w3-button w3-blue-grey w3-large w3-display-topright">&times;</span>
                                    <h6>Header</h6>
                                </header>                                    
                                <div className="w3-bar w3-border-bottom w3-theme-l5">
                                    <button className="w3-bar-item w3-button tablinkModal w3-theme" data-src="London" onClick={this._maintabnavModal.bind(this)}>London</button>
                                    <button className="w3-bar-item w3-button tablinkModal" data-src="Paris" onClick={this._maintabnavModal.bind(this)}>Paris</button>
                                    <button className="w3-bar-item w3-button tablinkModal" data-src="Tokyo" onClick={this._maintabnavModal.bind(this)}>Tokyo</button>
                                </div>                                    
                                <div id="London" ref="London" className="w3-container tabContainerModal"><h1>one</h1></div>
                                <div id="Paris" ref="Paris" className="w3-container tabContainerModal w3-hide"><h1>two</h1></div>
                                <div id="Tokyo" ref="Tokyo" className="w3-container tabContainerModal w3-hide"><h1>three</h1></div>
                                <div className="w3-container w3-light-grey w3-padding">
                                    <button className="w3-button w3-right w3-white w3-border" data-src="id01" onClick={this._toggle_show_hide.bind(this)} >Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="two" ref="two" className="w3-container w3-border maintabContainer w3-hide">
                        <div className="w3-responsive">
                            <table className="w3-table-all w3-card-4 w3-hoverable">
                                <thead>
                                    <tr className="w3-light-grey">
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Points</th>
                                    <th>Points</th>
                                    <th>Points</th>
                                    <th>Points</th>
                                    <th>Points</th>
                                    <th>Points</th>
                                    <th>Points</th>
                                    </tr></thead>
                                <tbody>
                                    <tr>
                                    <td>Jill</td>
                                    <td>Smith</td>
                                    <td>50</td>
                                    <td>50</td>
                                    <td>50</td>
                                    <td>50</td>
                                    <td>50</td>
                                    <td>50</td>
                                    <td>50</td>
                                    </tr>
                                    <tr>
                                    <td>Eve</td>
                                    <td>Jackson</td>
                                    <td>94</td>
                                    <td>94</td>
                                    <td>94</td>
                                    <td>94</td>
                                    <td>94</td>
                                    <td>94</td>
                                    <td>94</td>
                                    </tr>
                                    <tr>
                                    <td>Adam</td>
                                    <td>Johnson</td>
                                    <td>67</td>
                                    <td>67</td>
                                    <td>67</td>
                                    <td>67</td>
                                    <td>67</td>
                                    <td>67</td>
                                    <td>67</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>                    
                    <div id="three" ref="three" className="w3-container w3-border maintabContainer w3-hide">
                        <h2>Tokyo</h2>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                </section> 
            </section>
        );
    }
}
 
export default HomePage;