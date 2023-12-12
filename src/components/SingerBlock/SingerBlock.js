import React from 'react';
import classes from "./SingerBlock.module.css";
import MyButton from "../MyButton/MyButton";
import singerOfDayPhoto from "../../img/og_buda_avatar.jpg"

const SingerBlock = ({to, name, years, info, style}) => {
    return (
        <div style={style} className = {classes.SingerBlock}>
            <img src={singerOfDayPhoto} alt="SingerPhoto"/>
            <div className={classes.SingerInfo}>
                <div>
                    <p>{name}</p>
                    <p>{years}</p>
                    <p>{info}</p>
                </div>
                <div>
                    <MyButton to={to}>Подробнее</MyButton>
                </div>
            </div>
        </div>
    );
};

export default SingerBlock;