import React, { useEffect, useState } from "react";
import { getAppliedJob } from "../../utilities/fakedb";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);

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
        setFilterList(savedList);
      }
    }
  }, [jobs]);

  const handleFilter = (value) => {
    setFilterList(list.filter((jb) => jb.job_type == value));
  };

  return (
    <div>
      <h1 className="font-bold text-4xl my-16 text-center">Applied Jobs</h1>
      <div className="grid gap-8 my-16">
        <div className="flex justify-end">
          <select
            className="select select-primary w-28 max-w-xs"
            defaultValue="Filter"
            onChange={(event) => handleFilter(event.target.value)}
          >
            <option value="Filter" disabled>
              Filter By
            </option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        {filterList.map((job) => (
          <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
