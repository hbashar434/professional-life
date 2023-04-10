import React, { useEffect, useState } from "react";
import { getAppliedJob } from "../../utilities/fakedb";
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
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
    //step1: get id
    for (const id in storedList) {
      // step2: get the product from jobs by using id
      const addedProduct = jobs.find((product) => product.id === id);
      if (addedProduct) {
        // step3: get quantity of the product
        const quantity = storedList[id];
        addedProduct.quantity = quantity;
        // step4: add the added product to the saved List
        savedList.push(addedProduct);
        // step5: set the List
        setList(savedList);
      }
    }
  }, [jobs]);

  return (
    <div>
      <h1 className="font-bold text-4xl my-16 text-center">Applied Jobs</h1>
      <div className="grid gap-8 my-16">
        {list.map((job) => (
          <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
