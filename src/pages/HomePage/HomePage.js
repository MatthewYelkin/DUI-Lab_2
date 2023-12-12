import React from 'react';
import SingerOfDay from "../../components/SingerOfDay/SingerOfDay";
import Developers from "../../components/Developers/Developers";
import "./HomePage.css";
import AboutPlatform from "../../components/AboutPlatform/AboutPlatform";

const HomePage = () => {
    return (
        <div className="HomePage">
            <AboutPlatform/>
            <div className="main-section">
                <SingerOfDay/>
                <Developers/>
            </div>
        </div>
    );
};

export default HomePage;