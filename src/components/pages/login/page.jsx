import { useRef, useState } from "react";
import Header from "../Header/page";
import { Eye, EyeOff } from "lucide-react";
import { validateForm } from "../../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formError, setFormError] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const dispatch = useDispatch();

  const handleSubmitButton = () => {
    const error = validateForm(
      email.current.value,
      password.current.value,
      isSignInForm ? null : confirmPassword.current.value,
    );

    setFormError(error.errors);
    console.log(error);

    if (!error.isValid) return;

    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value, photoURL: "https://lh3.googleusercontent.com/ogw/AF2bZyhjKXdZ76V47lvvXbPQSYZh5kQpV6Xta6Dq3mcdfolaC-NO=s64-c-mo"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
          }).catch((error) => {
              alert(error.message);
          });
          // ...
        })
        .catch((error) => {
          alert(error.message);
          // ..
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then(() => {
          // Signed in
          // ...
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  const toggleLoginForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="min-h-screen bg-black overflow-y-auto">
      <Header />

      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e9e4878c-fb84-4457-ba49-564bfd8dc758/web/IN-en-20260420-TRIFECTA-perspective_ec3c1e8c-3b79-481d-84c4-51b7dcb7800e_large.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Form Container */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative z-10 bg-black/90 backdrop-blur-sm p-12 rounded-lg shadow-2xl w-full max-w-sm mx-4 flex flex-col gap-4 opacity-90"
        >
          <h2 className="text-white text-3xl font-bold mb-6 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm && (
            <>
              <input
                ref={fullName}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
              />
              {formError?.fullName && (
                <span className="text-red-500 text-sm">
                  {formError.fullName}
                </span>
              )}
            </>
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
          />
          {formError?.email && (
            <span className="text-red-500 text-sm">{formError.email}</span>
          )}

          <div className="relative">
            <input
              ref={password}
              type={showPassword.password ? "text" : "password"}
              placeholder={isSignInForm ? "Password" : "Create Password"}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-200"
              onClick={() => togglePassword("password")}
            >
              {showPassword.password ? <Eye size={18} /> : <EyeOff size={18} />}
            </span>
          </div>
          {formError?.password && (
            <span className="text-red-500 text-sm">{formError.password}</span>
          )}

          {!isSignInForm && (
            <>
              <div className="relative">
                <input
                  ref={confirmPassword}
                  type={showPassword.confirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
                />
                <span
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-200"
                  onClick={() => togglePassword("confirmPassword")}
                >
                  {showPassword.confirmPassword ? (
                    <Eye size={18} />
                  ) : (
                    <EyeOff size={18} />
                  )}
                </span>
              </div>
              {formError?.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {formError.confirmPassword}
                </span>
              )}
            </>
          )}

          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded mt-4 transition duration-200 cursor-pointer"
            onClick={handleSubmitButton}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="text-center text-gray-400 text-sm">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <a
              href="javascript:void(0)"
              className="text-white hover:underline"
              onClick={toggleLoginForm}
            >
              {isSignInForm ? "Sign up now" : "Sign in now"}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
