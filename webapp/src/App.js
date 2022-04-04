import logo from './logo.svg';
import './App.css';
import UploadScreen from './screens/UploadScreen';

import Cart from './screens/cart/Cart';
 

import axios from 'axios';
import {Component} from 'react';
import PostText from './screens/components/PostText';
import PostImage from './screens/components/PostImage';
import DisplayImage from './screens/DisplayImage';








const api = axios.create({
  baseURL: `http://127.0.0.1:8000/tests/`
})



function App(){
   
  return(
    <main>
        {/* <PostText/> */}
        <PostImage/>
        {/* <DisplayImage/> */}

    </main>
  );
  
}

export default App;
 