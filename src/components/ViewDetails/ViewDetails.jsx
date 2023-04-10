import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FeaturedContext } from "../Home/Home";

const ViewDetails = () => {
  const [job, setJob] = useState({});
  const {
    job_title,
    salary,
    location,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    phone,
    email,
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
      <div>
        <div className="bg-gray-200 rounded px-6 py-4">
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
            <h1 className="text-lg font-bold mb-4">Contact Information</h1>
            <h2 className=" font-semibold mb-2">
              Phone : <span className=" font-normal">{phone}</span>
            </h2>
            <h2 className=" font-semibold mb-2">
              Email : <span className=" font-normal">{email}</span>
            </h2>
            <h2 className=" font-semibold mb-2">
              Address : <span className=" font-normal">{location}</span>
            </h2>
          </div>
        </div>
        <button className="my-btn-2 w-full mt-3">Apply Now</button>
      </div>
    </div>
  );
};

export default ViewDetails;
