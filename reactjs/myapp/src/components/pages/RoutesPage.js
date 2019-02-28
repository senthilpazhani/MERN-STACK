import React, { Component } from 'react'; 
import Gmap from '../gmap/Map';

class RoutesPage extends Component { 

    render() {
        return (
            <section id="content">            
                <div className="w3-container">
                    <div id="map" style={{height:"100vh",float:"left",width:"75%"}}>
                        <Gmap />
                    </div> 
                </div>                  
            </section> 
        );
    }
}

export default RoutesPage;