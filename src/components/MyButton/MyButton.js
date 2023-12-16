import React from 'react';
import classes from "./MyButton.module.css";
import {Link} from "react-router-dom";

const MyButton = ({children, page}) => {
    return (
        <Link to={page}>
            <button className={classes.MyButton}>
                {children}
            </button>
        </Link>
    );
};

export default MyButton;