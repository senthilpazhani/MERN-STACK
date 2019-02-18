import React, { Component } from 'react'; 
import LayoutHeader from "./components/layout/LayoutHeader";
import LayoutFooter from "./components/layout/LayoutFooter";
import LayoutMain from "./components/layout/LayoutMain";
import LayoutLeftNav from "./components/layout/LayoutLeftNav";
import LayoutLeftSlider from "./components/layout/LayoutLeftSlider";
import LayoutRightSlider from "./components/layout/LayoutRightSlider";

const leftMenu=[
  {parent:"",url:"./",text:"Home"},
  {parent:"",url:"./users.html",text:"Users"},
  {parent:"",url:"./vehicles.html",text:"Vehicles"},
  {parent:"",url:"./vehiclegroups.html",text:"Vehicle Groups"},
  {parent:"",url:"./vehiclemodels.html",text:"Vehicle Models"},
  {parent:"",url:"./drivers.html",text:"Drivers"},
  {parent:"",url:"./routes.html",text:"Routes"},
  {parent:"",url:"",text:"More Links",child:"morelinks"},
  {parent:"morelinks",url:"./renewalsupport.html",text:"Renewal Support"},
  {parent:"morelinks",url:"./techsupport.html",text:"Tech Support"},
  {parent:"morelinks",url:"./techupdates.html",text:"Tech Updates"},
];
// const leftMenu=[
//   {parent:'',url:'./',text:[<i className="fa fa-fw fa-home"></i>, <span>Home</span>]},
//   {parent:'',url:'./users.html',text:[<i className="fa fa-fw fa-home"></i>, <span>Users</span>]},
//   {parent:'',url:'./vehicles.html',text:[<i className="fa fa-fw fa-home"></i>, <span>Vehicles</span>]},
//   {parent:'',url:'./vehiclegroups.html',text:[<i className="fa fa-fw fa-home"></i>, <span>Vehicle Groups</span>]},
//   {parent:'',url:'./vehiclemodels.html',text:[<i className="fa fa-fw fa-home"></i>, <span>Vehicle Models</span>]},
//   {parent:'',url:'./drivers.html',text:[<i className="fa fa-fw fa-home"></i>, <span>Drivers</span>]},
//   {parent:'',url:'./routes.html',text:[<i className="fa fa-fw fa-home"></i>, <span>Routes</span>]},
//   {parent:'',url:'',text:[<i className="fa fa-fw fa-home"></i>, <span>More Links</span>],child:'morelinks'},
//   {parent:'morelinks',url:'./renewalsupport.html',text:'Renewal Support'},
//   {parent:'morelinks',url:'./techsupport.html',text:'Tech Support'},
//   {parent:'morelinks',url:'./techupdates.html',text:'Tech Updates'},
// ];

class App extends Component {
  render() {
    return (
      <div>
        <LayoutHeader />
        <LayoutLeftNav links={leftMenu} />
        <LayoutLeftSlider />
        <LayoutRightSlider />
        <LayoutMain />
        <LayoutFooter />
      </div>
    );
  }
}   
export default App;
