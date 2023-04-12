import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A1",
    Marks: 60,
    fill: "#8884d8",
  },
  {
    name: "A2",
    Marks: 45,
    fill: "#52DE97",
  },
  {
    name: "A3",
    Marks: 30,
    fill: "#a4de6c",
  },
  {
    name: "A4",
    Marks: 20,
    fill: "#ffc658",
  },
  {
    name: "A5",
    Marks: 47,
    fill: "#F2CD5C",
  },
  {
    name: "A6",
    Marks: 60,
    fill: "#94DAFF",
  },
  {
    name: "A7",
    Marks: 52,
    fill: "#94B3FD",
  },
  {
    name: "A8",
    Marks: 60,
    fill: "#57C5B6",
  },
];

const style = {
  top: 50,
  left: 350,
  lineHeight: "24px",
};
const Statistic = () => {
  return (
    <div>
      <h1 className=" text-4xl font-bold  my-20 text-center">Statistics</h1>
      <div className="md:grid justify-center items-center ">
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
          />
          <Tooltip
            active={true}
            payload={data}
            separator=" : "
            labelFormatter={(label) => `Assignment : ${label + 1}`}
            formatter={(value) => `${value} out of 60`}
            contentStyle={{ backgroundColor: "#fff", padding: "10px" }}
            itemStyle={{ color: "#333" }}
            labelStyle={{ fontWeight: "bold", fontSize: "22px" }}
            wrapperStyle={{ border: "1px solid #ccc" }}
            offset={{ x: 10, y: -10 }}
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </div>
    </div>
  );
};

export default Statistic;
