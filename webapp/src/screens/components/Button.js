import React, { Fragment, Component } from 'react';


const Button = (props) => {
    const styles = {
        position: 'relative',
        left: '42.5%',
        width: '150px',
        height: '75px',
        backgroundColor: 'green',
        color: 'blue',
        borderRadius:'9px',
        
    }
    return (
        <div>
            <button style={styles}>{props.children}</button>
        </div> 
    );
}

export default Button;  