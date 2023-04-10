import { createContext } from "react";
import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobList from "../JobList/JobList";
import { useLoaderData } from "react-router-dom";

export const FeaturedContext = createContext([]);
const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <JobList></JobList>
      <FeaturedContext.Provider value={[data]}>
        <FeaturedJob></FeaturedJob>
      </FeaturedContext.Provider>
    </div>
  );
};

export default Home;
