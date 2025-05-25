import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Living room", value: 55 },
  { name: "Office", value: 27 },
  { name: "Dining room", value: 47 },
  { name: "Kitchen", value: 5 },
  { name: "Wash room", value: 4 },
  // Add more categories...
];

const COLORS = ["#ff8c00", "#ffbb00", "#8c00ff", "#00ff88"];

const SalesCategory = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesCategory;
