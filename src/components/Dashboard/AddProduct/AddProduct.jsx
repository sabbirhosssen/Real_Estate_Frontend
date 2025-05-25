import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [product, setProductData] = useState({
    productName: "",
    productDesc: "",
    productLocation: "",
    productArea: "",
    productRoom: "",
    productGarages: "",
    productBathrooms: "",
    releaseDate: "",
    productAvailable: false,
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...product, [name]: value });
  };
  const handleCheckboxChange = (e) => {
    setProductData({ ...product, productAvailable: e.target.checked });
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // const{name,image}=e.target
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("imageFile", image);
    productData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    try {
      await axios
        .post("http://localhost:8080/api/product", productData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          alert("Product added successfully!");
          console.log("Product added successfully!", response.data);
        });
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to add product.");
    }
  };
  console.log(product);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="productName"
          placeholder="Name"
          value={product.productName}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="productDesc"
          placeholder="Description"
          value={product.productDesc}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="productLocation"
          placeholder="Location"
          value={product.productLocation}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="productArea"
          placeholder="Area (e.g. 1200 sqft)"
          value={product.productArea}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="productRoom"
          placeholder="Rooms"
          value={product.productRoom}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="productGarages"
          placeholder="Garages"
          value={product.productGarages}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="productBathrooms"
          placeholder="Bathrooms"
          value={product.productBathrooms}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="date"
          name="releaseDate"
          value={product.releaseDate}
          onChange={handleInputChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border p-2 rounded"
          required
        />
        <label className="block">
          <input
            type="checkbox"
            name="productAvailable"
            checked={product.productAvailable}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2">Available</span>
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
