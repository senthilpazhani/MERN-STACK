import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LayoutHeader from "./components/layout/LayoutHeader";
import LayoutFooter from "./components/layout/LayoutFooter";
import LayoutMain from "./components/layout/LayoutMain";
//import LayoutLeftNav from "./components/layout/LayoutLeftNav";
import LayoutLeftSlider from "./components/layout/LayoutLeftSlider";
import LayoutRightSlider from "./components/layout/LayoutRightSlider";

const leftMenu=[
  {parent:"",url:"./Dashboard",text:"Dashboard"}, 
  {parent:"",url:"./Users",text:"Users"},
  {parent:"",url:"./Vehicles",text:"Vehicles"},
  {parent:"",url:"./VehicleGroups",text:"Vehicle Groups"},
  {parent:"",url:"./VehicleModels",text:"Vehicle Models"},
  {parent:"",url:"./Drivers",text:"Drivers"},
  {parent:"",url:"./Routes",text:"Routes"},
  {parent:"",url:"",text:"More Links",child:"morelinks"},
  {parent:"morelinks",url:"./RenewalSupport",text:"Renewal Support"},
  {parent:"morelinks",url:"./TechSupport",text:"Tech Support"},
  {parent:"morelinks",url:"./TechUpdates",text:"Tech Updates"},
];

// const leftMenu=[
//   {parent:'',url:'./',text:[<i className="fa fa-fw fa-home"></i>, <span>Home</span>]},
//   {parent:'',url:'./users',text:[<i className="fa fa-fw fa-home"></i>, <span>Users</span>]},
//   {parent:'',url:'./vehicles',text:[<i className="fa fa-fw fa-home"></i>, <span>Vehicles</span>]},
//   {parent:'',url:'./vehiclegroups',text:[<i className="fa fa-fw fa-home"></i>, <span>Vehicle Groups</span>]},
//   {parent:'',url:'./vehiclemodels',text:[<i className="fa fa-fw fa-home"></i>, <span>Vehicle Models</span>]},
//   {parent:'',url:'./drivers',text:[<i className="fa fa-fw fa-home"></i>, <span>Drivers</span>]},
//   {parent:'',url:'./routes',text:[<i className="fa fa-fw fa-home"></i>, <span>Routes</span>]},
//   {parent:'',url:'',text:[<i className="fa fa-fw fa-home"></i>, <span>More Links</span>],child:'morelinks'},
//   {parent:'morelinks',url:'./renewalsupport',text:'Renewal Support'},
//   {parent:'morelinks',url:'./techsupport',text:'Tech Support'},
//   {parent:'morelinks',url:'./techupdates',text:'Tech Updates'},
// ];

class DynamicImport extends Component {
    state = {
      component: null
    }
    componentDidMount () {
      this.props.load()
        .then((component) => {
          this.setState(() => ({
            component: component.default ? component.default : component
          }))
        })
    }
    render() {
      return this.props.children(this.state.component)
    }
}

const Dashboard = (props) => (
    <DynamicImport load={() => import('./components/pages/DashboardPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const Home = (props) => (
    <DynamicImport load={() => import('./components/pages/HomePage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const Users = (props) => (
    <DynamicImport load={() => import('./components/pages/UsersPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const Vehicles = (props) => (
    <DynamicImport load={() => import('./components/pages/VehiclesPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const VehicleGroups = (props) => (
    <DynamicImport load={() => import('./components/pages/VehicleGroupsPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const VehicleModels = (props) => (
    <DynamicImport load={() => import('./components/pages/VehicleModelsPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const Drivers = (props) => (
    <DynamicImport load={() => import('./components/pages/DriversPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const Routes = (props) => (
    <DynamicImport load={() => import('./components/pages/RoutesPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const RenewalSupport = (props) => (
    <DynamicImport load={() => import('./components/pages/RenewalSupportPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const TechSupport = (props) => (
    <DynamicImport load={() => import('./components/pages/TechSupportPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)

const TechUpdates = (props) => (
    <DynamicImport load={() => import('./components/pages/TechUpdatesPage')}>
        {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
)
class App extends Component {
    _toggleDropdown=(event)=>{
        var _targetDropdown = event.target.dataset.src; 
        this.refs[_targetDropdown].classList.toggle('w3-show');    
    }

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

  render() {
    return (<Router>
        <div>
          <LayoutHeader />
          <aside id="leftmenubar"> 
              <nav id="leftsidenav">          
                  {leftMenu.map((link, index) => (
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
                                      {leftMenu.filter(sublink => sublink.parent===link.child).map((sublink, index) => (
                                      <Link to={sublink.url} className="w3-bar-item w3-button">{sublink.text}</Link> 
                                      ))}  
                                  </div>
                              </div>
                          :''                        
                  ))}
                  
              </nav>
          </aside>                
          <LayoutLeftSlider />
          <LayoutRightSlider />
            <main id="main">
                <div id="leftSidenavIcon" className="leftSidenavIcon">
                    <a className="w3-button w3-circle w3-blue-grey w3-medium" id="leftsideslidebar_closebtn" href="#" 
                    data-src="leftsideslidebar" onClick={this._sideslidePanel.bind(this)}><i className="fa fa-filter w3-large"></i></a>
                </div>
                <div id="rightSidenavIcon" className="rightSidenavIcon">
                    <a className="w3-button w3-circle w3-blue-grey w3-small" id="rightsideslidebar_closebtn" href="#" 
                    data-src="rightsideslidebar" onClick={this._SlidePanel_toggle.bind(this)}><i className="fa fa-hand-o-left w3-large"></i></a></div>
                <Route exact path="/" component={Home} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/Users" component={Users} />
                <Route exact path="/Vehicles" component={Vehicles} />
                <Route exact path="/VehicleGroups" component={VehicleGroups} />
                <Route exact path="/VehicleModels" component={VehicleModels} />
                <Route exact path="/Drivers" component={Drivers} />
                <Route exact path="/Routes" component={Routes} />
                <Route exact path="/RenewalSupport" component={RenewalSupport} />
                <Route exact path="/TechSupport" component={TechSupport} />
                <Route exact path="/TechUpdates" component={TechUpdates} />
                <div id="mainfooter">
                    <nav className="w3-bottom" id="mainfooternavbar" style={{"z-index":0}}>
                        <div className="w3-bar w3-theme-d2 w3-left-align">
                            <a href="#" className="w3-bar-item w3-button 3-hide-small w3-padding-large w3-hover-none"><i className="fa fa-star"></i> <span>Powered by PSK</span></a>
                        </div>
                    </nav>
                </div>
            </main>
          <LayoutFooter />
        </div>
      </Router>
    );
  }
}

export default App;
