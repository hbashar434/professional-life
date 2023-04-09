import React, { createContext } from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import JobList from "../JobList/JobList";

export const jobContext = createContext();
const Home = () => {
  const jobData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <jobContext.Provider value={[jobData]}>
        <JobList></JobList>
      </jobContext.Provider>
    </div>
  );
};

export default Home;
