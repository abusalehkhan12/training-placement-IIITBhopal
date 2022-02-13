import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../image/college_logo.png'
import { Link } from 'react-router-dom'
import '../css/header.css'

import { connect } from 'react-redux'

class App extends Component {
    

    render() {

        return (
            <div className="header-container">
                    <Link to={this.props.isauth ? "/profile" : "/"} className="header-link" >
                        <ul className="list">
                            <li><img src={Logo} alt="logo" className="logo" /></li>
                            <div className="header-text-container">
                                <li><h2>Indian Institute of Information Technology, Bhopal</h2></li>
                                <li><h2>Training and Placement Cell</h2></li>
                            </div>
                        </ul>
                    </Link>
                </div>
        );
    }
}
const mapStateToProps = state => ({
    isauth: state.auth.isAuthenticated
}
)

export default connect(mapStateToProps)(App);

