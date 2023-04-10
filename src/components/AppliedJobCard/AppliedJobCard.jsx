import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const AppliedJobCard = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    job_type,
    location,
    job_category,
    salary,
  } = job;

  return (
    <div className=" border p-4 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="bg-gray-200 py-16 px-10">
        <figure className="h-10">
          <img src={company_logo} alt="company-logo" />
        </figure>
        </div>
        <div className="mt-6 mb-4">
          <h2 className="card-title">{job_title}</h2>
          <p className="font-semibold">{company_name}</p>
          <div className="flex gap-2">
            <button className="my-btn">{job_type}</button>
            <button className="my-btn">{job_category}</button>
          </div>
          <div className="flex gap-8">
            <p className="flex items-center gap-1">
              {" "}
              <CiLocationOn size={20} className="text-indigo-500" /> {location}
            </p>
            <p className="flex items-center gap-1">
              <CiDollar size={20} className="text-indigo-500" /> {salary}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/details/${id}`}>
          <button className="my-btn-2">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobCard;
