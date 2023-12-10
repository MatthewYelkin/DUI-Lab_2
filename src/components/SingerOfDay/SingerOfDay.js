import React from 'react';
import classes from "./SingerOfDay.module.css";
import MyButton from "../MyButton/MyButton";
import singerOfDayPhoto from "../../img/og_buda_avatar.jpg"

const SingerOfDay = () => {
    return (
        <div className = {classes.SingerOfDay}>
            <h1>Исполнитель дня</h1>
            <div className = {classes.SingerBlock}>
                <img src={singerOfDayPhoto} alt="PHOTO"/>
                <div className="SingerInfo">
                    <p>Имя</p>
                    <p>Годы</p>
                    <p>Краткая информация</p>
                    <MyButton>Подробнее</MyButton>
                </div>
            </div>
        </div>
    );
};

export default SingerOfDay;