import React, { useEffect, useState, Component } from "react";
import axios from 'axios';
//import classes from './css/FetchImage.module.css';

class FetchImage extends Component {
    state = { 
      imageUrls: []
    }
    
    componentDidMount = async() => {
      axios.get(`http://localhost:8000/images`)
        .then(res => {
          const [img, setImg] = useState();
          const imageUrls = res.data;
          console.log("The following urls are: ")
          console.log(imageUrls);
          this.setState({ imageUrls });
          
          console.log("The most recent image is: ");
          console.log(this.state.imageUrls[0]);
          
          const imageUrl = this.state.imageUrls[0];
          //Fetching this image
          // const [img, setImg] = useState();
          //const res =  fetch(imageUrl);
          const value = fetch(imageUrl);
          const imageBlob =  value.blob();
      //console.log(imageBlob);
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setImg(imageObjectURL);
          const { savedImage } = this.state;
          localStorage.setItem('saved image', savedImage);
          console.log("Item is saved...");
          

        }
  
        )
    }
  
     
  
     
  
  
    render() {
      
      return (
        <div>
          <img src={this.setState.imageUrl} alt="icons" />
          
          
          
        </div>
      )
    }
  };
  
  export default FetchImage;