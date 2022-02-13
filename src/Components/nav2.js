import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavDropdown } from "react-bootstrap";
import '../css/nav.css'

import {connect} from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            key: "",
            authstate: false
        })
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(skey) {
        skey.preventDefault()
        this.setState({
           key: skey 
        }
        )
        }
    render() {
        
        return (
            <div className="navigation">
            <Nav justify variant="tabs" onSelect={this.handleSelect} activeKey={this.state.key}
                 className={this.props.isauth ? "dont" : "container"}
            >
                <Nav.Item>
                    <Nav.Link eventKey="home" href="/">
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="about" title="about" href="/about">
                        About
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="for-recruitors" href="/for-recruitors">
                        For Recruitors
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Placement" id="nav-dropdown" >
                    <NavDropdown.Item href="/placement/recruitors">Recruitors</NavDropdown.Item>
                    <NavDropdown.Item href="/placement/placed-data">Placed</NavDropdown.Item>
                    <NavDropdown.Item href="/placement/policy">Policy</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link href="/contact">
                        Contacts
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <button>
                    <Nav.Link href="/login">
                        Login
                    </Nav.Link></button>
                </Nav.Item>
            </Nav></div>
        );
    }
}
const mapStateToProps=state =>({
    isauth: state.auth.isAuthenticated
}
)

export default connect(mapStateToProps)(App);