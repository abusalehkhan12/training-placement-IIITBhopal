import React, { Component } from 'react'
import axios from 'axios'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'

export class editprofile extends Component {
    constructor() {
        super()
        this.state=({
            profiledata:[],
            id: 0
        })
        //change
        /*axios.post("https://reqres.in/api/users/2")
        .then(res=>{
            this.setState({
            profiledata: res.data,
            id: res.data.id
            })
        })*/
        this.onchange=this.onchange.bind(this)
        this.onsubmit=this.onsubmit.bind(this)

    }
    onchange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onsubmit(e){
        e.preventDefault()
        const details={
            "id" : this.state.id
        }
    }
    render() {
        
        return (
            <div>
                <form className="EditProfile" onSubmit={this.onsubmit}>
                    <div>
                        <h3>ID</h3>
                        <input
                            type="text"
                            placeholder="Id"
                            name="id"
                            className="box"
                            value={this.state.id}
                            onChange={this.onchange}
                            required
                        />
                    </div><hr />
                    <div><hr />
                        <button className="button" >Save</button>
                    </div>
                </form>
            </div>
        ) 
    }
}

export default editprofile
