const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white font-bold hover:bg-opacity-90 rounded-lg text-black w-20 py-2">
          ▶ Play
        </button>
        <button className="bg-gray-500 mx-4 font-bold rounded-lg bg-opacity-50 text-black w-24 py-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
