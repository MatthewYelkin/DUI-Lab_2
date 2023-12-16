import React from 'react';
import "./MyVideoFrame.css";

const MyVideoFrame = ({youtube_link}) => {
    return (
        <div className="video_wrapper">
            <iframe src={`https://www.youtube.com/embed/${youtube_link}`}
                allow="accelerometer; autoplay, picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};

export default MyVideoFrame;