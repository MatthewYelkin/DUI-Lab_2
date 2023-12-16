import React from 'react';
import "./Footer.css"
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t, i18n} = useTranslation()

    return (
        <div className="Footer">
            <p>{t('footer_info')}</p>
        </div>
    );
};

export default Footer;