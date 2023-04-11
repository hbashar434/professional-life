import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import search from "../../assets/search.json";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8  items-center mt-16">
      <div className="order-1 md:order-none">
        <div className=" text-5xl font-bold grid gap-3">
          <h1>One Step</h1>
          <h1>Closer To Your</h1>
          <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Dream Job
          </h1>
        </div>
        <p className="mt-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link>
          <button className="mt-8 my-btn-2">Get Started</button>
        </Link>
      </div>
      <figure>
        {/* <img src="banner.png" alt="banner-image" /> */}
        <Lottie animationData={search} loop={true}></Lottie>
      </figure>
    </div>
  );
};

export default Banner;
