import { BACKGROUND_IMG_URL } from "../../../utils/constant";
import GptSearchBar from "../GptSearchBar/page.jsx";
import GptSearchMovieSuggestion from "../GptSearchMovieSuggestion/page.jsx";

const GptSearch = () => {

    return (
        <div>
            <img
                src={BACKGROUND_IMG_URL}
                alt="Background"
                className="fixed inset-0 w-full h-full object-cover -z-10"
            />
            <div className="pt-[30%] md:pt-0">
                <GptSearchBar />
                <GptSearchMovieSuggestion />
            </div>
        </div>
    )
}

export default GptSearch;