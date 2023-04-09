import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="mx-4 lg:mx-36">
      <Header></Header>
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
