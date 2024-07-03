import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-[50%] mx-auto">
      <h2 className="text-3xl">Page Not Fount</h2>
      <Link to={"/"}>
        <button className="btn btn-accent">Back to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
