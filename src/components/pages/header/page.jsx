import { Power } from "lucide-react";
import { auth } from "../../../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { AVTAAR, NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../../../utils/constant";
import { toggleGptSearchView } from "../../../utils/gptSlice";
import { setLanguage } from "../../../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e))
  }

  return (
    <div className="absolute px-8 py-4 bg-linear-to-b from-black via-black/60 to-transparent w-full z-10 flex justify-between items-center flex-col md:flex-row">
      <img className="w-40 h-auto" src={NETFLIX_LOGO} alt="Netflix Logo" />

      {user && (
        <div className="flex items-center gap-4">
          {showGptSearch && (
            <select
              className="bg-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-all duration-200"
              onChange={(e) => handleLanguageChange(e.target.value)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="p-2 hover:bg-blue-600/40 hover:text-white bg-white rounded-lg transition-all duration-200 cursor-pointer"
            onClick={handleGptSearch}
          >
            {!showGptSearch ? 'GPT Search' : 'Movie Search'}
          </button>
          <img
            className="w-10 h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            src={AVTAAR}
            alt="Avatar"
          />

          <button
            className="p-2 hover:bg-red-600/20 rounded-lg transition-all duration-200 cursor-pointer"
            onClick={handleSignOut}
          >
            <Power className="text-red-500 w-6 h-6 hover:text-red-400 font-bold" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
