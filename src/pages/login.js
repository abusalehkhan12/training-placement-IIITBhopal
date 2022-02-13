import React, { Component } from 'react'
import '../css/login.css';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../Login/actions/authAction'

//import classnames from "classnames"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.onchange = this.onchange.bind(this)
        this.onsubmit = this.onsubmit.bind(this)
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/profile")
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.auth.isAuthenticated){
            this.props.history.push("/profile")
        }
       
    }


    onchange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    onsubmit(e) {
        e.preventDefault()
        const user={
            "email":this.state.email,
            "password":this.state.password
        }
        this.props.login(user);
    }

    render() {

        return (
            <div className="login-wrapper">
                <div className="login-box">
                    <h1 >Login</h1>
                </div>
                <form className="login" onSubmit={this.onsubmit}>
                    <div>
                        <h3>Email</h3>
                        <input
                            type="text"
                            placeholder="something@something.com"
                            name="email"
                            className="box"
                            onChange={this.onchange}
                            required
                        />
                    </div><hr />
                    <div>
                        <h3>Password</h3>
                        <input
                            type="password"
                            placeholder="passowrd"
                            name="password"
                            className="box"
                            onChange={this.onchange}
                            required
                        />
                    </div>
                    <div><hr />
                        <button className="button" >Login</button>
                    </div>
                </form>
                <div className="Note-box">
                    <h3 >****Note-If you forgot the password or UserID. Kindly Contact Admin.</h3>
                </div>
            </div>
        )
    }
}
Login.propTypes={
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps =state =>({
    auth:state.auth
})

export default connect(mapStateToProps, {login})(Login);
