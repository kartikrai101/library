import React from 'react';
import classes from './Icons.module.css';

const Icon = (props) => {
    return(
        <span>
            <img src={props.source} className={classes.icon} alt={props.alt}></img>
        </span>
    );
}

export default Icon;