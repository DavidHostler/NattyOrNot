import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import UploadScreen from './screens/UploadScreen';

import Cart from './screens/cart/Cart';
 

import axios from 'axios';
import PostText from './screens/components/PostText';
import PostImage from './screens/components/PostImage';
import DisplayPrediction from './screens/DisplayPrediction';
import LoadImage from './screens/components/LoadImage';
import FetchImage from './screens/data/FetchImage';
// import FrontPage from './screens/design/FrontPage';








const api = axios.create({
  baseURL: `http://127.0.0.1:8000/tests/`
})



class App extends Component{
   

  render(){
    const BackgroundColour={
      backgroundImage: 
"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22xueFL2bEbFA3Wer404q2Yb0vku5H_t6gQ4202B7LzMiKeL2QYYT5rmAVuV2fRIvyQ8&usqp=CAU')",
      // height:'100vh',
      // marginTop:'-70px',
      // fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };
  
  // const uploadedImage = {
  //   image: 
  //   // border-radius: '8px',
  // }
  
  return(
    <div  style={BackgroundColour}>
    <main>
        {/* <PostText/> */}

        <PostImage/>
        <LoadImage/>
        <div>
        <DisplayPrediction/>
        </div>
    </main>
    </div>
  );
  
}

}

export default App;
 