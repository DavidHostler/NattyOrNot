import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PostImage from './screens/components/PostImage';
import DisplayPrediction from './screens/DisplayPrediction';


const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="PostImage" element={<PostImage/>}/>
    <Route path="DisplayPrediction" element={<DisplayPrediction/>}/>
  </Routes>
  </BrowserRouter>,
  rootElement
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
