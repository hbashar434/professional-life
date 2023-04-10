import React, { useContext } from "react";
import { FeaturedContext } from "../Home/Home";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const FeaturedJob = () => {
  const [data] = useContext(FeaturedContext);
  return (
    <div className="mt-20 mb-20">
      <h1 className=" text-4xl font-bold mb-4 text-center">Featured Jobs</h1>
      <p className="mb-10 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* @TODO: backTO HOME ERROR */}
        {data
          ? data.map((job) => (
              <FeaturedCard key={job.id} job={job}></FeaturedCard>
            ))
          : ""}
      </div>
    </div>
  );
};

export default FeaturedJob;
