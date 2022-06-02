// import React, { useEffect, useState, Component } from "react";
// // import axios from 'axios';
// //Rewrite this to fetch an array of image urls, form an a stack then pop the most 
// //Recent image as the one being used
// const imageUrl = "http://127.0.0.1:8000/media/images/pepe.jpg";

// function LoadImage() {
//   const [img, setImg] = useState();

//   const fetchImage = async () => {
//     const res = await fetch(imageUrl);
//     const imageBlob = await res.blob();
//     //console.log(imageBlob);
//     const imageObjectURL = URL.createObjectURL(imageBlob);
//     setImg(imageObjectURL);
//     console.log(res.blob());
//   };

//   useEffect(() => {
//     fetchImage();
//   }, []);

 

//   return (
//     <div className={classes['polaroid']}>
//       <img src={img} alt="icons" className={classes['img']}/>
//       <div className={classes['image_container']}/> 
//       <div className={classes['textbox']}>
//         <p>Your Physique</p>
//       </div>
//     </div>
//   );
// }

// export default LoadImage;



















import React, { useEffect, useState } from "react"
import classes from './css/LoadImage.module.css';

const LoadImage = () => {
  const [images, setImages] = useState([]);
  const [physique, setPhysique] = useState(null);
  
  

  const fetchData = () => {
    fetch("http://localhost:8000/images")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setImages(data);
       


//         In many REST frameworks, particularly Django, it's not uncommon to arrange data 
//         at a URL endpoint in order of oldest data to oldest data. Therefore when we set up
//         the image state variable as an array of image URL's from the Django REST endpoint,
//         it will be from oldest to most recent. 
//          
//         Treating the 'images' array as a stack data structure (Last-In/ First-Out)
//         allows us to retrieve the most recent image object in the array very easily.

          //  To do so, we simply pop the stack, and then this popped element from the end of the 
          //  array will correspond to the most recently added image in the JSON retrieved via the 
          //  GET request.

          //We shall name this popped object the 'physiqueObject'.

        const physiqueObject = data.pop();
        //Set the physique state variable to the .image attribute of the physiqueObject.
        setPhysique(physiqueObject.image);
        
      })
      //This is just to confirm that the data is what we'd expect.
      //The url endpoint for this specific picture will not be 
      //'localhost:8000/images' but will instead be 'localhost:8000/media/images'.
      //This is an idiosyncracy of Django's environment variables as laid out in settings.py.
      //Files like images aren't usually stored directly in a SQL database in this case, 
      //but rather an actual file folder in the Django project called 'media/images/'...
      console.log(physique);
      
     
  }

 

  useEffect(() => {
    fetchData();
  }, [])

  return (
    

    <div className={classes['polaroid']}>
       <img src={physique} alt="icons" className={classes['img']}/>
       <div className={classes['image_container']}/> 
       <div className={classes['textbox']}>
         <p>Your Physique</p>
       </div>
     </div>
  )
}

export default LoadImage
