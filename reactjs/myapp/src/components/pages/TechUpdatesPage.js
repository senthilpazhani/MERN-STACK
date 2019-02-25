import React, { Component } from 'react'; 

class TechUpdatesPage extends Component {
  
    render() {
        return (
            <section id="content">
                <div className="w3-container">
                    <div className="w3-panel w3-blue-grey">
                        <h6>Tech Updates</h6>
                    </div>
                    <section id="rightpanelaccordion">
                        <button data-src="Demo1" className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 1 <i className="fa fa-caret-down"></i></button>
                        <div id="Demo1" ref="Demo1" className="w3-hide w3-container w3-white">
                            <p>Some text..</p>
                        </div>
                        <button data-src="Demo2" className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 2 <i className="fa fa-caret-down"></i></button>
                        <div id="Demo2" ref="Demo2" className="w3-hide w3-container w3-white">
                            <p>Some other text..</p>
                        </div>
                        <button data-src="Demo3" className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 1 <i className="fa fa-caret-down"></i></button>
                        <div id="Demo3" ref="Demo3" className="w3-hide w3-container w3-white">
                            <p>Some text..</p>
                        </div>

                        <button data-src="Demo4" className="w3-button w3-block w3-blue-grey w3-left-align">Open Section 2 <i className="fa fa-caret-down"></i></button>
                        <div id="Demo4" ref="Demo4" className="w3-hide w3-container w3-white">
                            <p>Some other text..</p>
                        </div>
                    </section>                   
                </div>
            </section>
        );
    }
}
 
export default TechUpdatesPage;