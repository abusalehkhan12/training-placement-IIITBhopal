import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {logout} from '../actions/authAction'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props);
    }
    onlogout = e =>{
        e.preventDefault()
        this.props.logout()
    }
    render() {
        
        return (
            <div className="navigation" style={this.props.isauth ? {display:'block'} :{display:'none'}}>
            
                    <Link className="btn" to="/profile" >Profile</Link>
                    <Link className="btn" to="/profile/edit" >Edit Profile</Link>
                    <Link className="btn" to="/profile/change-password" >Change Password</Link>
                    <button onClick={this.onlogout}>Logout</button>
            </div>
        );
    }
}
const mapStateToProps=state =>({
    isauth: state.auth.isAuthenticated
}
)

export default connect(mapStateToProps, {logout})(App);