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
                    <div id="right-panel" style={{margin: "20px", "border-width":"2px",width:"20%",height:"400px",float:"left", "text-align":"left","padding-top":"0"}}>
                        <div>
                            <b>Start:</b>
                            <select id="start">
                              <option value="Halifax, NS">Halifax, NS</option>
                              <option value="Boston, MA">Boston, MA</option>
                              <option value="New York, NY">New York, NY</option>
                              <option value="Miami, FL">Miami, FL</option>
                            </select>
                            <br/>
                            <b>Waypoints:</b> <br/>
                            <i>(Ctrl+Click or Cmd+Click for multiple selection)</i> <br/>
                            <select multiple id="waypoints">
                              <option value="montreal, quebec">Montreal, QBC</option>
                              <option value="toronto, ont">Toronto, ONT</option>
                              <option value="chicago, il">Chicago</option>
                              <option value="winnipeg, mb">Winnipeg</option>
                              <option value="fargo, nd">Fargo</option>
                              <option value="calgary, ab">Calgary</option>
                              <option value="spokane, wa">Spokane</option>
                            </select>
                            <br/>
                            <b>End:</b>
                            <select id="end">
                              <option value="Vancouver, BC">Vancouver, BC</option>
                              <option value="Seattle, WA">Seattle, WA</option>
                              <option value="San Francisco, CA">San Francisco, CA</option>
                              <option value="Los Angeles, CA">Los Angeles, CA</option>
                            </select>
                            <br/>
                              <input type="submit" id="submit" />
                        </div>
                        <div id="directions-panel" style={{"margin-top": "10px", "background-color":"#FFEE77", padding:"10px",overflow:"scroll",height:"174px"}}></div>
                    </div>
                </div>                  
            </section> 
        );
    }
}

export default RoutesPage;