import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const FeaturedCard = ({ job }) => {
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
    <div className="bg-gray-50 border p-8">
      <figure className=" h-10">
        <img src={company_logo} alt="company-logo" />
      </figure>
      <div className="mt-6 mb-4">
        <h2 className="card-title">{job_title}</h2>
        <p className="font-semibold">{company_name}</p>
        <div className="flex gap-2">
          <button className="my-btn">{job_type}</button>
          <button className="my-btn">{job_category}</button>
        </div>
        <div className="flex gap-8">
          <p className="flex items-center">
            {" "}
            <CiLocationOn size={24} /> {location}
          </p>
          <p className="flex items-center">
            <CiDollar size={24} /> {salary}
          </p>
        </div>
      </div>
      <Link to={`/details/${id}`}>
        <button className="my-btn-2">View Details</button>
      </Link>
    </div>
  );
};

export default FeaturedCard;
