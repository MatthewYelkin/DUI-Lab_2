import React from 'react';
import "./AboutPlatform.css"
import {useTranslation} from "react-i18next";

const AboutPlatform = () => {
    const {t, i18n} = useTranslation()

    return (
        <div className="AboutPlatform">
            <div className="AboutPlatform_left">
                <h1>{t('aboutPlatform_info1')}</h1>
            </div>
            <div className="AboutPlatform_right">
                <p>{t('aboutPlatform_info2')}<br/><br/>{t('aboutPlatform_info3')}</p>
            </div>
        </div>
    );
};

export default AboutPlatform;