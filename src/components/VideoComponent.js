// VideoComponent.js
import React from 'react';

const VideoComponent = () => {
  const videoUrl = 'https://player.vimeo.com/progressive_redirect/playback/788815108/rendition/1080p/file.mp4?loc=external&signature=62d9fe97228e75ffd2ca5113830bb9d0eaba5403889c444f1a9bbf44be0970a9'; // Replace this with the actual video file path in your project

  return (
    <div>
      <video controls width="100%" height="100%" autoPlay muted loop>
        <source src={videoUrl} type="video/mp4" />
        {/* Add more <source> tags for other video formats if needed */}
      </video>
    </div>
  );
};

export default VideoComponent;