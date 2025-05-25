import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "1 Jul", revenue: 4000, margin: 2400 },
  { date: "2 Jul", revenue: 7000, margin: 2800 },
  { date: "3 Jul", revenue: 2000, margin: 1800 },
  { date: "4 Jul", revenue: 6000, margin: 3200 },
  { date: "5 Jul", revenue: 1000, margin: 800 },
  // Add more data points...
];

const SalesChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <Line type="monotone" dataKey="margin" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <div className="text-center">Sales per day</div>
    </>
  );
};

export default SalesChart;
