import { Outlet } from "react-router-dom";
import Navbar from "../share/Navbar/Navbar";
import Footer from "../share/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-[90%] mx-auto">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
