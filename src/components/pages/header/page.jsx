import { Power } from "lucide-react";
import { auth } from "../../../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { AVTAAR, NETFLIX_LOGO } from "../../../utils/constant";

const Header = () => {
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute px-8 py-4 bg-linear-to-b from-black via-black/60 to-transparent w-full z-10 flex justify-between items-center">
      <img
        className="w-40 h-auto"
        src={NETFLIX_LOGO}
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center gap-4">
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
