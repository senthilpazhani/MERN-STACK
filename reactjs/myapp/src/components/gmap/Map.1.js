import React, { Component , Fragment } from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import Polyline from './Polyline';
import Map_Center from '../const/map';
import SearchBox from './SearchBox';

class Map extends Component {

    constructor (props) {
        super(props)
        this.state = {
            mapsLoaded: false, 
            map: null,
            maps: null,
            places:[],
        }
    }

    // Return map bounds based on list of places
    getMapBounds = (map, maps, places) => {
        const bounds = new maps.LatLngBounds();  
        places.forEach((place) => {
            bounds.extend(new maps.LatLng(
            place.geometry.location.lat,
            place.geometry.location.lng,
            ));
        });
        return bounds;
    };

    // Fit map to its bounds after the api is loaded
    onMapLoaded = (map, maps, places) => {    
        const bounds = this.fitBounds(map, maps, places); 
        this.setState({
            ...this.state,
            mapsLoaded: true,
            map: map,
            maps: maps,
            places:places,
        })
        this.bindResizeListener(map, maps, bounds);
    }

    // Re-center map when resizing the window
    bindResizeListener = (map, maps, bounds) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
            maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
            });
        });
    };

    fitBounds = (map, maps, places) => {        
        var bounds = new maps.LatLngBounds();
        places.forEach((place) => {
            bounds.extend(new maps.LatLng(
                place.geometry.location.lat,
                place.geometry.location.lng,
            ));
        }); 
        map.fitBounds(bounds);
        return bounds;
        // for (let marker of this.props.markers) {
        //   bounds.extend(
        //     new maps.LatLng(marker.lat, marker.lng)
        //   )
        // }
        // map.fitBounds(bounds)
    }

    afterMapLoadChanges = () => {        
        return (
            <div style={{display: 'block'}}>            
            <Polyline
                map={this.state.map}
                maps={this.state.maps}
                markers={this.props.markers}
                // markers={this.state.places}
            />
            </div>
        ) 
    }

    componentDidMount = () => {
        fetch('places.json')
        .then(response => response.json())
        .then(data => this.setState({ places: data.results }));
    }

    _onClick = ({x, y, lat, lng, event}) => {
        console.log(x, y, lat, lng, event);
        this.setState({ places: this.state.places });
        console.log(this.state.places);
    }
    addPlace = (place) => {
        this.setState({ places: place });
      };

    render () {
          
        const {places, mapsLoaded, map, maps,} = this.state;         
        return (        
            <Fragment >
            {mapsLoaded && <SearchBox map={map} maps={maps} addplace={this.addPlace} />}
            <GoogleMap onClick={this._onClick.bind(this)}
            bootstrapURLKeys={{key: 'AIzaSyC27MugzGiY-9Wi2b_8j4-xBuxMJEj-nY8',language:"ta",libraries: ['places', 'geometry'], }}
            // tyle={{height: '100vh', width: '100%'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps, places)}>
                {this.props.markers.map(marker => <Marker text={marker.label} lat={marker.lat} lng={marker.lng} />)}            
                {places && places.map(place => (
                    <Marker key={place.id} text={place.name} lat={place.geometry.location.lat} lng={place.geometry.location.lng}/>
                ))}
                {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}                
            </GoogleMap>
            </Fragment>
        )
    }
}

    Map.defaultProps = {
    markers: [
        {label:1, lat: 53.42728, lng: -6.24357},
        {label:2, lat: 43.681583, lng: -79.61146},
        {label:3, lat: 25.681583, lng: -8.61146},
    ],
    center: Map_Center, //[47.367347, 8.5500025],
    zoom: 4
    }

export default Map