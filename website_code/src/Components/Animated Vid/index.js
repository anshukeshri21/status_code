import React, { useRef } from 'react';
import anime from '../../Videos/0823.mp4'

function VideoComponent() {
  const videoRef = useRef(null);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        controls
      >
        <source src={anime} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
