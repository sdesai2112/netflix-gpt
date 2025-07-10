import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser, addUser } from "../utils/userSlice";
import { LOGIN_USER_ICON, NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(
          addUser({
            accessToken: user.accessToken,
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribing when unmounting the component
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(removeUser());
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-44" alt="Netflix Logo" src={NETFLIX_LOGO} />
      {user && (
        <div className="flex">
          <img
            className="w-10 h-10 m-4"
            alt="user-icon"
            src={LOGIN_USER_ICON}
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
