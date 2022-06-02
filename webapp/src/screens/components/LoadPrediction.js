import React, { useEffect, useState } from "react"
import classes from './css/LoadImage.module.css';

const LoadPrediction = () => {
  const [predictions, setPredictions] = useState([]);
  const [prediction, setPrediction] = useState(null);
  
  

  const fetchData = () => {
    fetch("http://localhost:8000/predictions")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPredictions(data);
       



        const predictionObject = data.pop();

        setPrediction(predictionObject.preds);
        
      })
     
      console.log(prediction);
      
     
  }

 

  useEffect(() => {
    fetchData();
  }, [])

  return (
    

    // <div className={classes['polaroid']}>
    //    <img src={prediction} alt="icons" className={classes['img']}/>
    //    <div className={classes['image_container']}/> 
    //    <div className={classes['textbox']}>
    //      <p>Your prediction</p>
    //    </div>
    //  </div>
    
    <div>
        <h1>The probability that you are natty is...</h1>
        <h3 style={{textAlign:'center'}}>{prediction} {'%'}</h3>
    </div>
  )
}

export default LoadPrediction;
