import React from "react";

const locationSalesData = [
  { country: "Gulsan", sales: 19 },
  { country: "Uttara", sales: 25 },
  { country: "Mirpur", sales: 5 },
  { country: "Badda", sales: 14 },
  // Add more countries...
];

const SalesByLocation = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Sales by Countries</h3>
      <ul className="mt-4">
        {locationSalesData.map((item) => (
          <li key={item.country} className="flex justify-between py-2">
            <span>{item.country}</span>
            <span>{item.sales}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesByLocation;
