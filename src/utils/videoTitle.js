const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[31%] left-14 z-20 max-w-[50%]  md:max-w-lg md:top-[27%]">
  <h1 className="text-xl font-bold text-white mb-4 -ml-8 md:text-2xl md:-ml-3">{title}</h1>
  <p className="text-xs text-gray-300 mb-6 -ml-8 md:text-md md:-ml-3">{overview}</p>

  <div className="flex gap-4">
    <button className="bg-white text-black px-3 py-1 rounded-md font-semibold hover:bg-gray-200 transition -mx-8 md:px-6 md:py-2 md:-mx-3">
      ▶ Play
    </button>
    <button className="bg-gray-700 text-white px-2 py-1 rounded-md font-semibold hover:bg-gray-600 transition ml-5 md:px-3 md:py-2 md:ml-3">
      ℹ More Info
    </button>
  </div>
</div>

  )
};

export default VideoTitle;