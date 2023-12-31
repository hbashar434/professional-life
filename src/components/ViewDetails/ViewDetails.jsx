import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { MdOutlineSubtitles } from "react-icons/md";
import { addToDb, getAppliedJob } from "../../utilities/fakedb";
import toast, { Toaster } from "react-hot-toast";

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
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => {
        setJob(data.find((dt) => dt.id === id));
      });
  }, []);

  const handleAppliedJob = (id) => {
    const storedList = getAppliedJob();
    const savedList = [];
    for (const jb in storedList) {
      savedList.push(jb);
    }
    const addedJob = savedList.find((j) => j == id);
    if (!addedJob) {
      addToDb(id);
      toast.success("You have applied successfully.");
    } else {
      toast.error("You have already applied for this job!");
    }
  };

  return (
    <div>
      <h1 className="font-bold text-4xl my-16 text-center">Jobs Details</h1>
      <div className="mt-20 grid md:grid-cols-3 gap-2">
        <div className="grid md:col-span-2 gap-2">
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
            <p className="border-b border-gray-300 my-4"></p>
            <div>
              <h2 className=" font-semibold mb-2 flex items-center gap-1">
                <CiDollar size={20} className="text-indigo-500" />
                Salary : <span className=" font-normal">{salary}</span>
              </h2>
              <h2 className=" font-semibold flex items-center gap-1">
                <MdOutlineSubtitles size={20} className="text-indigo-500" />
                Job Title : <span className=" font-normal">{job_title}</span>
              </h2>
            </div>
            <div>
              <h1 className="text-lg font-bold my-4">Contact Information</h1>
              <p className="border-b border-gray-300 my-4"></p>
              <h2 className=" font-semibold mb-2 flex items-center gap-1">
                <HiOutlinePhone size={20} className="text-indigo-500" />
                Phone : <span className=" font-normal">{phone}</span>
              </h2>
              <h2 className=" font-semibold mb-2 flex items-center gap-1">
                <HiOutlineMail size={20} className="text-indigo-500" />
                Email : <span className=" font-normal">{email}</span>
              </h2>
              <h2 className=" font-semibold mb-2 flex items-center gap-1">
                {" "}
                <CiLocationOn size={20} className="text-indigo-500" />
                Address : <span className=" font-normal">{location}</span>
              </h2>
            </div>
          </div>
          <button
            className="my-btn-2 w-full mt-3"
            onClick={() => handleAppliedJob(id)}
          >
            Apply Now
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
