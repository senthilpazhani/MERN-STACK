import React, { Component } from 'react'; 

class LayoutRightNav extends Component {

    _SlidePanel_toggle = (event) => {
        var _targetSlider = event.target.dataset.src;  
        document.getElementById(_targetSlider).classList.toggle('w3-lesswidth'); 
    }

    _toggle_show_hide=(event)=>{
        var _targetSlider = event.target.dataset.src; 
        this.refs[_targetSlider].classList.toggle('w3-show'); 
    }

    render() {
        return ( 
            <aside id="rightsideslidebar" ref="rightsideslidebar" className="w3-sidebar w3-bar-block w3-card-4 w3-black 3-animate-right w3-lesswidth" >
                <div id="rightsideovelay" >          
                    <div className="closebtn" href="#" data-src="rightsideslidebar" onClick={this._SlidePanel_toggle.bind(this)}>&times;</div>
                    <section id="rightpanelaccordion">
                        <button data-src="Demo1" onClick={this._toggle_show_hide.bind(this)} className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 1 <i className="fa fa-caret-down"></i></button>
                        <div id="Demo1" ref="Demo1" className="w3-hide w3-container w3-white">
                            <p>Some text..</p>
                        </div>
                        <button data-src="Demo2" onClick={this._toggle_show_hide.bind(this)} className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 2 <i className="fa fa-caret-down"></i></button>
                        <div id="Demo2" ref="Demo2" className="w3-hide w3-container w3-white">
                            <p>Some other text..</p>
                        </div>
                        <button data-src="Demo3" onClick={this._toggle_show_hide.bind(this)} className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 1 <i className="fa fa-caret-down"></i></button>
                        <div id="Demo3" ref="Demo3" className="w3-hide w3-container w3-white">
                            <p>Some text..</p>
                        </div>

                        <button data-src="Demo4" onClick={this._toggle_show_hide.bind(this)} className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 2 <i className="fa fa-caret-down"></i></button>
                        <div id="Demo4" ref="Demo4" className="w3-hide w3-container w3-white">
                            <p>Some other text..</p>
                        </div>
                    </section>
                </div>
            </aside> 
        );
    }
}   
export default LayoutRightNav;