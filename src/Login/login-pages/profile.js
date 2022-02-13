import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"

import axios from 'axios'


class Profile extends Component {
    constructor() {
        super()
        this.state=({
            profiledata:[]
        })
        //change
            axios.post("https://reqres.in/api/users/2")
            .then(res=>{
                console.log(res.data)
                this.setState({
                    profiledata: res.data
                })
            })
    }
    
    render() {
        const { user } = this.props.auth
        return (
            //change
            <div>
                <div>
                    {this.state.profiledata.id}    
                </div>
            </div>
        )
    }
}
Profile.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Profile);