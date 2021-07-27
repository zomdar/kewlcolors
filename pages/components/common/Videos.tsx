import React from "react";

interface Video {
  title: string;
  duration: string;
  url: string;
  date: string;
}

const Video = (props: { video: Video }) => {
  const { video } = props;

  return (
    <div className="flex justify-center pb-6">
      <div className="flex flex-col pt-2">
        <div className="flex justify-between pb-6 lg:w-800">
          <h2 className="text-5xl font-bold">{video.title}</h2>
          <div className="text-purple-400">
            <p>{video.duration}</p>
            <p>{video.date}</p>
          </div>
        </div>
        <div className="iFrame-container">
          <iframe
            className="responsive-iframe"
            src={video.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const Videos = (props: { videos: Video[] }) => {
  const { videos } = props;

  if (!videos) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {videos.map((video: Video) => (
        <Video key={video.title} video={video} />
      ))}
    </div>
  );
};

export default Videos;
