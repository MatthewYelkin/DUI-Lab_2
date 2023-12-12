import React from 'react';
import "./SingerPage.css"
import logo from "../../img/og_buda_avatar.jpg"
import MyTimeline from "../../components/MyTimeline/MyTimeline";

const SingerPage = () => {
    return (
        <div className="SingerPage">
            <h1>OG BUDA</h1>
            <div className="SingerPage_PhotoAndText">
                <img src={logo} alt="SingerPhoto"/>
                <p>fdasfdsfads fdsf dsf dsfsd fds af ds af ds a fds a f dsa f ads sdafsdafdsafadsfads fdsfdsafsadf fadsfadsfadsf.<br/>fdasfdsfads fdsf dsf dsfsd fds af ds af ds a fds a f dsa f ads sdafsdafdsafadsfads fdsfdsafsadf fadsfadsfadsf. </p>
            </div>
            <MyTimeline/>
        </div>
    );
};

export default SingerPage;