import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

const data = [
  {
    name: "A1",
    Marks: 57,
    fill: "#FF8400",
  },
  {
    name: "A2",
    Marks: 60,
    fill: "#52DE97",
  },
  {
    name: "A3",
    Marks: 60,
    fill: "#E49393",
  },
  {
    name: "A4",
    Marks: 59,
    fill: "#F9F54B",
  },
  {
    name: "A5",
    Marks: 60,
    fill: "#F2CD5C",
  },
  {
    name: "A6",
    Marks: 60,
    fill: "#94DAFF",
  },
  {
    name: "A7",
    Marks: 60,
    fill: "#94B3FD",
  },
  {
    name: "A8",
    Marks: 60,
    fill: "#57C5B6",
  },
];

const style = {
  top: 40,
  left: 350,
  lineHeight: "24px",
};
const Statistic = () => {
  return (
    <div>
      <h1 className=" text-4xl font-bold  my-20 text-center">Featured Jobs</h1>
      <div className="grid justify-center items-center">
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#5D3891" }}
            background
            clockWise
            dataKey="Marks"
            nameKey="name"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
          <Tooltip />
        </RadialBarChart>
      </div>
    </div>
  );
};

export default Statistic;
