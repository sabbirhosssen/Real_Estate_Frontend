import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProduct } from "../../Redux/slice/productSlice";

const TestCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.product);
  // console.log(data);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const [productAll, setProductImageID] = useState([]);

  useEffect(() => {
    if (data && data?.length > 0 && !isError) {
      const fetchImagesAndUpdateProducts = async () => {
        const updatedProducts = await Promise.all(
          data.map(async (product) => {
            try {
              const response = await axios.get(
                `http://localhost:8080/api/product/${product.productId}/image`,
                { responseType: "blob" }
              );
              const imageUrl = URL.createObjectURL(response.data);
              return { ...product, imageUrl };
            } catch (error) {
              console.error(
                "Error fetching image for product ID:",
                product.id,
                error
              );
              return { ...product, imageUrl: "placeholder-image-url" };
            }
          })
        );
        setProductImageID(updatedProducts);
      };

      fetchImagesAndUpdateProducts();
    }
  }, [data]);
  console.log(productAll);

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="text-center text-lg font-medium text-gray-600">
          Loading products...
        </div>
      ) : (
        <>
          <div className="mb-4 text-xl font-semibold text-gray-800">
            House available: {data.length}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productAll.map((product) => (
              <div
                key={product.productId}
                className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col"
              >
                <img
                  src={product.imageUrl}
                  alt={product.imageName}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-center font-semibold text-lg text-gray-800">
                    {product.productName}
                  </h3>
                  <p className="text-center text-sm text-gray-600 mb-4">
                    {product.productDesc}
                  </p>
                  <div className="text-sm text-gray-600 mb-2">
                    📐 {product.productArea}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>🛏️ {product.productRoom} Rooms</span>
                    <span>🛁 {product.productBathrooms} Baths</span>
                    <span>🚗 {product.productGarages} Garage</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    📍 {product.productLocation}
                  </div>
                  <button
                    onClick={() =>
                      navigate("/dashboard/bookingsummary", {
                        state: product,
                      })
                    }
                    className="mt-auto bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-full"
                  >
                    Booking Apartment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TestCard;
