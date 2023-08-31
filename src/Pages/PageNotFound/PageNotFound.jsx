import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="h-[100vh] py-8">
      <div className="h-full v">
        <img
          src="https://i.ibb.co/ZTyMr4H/lost-in-space-1.gif"
          className="mx-auto p-5"
          alt=""
        />
        <p className="text-center text-xl font-medium">Go to <Link>Home Page</Link></p>
      </div>
    </div>
  );
};

export default PageNotFound;
