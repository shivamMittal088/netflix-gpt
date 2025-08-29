const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[20%] left-14 z-20 max-w-[50%] md:top-[27%] md:max-w-lg">
  <h1 className="text-2xl font-bold text-white mb-4 -ml-7 md:text-3xl md:-ml-3">{title}</h1>
  <p className="text-sm text-gray-300 mb-6 -ml-7 md:text-lg md:-ml-3">{overview}</p>

  <div className="flex gap-4">
    <button className="bg-white text-black px-3 py-1 rounded-md font-semibold hover:bg-gray-200 transition -mx-7 md:px-6 md:py-2 md:-mx-3">
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