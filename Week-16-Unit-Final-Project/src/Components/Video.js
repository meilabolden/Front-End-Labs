import React from "react";
import { PropTypes } from "prop-types";

// TRH origin video

const Video = ({embedId}) => (
    <div className="video-responsive">
        <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/rHvPVLk8RxM/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="YouTube video player"
         />
    </div>
);

Video.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
  export default Video;

