import React from 'react';
import "./MyMapFrame.css"

const MyMapFrame = ({map_link}) => {
    return (
        <div className="map_wrapper">
            <iframe
                src={map_link}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="singer_map"
            />
        </div>
    );
};

export default MyMapFrame;