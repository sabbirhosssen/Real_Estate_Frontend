import axios from "axios";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    contactAddress: "",
    contactMessage: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-set password = contactPhone
    if (name === "contactPhone") {
      setFormData((prev) => ({
        ...prev,
        contactPhone: value,
        password: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      // const response = await axios.post(
      //   "http://localhost:8080/api/contact",
      //   formData
      // );
      await axios.post("http://localhost:8080/api/contact", formData);

      // Update the endpoint as needed
      setResponseMessage("Contact submitted successfully!");
      alert("Contact submitted successfully!");
      // console.log("Success:", response.data);

      // Optionally reset form
      setFormData({
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        contactAddress: "",
        contactMessage: "",
        password: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setResponseMessage("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-20 max-w-xl mx-auto py-16 px-6 mt-10 shadow-md rounded-xl bg-white">
      <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>

      {responseMessage && (
        <div className="mb-4 text-center text-sm text-green-600">
          {responseMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="block text-sm font-medium mb-1">Full Name</div>
          <input
            type="text"
            name="contactName"
            placeholder="Enter your name"
            value={formData.contactName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring focus:ring-red-200"
          />
        </div>

        <div>
          <div className="block text-sm font-medium mb-1">Email</div>
          <input
            type="email"
            name="contactEmail"
            placeholder="Enter your email"
            value={formData.contactEmail}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring focus:ring-red-200"
          />
        </div>

        <div>
          <div className="block text-sm font-medium mb-1">Mobile Number</div>
          <input
            type="tel"
            name="contactPhone"
            placeholder="+880..."
            value={formData.contactPhone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring focus:ring-red-200"
          />
        </div>

        <div>
          <div className="block text-sm font-medium mb-1">Your Address</div>
          <textarea
            name="contactAddress"
            placeholder="Enter your address"
            value={formData.contactAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring focus:ring-red-200"
            required
          ></textarea>
        </div>

        <div>
          <div className="block text-sm font-medium mb-1">Your Message</div>
          <textarea
            name="contactMessage"
            placeholder="Enter your message"
            value={formData.contactMessage}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md outline-none focus:ring focus:ring-red-200"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="hidden">
          <input
            type="text"
            name="password"
            value={formData.password}
            readOnly
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default Contacts;
