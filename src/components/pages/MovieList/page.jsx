import { useRef } from "react";
import MovieCard from "../MovieCard/page.jsx";
import { MoveLeft, MoveRight } from "lucide-react";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 600;

    if (direction === "left") {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-4 relative group">
      {/* Title */}
      <h2 className="text-lg md:text-2xl font-bold text-white mb-2 px-5">{title}</h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                   bg-black/60 text-white px-3 py-2 
                   opacity-0 group-hover:opacity-100 transition cursor-pointer"
      >
        <MoveLeft />
      </button>

      {/* Movie Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll hide-scrollbar py-4 scroll-smooth"
      >
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <div
              key={movie.id}
              className="shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <MovieCard poster_path={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                   bg-black/60 text-white px-3 py-2 
                   opacity-0 group-hover:opacity-100 transition cursor-pointer"
      >
        <MoveRight />
      </button>

      {/* Gradient overlays (optional but looks 🔥) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-black"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-black"></div>
    </div>
  );
};

export default MovieList;