import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import ErrorPage from "../share/ErrorPage/ErrorPage";
import SignIn from "../Form/SignIn/SignIn";
import SignUp from "../Form/SignUp/SignUp";
import AdmissionForm from "../Form/AdmissionForm/AdmissionForm";
import EventForm from "../Form/EventForm/EventForm";
import AllStaff from "../pages/AllStaff/AllStaff";
import ClassRoom from "../pages/ClassRoom/ClassRoom";
import AboutSchool from "../pages/AboutSchool/AboutSchool";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout>Hello world!</Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/teachers",
        element: <AllStaff></AllStaff>,
      },
      {
        path: "/aboutSchool",
        element: <AboutSchool></AboutSchool>,
      },
      {
        path: "/classRoom",
        element: <ClassRoom></ClassRoom>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/admission",
        element: <AdmissionForm></AdmissionForm>,
      },
      {
        path: "/event",
        element: <EventForm></EventForm>,
      },
    ],
  },
]);
