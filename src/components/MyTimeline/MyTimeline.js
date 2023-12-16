import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import "./MyTimeline.css";

const MyTimeline = ({discography}) => {
    return (
        <VerticalTimeline>
            {discography.map(({year, info})=>
                <VerticalTimelineElement
                    date = {year}
                    dateClassName = "date-color"
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(24,24,24,0.69)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #181818' }}
                    iconStyle={{ background: 'rgba(24,24,24,0.69)', color: '#fff' }}
                >
                    <p>{info}</p>
                </VerticalTimelineElement>
            )}
        </VerticalTimeline>
    );
};

export default MyTimeline;