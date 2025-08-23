const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[35%] left-14 z-20 max-w-xl">
  <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
  <p className="text-lg text-gray-300 mb-6">{overview}</p>

  <div className="flex gap-4">
    <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
      ▶ Play
    </button>
    <button className="bg-gray-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-600 transition">
      ℹ More Info
    </button>
  </div>
</div>

  )
};

export default VideoTitle;