import React from 'react';
import VideoItem from './VideoItem';

// destruct props 
const VideoList = ({ videos, onVideoSelect}) => {
  // go over the list of items of the videos and store them into video
  const renderedList = videos.map((video) => {
    return (
      <VideoItem 
        onVideoSelect={onVideoSelect} 
        video={video}
        key={video.id.videoId}
      />
    )
  });
  return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;