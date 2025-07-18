import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import validateData from "../utils/checkValidations";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG_IMG } from "../utils/constants";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleLogIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleFormData = () => {
    const validationMessage = validateData(
      email.current.value,
      password.current.value,
      fullName?.current?.value
    );

    setErrorMessage(validationMessage);

    if (errorMessage) return;

    if (!isLoggedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
          })
            .then(() => {
              dispatch(
                addUser({
                  accessToken: auth.accessToken,
                  email: auth.email,
                  uid: auth.uid,
                  displayName: auth.displayName,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full">
        <img alt="NetFlix Body" src={LOGIN_BG_IMG} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-opacity-80 absolute bg-black mx-auto left-0 right-0 w-4/12 p-12 my-32 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl my-2">
          {isLoggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoggedIn && (
          <input
            ref={fullName}
            className="p-4 my-3 mx-auto w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-3 mx-auto w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-3 mx-auto w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-center text-red-500">{errorMessage}</p>
        <button
          onClick={handleFormData}
          className="p-4 my-4 mx-auto bg-red-700 w-full rounded-md font-bold"
        >
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
