import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FeaturedContext } from "../Home/Home";

const ViewDetails = () => {
  const [job, setJob] = useState({});
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const { id } = useParams();
  useEffect(() => {
    fetch("../job.json")
      .then((res) => res.json())
      .then((data) => {
        setJob(data.find((dt) => dt.id === id));
      });
  }, []);

  return (
    <div className="mt-20 grid md:grid-cols-3 gap-8">
      <div className="grid col-span-2 gap-3">
        <h1 className=" font-bold">
          Job Description :{" "}
          <span className=" font-normal">{job_description}</span>
        </h1>
        <h1 className=" font-bold">
          Job Responsibility :{" "}
          <span className=" font-normal">{job_responsibility}</span>
        </h1>
        <h1 className=" font-bold">
          Educational Requirements :{" "}
          <p className=" font-normal">{educational_requirements}</p>
        </h1>
        <h2 className=" font-bold">
          Experiences : <p className=" font-normal">{experiences}</p>
        </h2>
      </div>
      <div className="bg-gray-300 rounded px-6 py-4">
        <h1 className="font-bold text-lg">Jobs Details</h1>
        <div className="my-4">
        <h2 className=" font-semibold mb-2">
          Salary : <span className=" font-normal">{salary}</span>
        </h2>
        <h2 className=" font-semibold">
          Job Title : <span className=" font-normal">{job_title}</span>
        </h2>
        </div>
        <div>
            <h1>Contact Information</h1>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
