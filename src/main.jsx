import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistic from "./components/Statistic/Statistic";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import ViewDetails from "./components/ViewDetails/ViewDetails";
import jobDetailsLoader from "./components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("job.json"),
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
        // loader: ({ params }) => jobDetailsLoader(params.id),
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
