import React, { useContext, useEffect, useState } from "react";
import { FeaturedContext } from "../Home/Home";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const FeaturedJob = () => {
  const [jobData, setJobData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [data] = useContext(FeaturedContext);
  useEffect(() => {
    setJobData(data.slice(0, 4));
  }, []);

  return (
    <div className="mt-20 mb-20">
      <h1 className=" text-4xl font-bold mb-4 text-center">Featured Jobs</h1>
      <p className="mb-10 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {jobData.map((job) => (
          <FeaturedCard key={job.id} job={job}></FeaturedCard>
        ))}
      </div>
      <div
        className={`text-center mt-5 ${isButtonClicked ? "hidden" : ""}`}
        onClick={() => setIsButtonClicked(true)}
      >
        <button className="my-btn-2" onClick={() => setJobData(data)}>
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
