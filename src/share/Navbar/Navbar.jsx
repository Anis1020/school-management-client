import { Link, NavLink } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig/FirebaseConfig";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/users/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/teachers"}>All Staff</NavLink>
      </li>
      <li>
        <NavLink to={"/classRoom"}>Class Room</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutSchool"}>About School</NavLink>
      </li>
      <li>
        <NavLink to={"/admission"}>Admission</NavLink>
      </li>
      <li>
        <NavLink to={"/event"}>Event</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    signOut(auth);
    dispatch(logOut());
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex">
            <Link onClick={handleLogOut} to={"/signIn"} className="btn">
              Log Out
            </Link>
            <img src={placeholder} className="w-10 h-10 rounded-full" alt="" />
          </div>

          <Link to={"/signIn"} className="btn">
            LogIn
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
