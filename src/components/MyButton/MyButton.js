import React from 'react';
import classes from "./MyButton.module.css";
import {Link} from "react-router-dom";

const MyButton = ({children, to, props}) => {
    return (
        <Link to={to}>
            <button {...props} className={classes.MyButton}>
                {children}
            </button>
        </Link>
    );
};

export default MyButton;