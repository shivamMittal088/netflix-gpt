
const CustomOfflinePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Centered Phone-like Box */}
      <div className="w-[350px] max-w-sm bg-white shadow-2xl rounded-2xl p-8 text-center">
        
        {/* Bordered Text Box */}
        <div className="border-2 border-gray-300 rounded-xl p-6">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Offline</h1>
          <p className="text-gray-700 mb-2">
            You are not connected to the internet.
          </p>
          <p className="text-gray-500">
            Please check your connection and try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomOfflinePage;
