import React, { Fragment, Component } from 'react';

const Button = (props) => {
    return (
        <div className={""}>
            <button type="button" className={"btn btn-success"}>{props.children}</button>
        </div> 
    );
}

export default Button;  