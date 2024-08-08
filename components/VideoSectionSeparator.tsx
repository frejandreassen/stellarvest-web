import React from 'react';

const VideoSectionSeparator = () => {
  return (
    <section className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/madrid-spain-cityscape-at-daytime-3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
      {/* You can add text or other content here if needed */}
    </section>
  );
};

export default VideoSectionSeparator;