import React from 'react';
import classes from "./SingerBlock.module.css";
import MyButton from "../MyButton/MyButton";
import singerOfDayPhoto from "../../img/og_buda_avatar.jpg"

const SingerBlock = (props) => {
    return (
        <div {...props} className = {classes.SingerBlock}>
            <img src={singerOfDayPhoto} alt="PHOTO"/>
            <div className={classes.SingerInfo}>
                <div>
                    <p>Имя</p>
                    <p>Годы</p>
                    <p>Краткая информацияКраткая я информацияя информацияя информацияя информацияинформация</p>
                </div>
                <div>
                    <MyButton>Подробнее</MyButton>
                </div>
            </div>
        </div>
    );
};

export default SingerBlock;