import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DisplayImage from '../DisplayImage';




class PostImage extends Component {

  state = {
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    let url = 'http://localhost:8000/images/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
           
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>

        {/* Page Navigator Code */}
        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            }}
            >

              <Link to="/DisplayImage" component={DisplayImage}>
          <input type="submit"/>
              </Link>

        </nav>
        </form>
      </div>
    );
  }
}

export default PostImage;