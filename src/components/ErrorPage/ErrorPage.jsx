// import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorCross from "../../assets/errorCross.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <Lottie animationData={errorCross} loop={true} className="h-48 w-48"/>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl my-btn">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <div className="mb-10">
            <p className="text-2xl font-semibold md:text-3xl my-btn border-none">
              {error?.message}
            </p>
          </div>
          <Link to="/" className="my-btn-2">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
