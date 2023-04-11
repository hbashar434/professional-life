import React, { useEffect, useState } from "react";
import { getAppliedJob } from "../../utilities/fakedb";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  useEffect(() => {
    const storedList = getAppliedJob();
    const savedList = [];
    for (const id in storedList) {
      const addedJob = jobs.find((job) => job.id === id);
      if (addedJob) {
        const quantity = storedList[id];
        addedJob.quantity = quantity;
        savedList.push(addedJob);
        setList(savedList);
      }
    }
  }, [jobs]);
  const filterByRemote = () => {
    setList(list.filter((jb) => jb.job_type == "Remote"));
  };
  const filterByOnsite = () => {
    setList(list.filter((jb) => jb.job_type == "Onsite"));
  };

  return (
    <div>
      <h1 className="font-bold text-4xl my-16 text-center">Applied Jobs</h1>
      <div className="grid gap-8 my-16">
        <button className="my-btn-2" onClick={filterByRemote}>
          Filter By Remote
        </button>
        <button className="my-btn-2" onClick={filterByOnsite}>
          Filter By Onsite
        </button>
        <div className="flex justify-end">
          <select className="select select-primary w-28 max-w-xs">
            <option disabled selected value="">
              Filter By
            </option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        {list.map((job) => (
          <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
