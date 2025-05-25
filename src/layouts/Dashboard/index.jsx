import React from "react";
import SalesByLocation from "../../components/Dashboard/SalesByLocation/SalesByLocation";
import SalesCategory from "../../components/Dashboard/SalesCategory/SalesCategory";
import SalesChart from "../../components/Dashboard/SalesChart/SalesChart";

const Dashboard = () => {
  return (
    <>
      <div className=" px-10 py-5 w-full">
        <div className="grid grid-cols-6 gap-6">
          <div className="bg-white col-span-3 p-4 rounded-lg shadow-lg">
            <SalesChart />
          </div>
          <div className="bg-white col-span-3 p-4 rounded-lg shadow-lg">
            <SalesCategory />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
          <SalesByLocation />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
