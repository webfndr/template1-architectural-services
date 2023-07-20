// VideoComponent.js
import React from 'react';

const VideoComponent = () => {
  const videoUrl = 'https://download-video.akamaized.net/2/playback/d58ca736-c27b-440f-be00-1aa53bd54648/5c90f087-83dde9a9?__token__=st=1689438615~exp=1689453015~acl=%2F2%2Fplayback%2Fd58ca736-c27b-440f-be00-1aa53bd54648%2F5c90f087-83dde9a9%2A~hmac=e91450528636c7fb2f8a8b4dbd7474d24c32179bc5645098823374fe5fa4dbe4&r=dXMtY2VudHJhbDE%3D'; // Replace this with the actual video file path in your project

  return (
    <div>
      <video controls width="100%" height="100%" autoPlay muted loop>
        <source src={videoUrl} type="video/mp4" />
        {/* Add more <source> tags for other video formats if needed */}
      </video>
      <div className="intro-title">
        <p>
          We Are<br />
          A Possibilities<br />
          Company
        </p>
      </div>
    </div>
  );
};

export default VideoComponent;
