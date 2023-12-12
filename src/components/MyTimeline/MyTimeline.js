import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const MyTimeline = ({id, props}) => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                date = "2000"
                dateClassName = "date-color"
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(24,24,24,0.69)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #181818' }}
                iconStyle={{ background: 'rgba(24,24,24,0.69)', color: '#fff' }}
            >
                <p>fdsfdsfdsfds</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};

export default MyTimeline;