import React from 'react';

import classes from './DisplayImage.module.css';

const DisplayImage = () => {
    let imgs = [
      'https://www.forbes.com/advisor/wp-content/uploads/2021/04/dogecoin.jpeg.jpg'
    ]
    
    return(
        <div class={classes['card']}>
        <img src={imgs[0]}/>  
      </div>
    );

}



export default DisplayImage;