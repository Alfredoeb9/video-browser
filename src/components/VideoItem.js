import './VideoItem.css';
import React from 'react';
// import VideoList from './VideoList';

// destruct props 
const VideoItem = ({video, onVideoSelect}) => {
  return (

  // When that video is clicked pass data as well (video)
  <div onClick={() => {onVideoSelect(video)}} className="video-item item">
    <img 
      className="ui image" 
      src={video.snippet.thumbnails.medium.url} 
      alt={video.snippet.description}

    />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
  );
}

export default VideoItem;