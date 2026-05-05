import { Info, Play } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white bg-linear-to-r from-black/80 to-transparent p-10 flex flex-col justify-center">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>

        <div className="flex space-x-4">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-opacity-80 cursor-pointer">
                <Play size={20} />
                Play
            </button>
            <button className="flex items-center gap-2 bg-gray-500 text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-80 cursor-pointer">
                <Info size={20} />
                More Info
            </button>
        </div>
    </div>
  )
}

  export default VideoTitle;