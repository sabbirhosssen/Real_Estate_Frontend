import { useLocation } from "react-router-dom";

const BookingApartment = () => {
  const value = useLocation();
  const {
    imageName,
    imageUrl,
    productArea,
    productAvailable,
    productBathrooms,
    productDesc,
    productGarages,

    productLocation,
    productName,
    productRoom,
    releaseDate,
  } = value.state;

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-2xl rounded-xl mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={imageUrl}
              alt={imageName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Section */}
          <div>
            <h1 className="text-3xl font-bold mb-3 text-red-600">
              {productName}
            </h1>
            <p className="text-gray-700 text-lg mb-4">{productDesc}</p>

            <ul className="space-y-2 text-gray-800 text-md">
              <li>
                <strong>Location:</strong> {productLocation}
              </li>
              <li>
                <strong>Area:</strong> {productArea} sqft
              </li>
              <li>
                <strong>Rooms:</strong> {productRoom}
              </li>
              <li>
                <strong>Bathrooms:</strong> {productBathrooms}
              </li>
              <li>
                <strong>Garages:</strong> {productGarages}
              </li>
              <li>
                <strong>Release Date:</strong>{" "}
                {new Date(releaseDate).toLocaleDateString()}
              </li>
              <li>
                <strong>Status:</strong>{" "}
                {productAvailable ? (
                  <span className="text-green-600">Available</span>
                ) : (
                  <span className="text-red-500">Not Available</span>
                )}
              </li>
            </ul>
            <div className="textcenter text-red-400">
              <span className="text-red-900"> Note:</span> Please contact Our
              whatsapp number, visit site and agrement to apartment buy
            </div>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                disabled={productAvailable}
                className={`mt-6 px-6 py-3 rounded-md text-white font-semibold transition 
              ${
                productAvailable
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              >
                {productAvailable ? "Discus now " : "Not Available"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingApartment;
