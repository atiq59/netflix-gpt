import { useNavigate, useRoutes } from "react-router-dom";
import { routesConfig } from "../../routes/page.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../utils/firebase.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../../utils/userSlice.js";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routes = useRoutes(routesConfig);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
    
  }, [])

  return <div>{routes}</div>;
};

export default Body;
