import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebaseConfig/FirebaseConfig";
import { setUser, toggleLoading } from "../redux/features/users/userSlice";

const PrivetRouter = ({ children }) => {
  const { pathname } = useLocation();
  const { isLoading, email } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(false));
      }
    });
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  if (!isLoading && email) {
    return <Navigate to={"/login"} state={{ path: pathname }}></Navigate>;
  }
  return children;
};

export default PrivetRouter;
