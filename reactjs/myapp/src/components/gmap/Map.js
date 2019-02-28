import React, { Component  } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow, Circle} from "react-google-maps";
// import Marker from './Marker';
// import Polyline from './Polyline';
// import Map_Center from '../const/map';
// import SearchBox from './SearchBox';
  
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.defaultCenter}   
    ref={(map) => { console.log(props.map); }}       
  >
    {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
    {
        props.isMarkerShown &&  props.markers.map(marker => {
        const onMarkerClick = props.onMarkerClick.bind(this, marker)        
        return (
        <Marker 
        onClick={onMarkerClick}
        position={{ lat: marker.latitude, lng: marker.longitude}}
        key={marker.id} 
        title={"User's Location"}
        options={{ icon: 'https://image.ibb.co/evMHxF/shopping_zone_marker_1.png' }}
        >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                  {marker.shelter}
                </div>
              </InfoWindow>}            
        </Marker>        
        )}        
    )} 
  </GoogleMap>
))

class Map extends Component {
    constructor (props) {
        super(props)
        this.state = {
            mapsLoaded: false, 
            map: null,
            maps: null,
            markers:[], 
            isMarkerShown: false,
            selectedMarker: false,
        }
    }
    // componentWillReceiveProps(props) {
    componentDidMount = () => {        
        // fetch('./inputs/json/route.json')
        // // .then(response => response.json())
        // .then(response => response.text() )
        // .then(data => this.setState({ markers: data.results }));
  
            fetch("./inputs/json/markers.json")
            .then(response => response.json())
            .then(data => {
                this.setState({ isMarkerShown: true, markers: data.shelters }) })  
            .catch(error => {
                this.setState({ content: `Error: The Geolocation service failed (${error.message}).` });
            });
        
    }

    delayedShowMarker = () => {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 1000)
    }
    
    handleMarkerClick = (marker, event) => {        
        this.setState({ isMarkerShown: true,
            selectedMarker: marker }) 
    } 
 

    _onClick = ({x, y, lat, lng, event}) => {
        console.log(x, y, lat, lng, event);
        // this.setState({ markers: this.state.markers });
    }

    render () {
        const {map, maps,} = this.state;
        return (        
            <MyMapComponent 
            zoom={this.props.zoom} defaultCenter={this.props.center} markers={this.state.markers}
            selectedMarker={this.state.selectedMarker}
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}  map={map} maps={maps} 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC27MugzGiY-9Wi2b_8j4-xBuxMJEj-nY8&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div id="loadingelement" style={{height: `100%` }} />}
            containerElement={<div id="container" style={{"minHeight":`600px`,height: `100vh`  }} />}
            mapElement={<div id="map" style={{height: `100%` }} />}
             >
            </MyMapComponent>
        ) 
    }
}

Map.defaultProps = {
markers: [
    {label:1, id:1, latitude: 53.42728, longitude: -6.24357, shelter:'A'},
    {label:2, id:2, latitude: 43.681583, longitude: -79.61146, shelter:'AA'},
    {label:3, id:3, latitude: 25.681583, longitude: -8.61146, shelter:'AAA'},
],
center: { lat: -34.397, lng: 150.644 },//Map_Center,
zoom: 8
}

export default Map