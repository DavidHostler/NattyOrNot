import React, { Component } from 'react';
import axios from 'axios';
export default class PostText extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
        }
    }
    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
   
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            name: this.state.name,
        };
        axios.post('http://localhost:8000/tests/', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '' })
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}