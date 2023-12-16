import React from 'react';
import classes from "./SingerBlock.module.css";
import MyButton from "../MyButton/MyButton";
import {useTranslation} from "react-i18next";

const SingerBlock = ({page, name, years, info, style, img}) => {
    const {t, i18n} = useTranslation()

    return (
        <div style={style} className = {classes.SingerBlock}>
            <img
                src={require(`../../img/singers/avatars/${img}`)}
                alt="SingerPhoto"
            />
            <div className={classes.SingerInfo}>
                <div>
                    <p>{name}</p>
                    <p>{years}</p>
                    <p>{info}</p>
                </div>
                <div>
                    <MyButton page={page}>
                        {t('singerBlock_button')}
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default SingerBlock;