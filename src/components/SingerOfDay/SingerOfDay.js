import React from 'react';
import "./SingerOfDay.css";
import SingerBlock from "../SingerBlock/SingerBlock";

const SingerOfDay = () => {
    return (
        <div className = "SingerOfDay">
            <h1>Исполнитель дня</h1>
            <div>
                <SingerBlock style = {{marginTop: "-120px"}}/>
            </div>
        </div>
    );
};

export default SingerOfDay;