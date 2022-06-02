// import React, { Component, useState, useEffect } from 'react';
// import axios from 'axios';
// import classes from './DisplayPrediction.module.css';

import LoadImage from "./components/LoadImage"
import LoadPrediction from "./components/LoadPrediction"

export default function DisplayPrediction(){
  return(
    <div>
      <h1>Display Predictions Page</h1>
      <LoadImage/>
      <LoadPrediction/>
      
    </div>
  )
};