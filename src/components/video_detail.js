import React from 'react';

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>;
  }

  console.log('VideoDetail', video);

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;


  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe width="100%" height="100%" className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail;
