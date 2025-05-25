import React from "react";

const PropertyCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src="/property1.jpg"
        alt="Property"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Modern Spaces And Complexes
        </h3>
        <p className="text-gray-600 text-sm my-2">
          Lorem ipsum dolor sit amet consectetur. Id dui duis morbi nullam orci
          luctus.
        </p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm">
            Book Now
          </button>
          <img
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            className="h-6 w-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
