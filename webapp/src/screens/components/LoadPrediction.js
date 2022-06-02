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
    

    <div>
        <h1>The probability that you are natty is...</h1>
        <h3 style={{textAlign:'center'}}>{prediction} {'%'}</h3>
    </div>
  )
}

export default LoadPrediction;
