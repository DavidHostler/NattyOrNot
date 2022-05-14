import React, { Component } from 'react';
import axios from 'axios';
import classes from './DisplayPrediction.module.css';

class DisplayPrediction extends  Component{
    // let imgs = [
    //   'https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg.jpg'
    // ]
    
    // return(
    //     <div class={classes['card']}>
    //     <img src={imgs[0]}/>  
    //   </div>
    // );

  state = {
    preds: []
  }
//OG code to console log the path of the image. We really want to console log the response from the 
//URL endpoint
  // componentDidMount() {
  //   axios.get(`http://localhost:8000/images`)
  //     .then(res => {
  //       const preds = res.data;
  //       this.setState({ preds });
        
  //     }

  //     )
  // }
  componentDidMount() {
    axios.get(`http://localhost:8000/predictions`)
      .then(res => {
        const preds = res.data;
        console.log(preds);
        this.setState({ preds });
        
      }

      )
  }
  
 

  render() {
   
    return (
      <div>
        
        {
          this.state.preds
            .map(pred =>
              <div   className={classes['predictionStyle']}>
                {'The probability of you being natural is: ' + pred.preds}
              </div>
            )
        }
            {/* {console.log(this.state.preds)} */}
        
        
      </div>
    )
  }
}




export default DisplayPrediction;