import { BACKGROUND_IMG_URL } from "../../../utils/constant";
import GptSearchBar from "../GptSearchBar/page";
import GptSearchMovieSuggestion from "../GptSearchMovieSuggestion/page";

const GptSearch = () => {

    return (
        <div>
            <img
                src={BACKGROUND_IMG_URL}
                alt="Background"
                className="fixed inset-0 w-full h-full object-cover -z-10"
            />
            <GptSearchBar />
            <GptSearchMovieSuggestion />
        </div>
    )
}

export default GptSearch;