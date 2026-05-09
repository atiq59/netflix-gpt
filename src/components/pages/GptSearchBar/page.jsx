import { useSelector } from "react-redux";
import lang from "../../../utils/languageConstant";
import { useRef } from "react";
import useGptSearchMovies from "../../../hooks/useGptSearchMovies";

const GptSearchBar = () => {
  const selector = useSelector((store) => store.config.language);
  const searchText = useRef();
  const { loading, handleSearch } = useGptSearchMovies();

  return (
    <div className="pt-[8%] px-8">
      <form
        className="bg-black pt-4 px-8 rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[selector].gptSearchBar}
          className="w-full p-4 text-lg bg-white text-black rounded"
        />
        <button
          type="submit"
          className="my-4 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
          onClick={() => handleSearch(searchText.current.value)}
          disabled={loading}
        >
          {loading ? "Searching..." : lang[selector].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
