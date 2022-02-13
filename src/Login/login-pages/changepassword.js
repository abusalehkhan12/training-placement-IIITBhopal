import axios from 'axios'
import React, { Component } from 'react'

export class changepassword extends Component {
    constructor(){
        super()
        this.state=({
            password: "",
            password2: "",
            oldpassword: ""
        })
        this.onChangePassword=this.onChangePassword.bind(this)
        this.onchange=this.onchange.bind(this)
    }
    onChangePassword (e) {
        e.preventDefault()
        if(this.state.password != this.state.password2){
            alert('New and Confirm New Password must be Same')
        }
        else{
        /*axios.get('/changepassword')
        .then(res=>{
            if(res.data=="success"){
                alert('Password Succefully Changed')
            }
            else{
                alert('unexpected error. Kindly Retry')
            }
        })*/}
    }
    onchange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form className="changePassword" onSubmit={this.onChangePassword}>
                    <div>
                        <h3>Old Password</h3>
                        <input
                            type="password"
                            placeholder="Old Password"
                            name="oldpassword"
                            className="box"
                            onChange={this.onchange}
                            required
                        />
                    </div><hr />
                    <div>
                        <h3>New Password</h3>
                        <input
                            type="password"
                            placeholder="New Passowrd"
                            name="password"
                            className="box"
                            onChange={this.onchange}
                            required
                        />
                    </div><hr />
                    <div>
                        <h3>Confirm New Password</h3>
                        <input
                            type="password"
                            placeholder="Confirm Passowrd"
                            name="password2"
                            className="box"
                            onChange={this.onchange}
                            required
                        />
                    </div>
                    <div><hr />
                        <button className="button" >Change Password</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default changepassword
