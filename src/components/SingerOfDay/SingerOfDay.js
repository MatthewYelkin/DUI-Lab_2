import React from 'react';
import "./SingerOfDay.css";
import SingerBlock from "../SingerBlock/SingerBlock";
import {useTranslation} from "react-i18next";
import singers from "../../data/singers.json"

const SingerOfDay = () => {
    const {t, i18n} = useTranslation()

    const singer = Object.keys(singers)[Math.floor(Math.random() * 5)]

    return (
        <div className = "SingerOfDay">
            <h1>{t('singerOfDay_singerOfDay')}</h1>
            <div>
                <SingerBlock
                    img={`${singer}.png`}
                    name={singers[singer]["nick"]}
                    years={t(`singers.${singer}.birth_date`)}
                    info={t(`singers.${singer}.short_info`)}
                    page={`/artists/${singer}`}
                    style ={{marginTop: "-120px"}}
                />
            </div>
        </div>
    );
};

export default SingerOfDay;