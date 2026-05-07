import { useSelector } from "react-redux";
import lang from "../../../utils/languageConstant";

const GptSearchBar = () => {
    const selector = useSelector((store) => store.config.language);

    return (
        <div className="pt-[8%] px-8">
            <form className="bg-black pt-4 px-8 rounded">
                <input type="text" placeholder={lang[selector].gptSearchBar} className="w-full p-4 text-lg bg-gray-400 text-white rounded" />
                <button type="submit" className="my-4 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700">{lang[selector].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;