import React, { useEffect, useState } from "react";
import CardJob from "../CardJob/CardJob";

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch("list.json")
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }, []);
  return (
    <div className="mt-20 mb-20">
      <h1 className=" text-4xl font-bold mb-4 text-center">
        Job Category List
      </h1>
      <p className="mb-10 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        {jobList.map((job) => (
          <CardJob key={job.id} job={job}></CardJob>
        ))}
      </div>
    </div>
  );
};

export default JobList;
