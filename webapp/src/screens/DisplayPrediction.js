// import React, { Component, useState, useEffect } from 'react';
// import axios from 'axios';
// import classes from './DisplayPrediction.module.css';

import LoadImage from "./components/LoadImage"
import LoadPrediction from "./components/LoadPrediction"

export default function DisplayPrediction(){
  const BackgroundColour={
    backgroundImage: 
"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22xueFL2bEbFA3Wer404q2Yb0vku5H_t6gQ4202B7LzMiKeL2QYYT5rmAVuV2fRIvyQ8&usqp=CAU')",
    // height:'100vh',
    // marginTop:'-70px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return(
    <div style={BackgroundColour}>
      <h1>Display Predictions Page</h1>
      <LoadImage/>    
      <LoadPrediction/>
      
    </div>
  )
};