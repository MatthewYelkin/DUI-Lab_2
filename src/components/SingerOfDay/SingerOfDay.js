import React from 'react';
import classes from "./SingerOfDay.module.css";
import MyButton from "../MyButton/MyButton";
import singerOfDayPhoto from "../../img/og_buda_avatar.jpg"

const SingerOfDay = () => {
    return (
        <div className = {classes.SingerOfDay}>
            <h1>Исполнитель дня</h1>
            <div>
                <div className = {classes.SingerBlock}>
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
            </div>
        </div>
    );
};

export default SingerOfDay;