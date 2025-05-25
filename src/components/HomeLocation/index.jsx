import React from "react";

const HomeLocation = () => {
  //   const cities = [
  //     {
  //       name: "Mumbai",
  //       image: "/images/mumbai.jpg",
  //       className: "row-span-1 col-span-1",
  //     },
  //     {
  //       name: "New York",
  //       image: "/images/newyork.jpg",
  //       className: "row-span-1 col-span-2",
  //     },
  //     {
  //       name: "Chicago",
  //       image: "/images/chicago.jpg",
  //     },
  //     {
  //       name: "Tokyo",
  //       image: "/images/tokyo.jpg",
  //     },
  //     {
  //       name: "Paris",
  //       image: "/images/paris.jpg",
  //     },
  //   ];
  //   const cities = [
  //     { name: "Mumbai", image: "/images/mumbai.jpg" },
  //     { name: "New York", image: "/images/newyork.jpg" },
  //     { name: "Dallas", image: "/images/dallas.jpg" },
  //     { name: "Tokyo", image: "/images/tokyo.jpg" },
  //     { name: "Paris", image: "/images/paris.jpg" },
  //   ];
  return (
    <div className="bg-white px-10  py-14">
      {/* Title Section */}
      <div className="text-center mb-12">
        <p className="text-sm text-red-500 font-semibold">Locations</p>
        <h2 className="text-xl md:text-2xl font-medium text-black  mt-1">
          Find Property By City
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {/* Top Row */}
        <div className="relative rounded-xl overflow-hidden shadow-md group">
          <img
            src="/Images/L_mumbai.png"
            alt="Mumbai"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full text-center text-white bg-red-600/80 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Mumbai
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md md:col-span-2 group">
          <img
            src="/Images/L_newyork.png"
            alt="New York"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full text-center text-white bg-red-600/80 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            New York
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative rounded-xl overflow-hidden shadow-md group">
          <img
            src="/Images/L_Chicago.png"
            alt="Chicago"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full text-center text-white bg-red-600/80 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chicago
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md group">
          <img
            src="/Images/L_dhaka.png"
            alt="Tokyo"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full text-center text-white bg-red-600/80 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Dhaka
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-md group">
          <img
            src="/Images/L_paris.png"
            alt="Paris"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full text-center text-white bg-red-600/80 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Paris
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
