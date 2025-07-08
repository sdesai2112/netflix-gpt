import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="NetFlix Body"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_small.jpg"
        />
      </div>
      <form className="bg-opacity-80 absolute bg-black mx-auto left-0 right-0 w-4/12 p-12 my-32 text-white rounded-lg">
        <h1 className="font-bold text-3xl my-2">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoggedIn && (
          <input
            className="p-4 my-3 mx-auto w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-3 mx-auto w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-3 mx-auto w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-4 mx-auto bg-red-700 w-full rounded-md font-bold">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleLogIn}>
          {isLoggedIn
            ? "New to Netflix?Sign up now."
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
