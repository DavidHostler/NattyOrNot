// import React, { Component, useState, useEffect } from 'react';
// import axios from 'axios';
// import classes from './DisplayPrediction.module.css';
// import { response } from 'express';

// class DisplayPrediction extends  Component{
    

//   state = {
//     predictions: []
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:8000/predictions`)
//       .then(res => {
//         const len = res.data.length
//         const predictions = res.data    
//         const data_ = predictions.pop();
//         console.log(predictions[0]);
//         this.setState({predictions});
//         // this.state.predictions = [predictions[0]]
        
//       }

//       )
//   }
  
//   render() {
   
//     return (
//       <div>
        
//         {
//           this.state.predictions
//             .map(pred =>
//               <div   className={classes['predictionStyle']}>
//                 {'The probability of you being natural is: ' + pred.predictions}
//               </div>
//             )
//         }
//             {/* {console.log(this.state.predictions)} */}
//         {/* <h1>{this.state.data_}</h1> */}
        
//       </div>
//     )
//   }
// }




// export default DisplayPrediction;

// // function DisplayPrediction(){
  
// //   const [predictions, setPredictions] = useState(null);
  
// //   useEffect(() => {
// //     axios.get(`http://localhost:8000/predictions`).then(
// //       (response=>{
// //         setPredictions(response.data);
// //       })
// //     )
// //   }, []);


// //   return(
// //     <div>
// //       <h1>{predictions.preds}</h1>
// //     </div>
// //   )
// // }


// // export default DisplayPrediction;
export default function DisplayPrediction(){
  return(
    <div>
      <h1>Welcome to The next page!</h1>
    </div>
  )
}