import { Power } from "lucide-react";
import { auth } from "../../../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

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
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-04-27/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />

      {user && (
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
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
