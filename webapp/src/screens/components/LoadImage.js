import React, { useEffect, useState, Component } from "react";
// import axios from 'axios';
import classes from './css/LoadImage.module.css';
//Rewrite this to fetch an array of image urls, form an a stack then pop the most 
//Recent image as the one being used
const imageUrl = "http://127.0.0.1:8000/media/images/pepe.jpg";

function LoadImage() {
  const [img, setImg] = useState();

  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    //console.log(imageBlob);
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

 

  return (
    <div className={classes['polaroid']}>
      <img src={img} alt="icons" className={classes['img']}/>
      <div className={classes['image_container']}/> 
      <div className={classes['textbox']}>
        <p>Your Physique</p>
      </div>
    </div>
  );
}

export default LoadImage;
