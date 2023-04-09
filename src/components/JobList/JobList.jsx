import React, { useContext } from "react";
import { jobContext } from "../Home/Home";

const JobList = () => {
  const [data] = useContext(jobContext);
  return (
    <div className="text-center mt-20">
      <h1 className=" text-4xl font-bold mb-4">Job Category List</h1>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      
    </div>
  );
};

export default JobList;
