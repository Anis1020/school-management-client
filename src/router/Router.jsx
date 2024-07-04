import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import ErrorPage from "../share/ErrorPage/ErrorPage";
import SignIn from "../Form/SignIn/SignIn";
import SignUp from "../Form/SignUp/SignUp";
import AdmissionForm from "../Form/AdmissionForm/AdmissionForm";

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
    ],
  },
]);
