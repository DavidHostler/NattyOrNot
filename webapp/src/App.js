import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Button from './screens/components/Button';
import LoadImage from './screens/components/LoadImage';
import PostImage from './screens/components/PostImage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import DisplayPrediction from './screens/DisplayPrediction';
import FrontPage from './screens/design/FrontPage';
// import



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
  
 
  
  return(
    // <div  style={BackgroundColour}>
    //   {/* <Router> */}
    //     {/* <PostText/> */}
        
    //     <PostImage/>
    //     <LoadImage/>
    //     <div>
    //     {/* <DisplayPrediction/> */}
    //     </div>
    //   {/* <Routes>
    //     <Route to="/DisplayPrediction" element={<DisplayPrediction/>}/>
    //   </Routes> */}
    //   {/* </Router> */}
   
    // </div>
   
    <div  style={BackgroundColour}>
            <PostImage/>
           
        <nav>
          <Link to="/DisplayPrediction">
          <Button children="To Predictions"/>
          </Link>
        </nav>
        
        <Routes>
          <Route path="DisplayPrediction" element={<DisplayPrediction/>}/>
        </Routes>
        </div>
  );
  
}

}


export default App;
 