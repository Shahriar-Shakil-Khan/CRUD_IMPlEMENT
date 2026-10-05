import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-orange-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-300">
        The page you are looking for doesn't exist.
      </p>
      <Link to="/">
        <button className="btn btn-primary mt-6">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;