import Header from "../Header/page";

const Login = () => {
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
        <form className="relative z-10 bg-black/90 backdrop-blur-sm p-12 rounded-lg shadow-2xl w-full max-w-sm mx-4 flex flex-col gap-4 opacity-90">
          <h2 className="text-white text-3xl font-bold mb-6 text-center">Sign In</h2>
          
          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
          />
          
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded mt-4 transition duration-200 cursor-pointer">
            Sign In
          </button>

          <div className="text-center text-gray-400 text-sm">
            New to Netflix? <a href="#" className="text-white hover:underline">Sign up now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
