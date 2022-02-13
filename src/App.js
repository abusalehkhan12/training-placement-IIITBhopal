import { React, Component , Rou} from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import Store from './store'

import Header from './Components/header'

{/*import Footer from './Components/footer'

import Nav2 from './Components/nav2'

import Home from './pages/home'
import About from './pages/about'
import For_recruitors from './pages/for_recruitors'
import Recruitors from './pages/recruitors'
import Placed_data from './pages/placed_data'
import Placement_policy from './pages/placement_policy'
import Login from './pages/login'
import Contact from './pages/contact'

import Profile from './Login/login-pages/profile'
import Editprofile from './Login/login-pages/editprofile'
import Changepassword from './Login/login-pages/changepassword'
import ProfileNav from './Login/login-pages/profile_nav'

import PrivateRoute from './Components/privateRoute';


import './css/app.css'
import setAuthToken from './Login/utilities/setAuthToken';
import jwtDecode from 'jwt-decode';
import { setcurrentuser } from './Login/actions/authAction';
import {connect} from 'react-redux'

*/}
{/*
if (localStorage.jwtToken){
  const token=localStorage.jwtToken
  setAuthToken(token)
  Store.dispatch(setcurrentuser(token))
}*/}


  class App extends Component {
    constructor(){
      super()
      
    }
    
    render() {
      return (
        <div className="app">
              <div >
                <Header />
              </div>
        </div>
        
        

      );
    }
  }



export default App;
