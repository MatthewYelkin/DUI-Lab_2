import React from 'react';
import {Card, Stack} from "react-bootstrap";
import "./Developers.css"
import {useTranslation} from "react-i18next";
import arrayOfDevs from "../../data/developers.json";

const Developers = () => {
    const {t, i18n} = useTranslation()

    const developers = t('developers', {returnObjects: true})

    return (
        <Stack className="developers-section">
            <h2 className="heading_developers">{t('developers_developers')}</h2>
            <div className="developers">
                {developers.map((devs, index)=>
                    <Card className="developer-card">
                        <Card.Img src={require(`../../img/developers/${arrayOfDevs.developers[index].img}`)} className="developer-photo"/>
                        <Card.Body className="developer-info">
                            <Card.Title className="developer-name">{t(devs.name) + " " + t(devs.surname)}</Card.Title>
                            <a href={arrayOfDevs.developers[index].github} target="_blank" className="button-git">{t('developers_github')}</a>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </Stack>
    );
};

export default Developers;