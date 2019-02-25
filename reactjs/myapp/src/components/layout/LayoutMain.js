import React, { Component } from 'react';   
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import {this.props.match.params.pageId} from "../pages/HomePage";
import NotFound from "../pages/NotFoundPage";

class DynamicImport extends Component {
    state = {
      component: null
    }
    componentDidMount () {console.log('Loading Component DID Mount');
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

  const Home = (props) => (
    <DynamicImport load={() => import('../pages/HomePage')}>
      {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
  )
  
  const Users = (props) => (
    <DynamicImport load={() => import('../pages/UsersPage')}>
      {(Component) => Component === null
        ? <p>Loading</p>
        : <p>Loading Users</p>}
        
    </DynamicImport>
  )
  
  const Drivers = (props) => (
    <DynamicImport load={() => import('../pages/DriversPage')}>
      {(Component) => Component === null
        ? <p>Loading</p>
        : <p>Loading drives</p>}
    </DynamicImport>
  )
  

class LayoutMain extends Component { 
    constructor(props){
        super(props);         
    }

    render() { 
        return ( 
            <Router><div>{`${this.props.match.params.pageId}Page`}
                <Switch>
                    <Route exact path="/" component={Home}/>
    
                    <Route path={`/:${this.props.match.params.pageId}`} component={`${this.props.match.params.pageId}Page`}/>                    
                    {/* <Route exact path='/Users' component={Users} />
                    <Route exact path='/Drivers' component={Drivers} /> */}
                    {/* <Route component={NotFoundPage} /> */}
                </Switch>
                {/* {this.props.match.params.pageId}</p> */} 
                {/* <Route exact path="/:pageId" component={`${this.props.match.params.pageId}Page`}/> */}
                {/* <Route exact path='/'render={(props) => <HomePage {...props} user = {this.state.user} />} /> */}
                {/* <Route path='/home'render={(props) => <Home {...props} user = {this.state.user} />} /> */}                
                </div>
                </Router> 
        );
    }
}   
 
export default LayoutMain;