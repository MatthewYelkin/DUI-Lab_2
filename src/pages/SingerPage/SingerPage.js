import React from 'react';
import "./SingerPage.css"
import MyTimeline from "../../components/MyTimeline/MyTimeline";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import singers from "../../data/singers.json"
import MyVideoFrame from "../../components/MyVideoFrame/MyVideoFrame";
import MyCarousel from "../../components/MyCarousel/MyCarousel";
import MyMapFrame from "../../components/MyMapFrame/MyMapFrame";

const SingerPage = () => {
    const {t, i18n} = useTranslation()

    const params = useParams();
    const singer = params.id;

    return (
        <div className="SingerPage">
            <h1>{singers[singer]["nick"]}</h1>
            <div className="SingerPage_PhotoAndText">
                <img src={require(`../../img/singers/avatars/${singer}.png`)} alt={`${singers[singer]["nick"]}'s photo`}/>
                <div className="singerInfo">
                    <p>{t('singerPage_birthDate')}{t(`singers.${singer}.birth_date`)}</p>
                    <p>{t(`singers.${singer}.short_info`)}</p>
                    <p>{t(`singers.${singer}.full_info`)}</p>
                </div>
            </div>
            <h2>{t('singerPage_discography')}</h2>
            <MyTimeline discography={singers[singer].Discography}/>
            <h2>{t('singerPage_albums')}</h2>
            <MyCarousel singer={singer} albums={singers[singer]["albums"]}/>
            <MyVideoFrame youtube_link={singers[singer]["youtube_link"]}/>
            <h2>{t('singerPage_hometown')}</h2>
            <MyMapFrame map_link={singers[singer]["map_link"]}/>
        </div>
    );
};

export default SingerPage;