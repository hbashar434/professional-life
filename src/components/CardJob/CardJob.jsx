import React from "react";

const CardJob = ({ job }) => {
  const { id, logo, name, jobs } = job;
  return (
    <div className="bg-gray-100 w-full p-8 grid gap-4">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <h1 className="card-title">{name}</h1>
      <p className=" text-gray-400 font-semibold">{jobs} Jobs Available</p>
    </div>
  );
};

export default CardJob;
