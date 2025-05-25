import axios from "axios";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  const [emailData, setEmailData] = useState({ subscribeEmail: "" });
  const [loading, setLoading] = useState(false);
  const [status, setResponseMessage] = useState(""); // success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!emailData.subscribeEmail) {
      alert("Please enter an email.");
      return;
    }

    try {
      // setLoading(true);
      // await axios.post("http://localhost:8080/api/subscribe", emailData);
      // setStatus("Subscribed successfully!");
      // setEmail({ email: "" });

      await axios.post("http://localhost:8080/api/subscribe", emailData);

      // Update the endpoint as needed
      setResponseMessage("Contact submitted successfully!");
      alert("Contact submitted successfully!");
      // console.log("Success:", response.data);

      // Optionally reset form
      setEmailData({
        email: "",
      });
    } catch (error) {
      console.error("Subscription error:", error);
      setResponseMessage("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <footer
        className="relative text-white pt-12"
        style={{
          backgroundImage: "url('/Images/footer_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Newsletter */}
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <input
                type="email"
                placeholder="Write Email Here"
                name="subscribeEmail"
                value={emailData?.subscribeEmail}
                onChange={handleChange}
                className="px-4 py-2 rounded-full w-full sm:w-2/3 text-white border-4 bg-transparent focus:outline-none focus:border-green-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-400 hover:text-red-600 flex items-center gap-2 transition"
                disabled={loading}
              >
                <FiMail />
                {loading ? "Submitting..." : "Subscribe"}
              </button>
            </form>

            {/* Status Message */}
            {status && (
              <p className="mt-3 text-sm font-medium text-yellow-300">
                {status}
              </p>
            )}
          </div>

          {/* Links & Info */}
          <div className="bg-black opacity-74 pb-6 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 py-5 px-4">
              <div className="col-span-2">
                <h2 className="text-lg font-semibold mb-2">FAIRWAYCLIFFS</h2>
                <p className="text-sm text-gray-300 mb-4">
                  Lorem ipsum dolor sit amet, consectetur. Ultrices diam non oda
                  tellus eget.
                </p>
                <div className="flex space-x-3 text-lg">
                  <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
                  <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
                  <FaTwitter className="hover:text-gray-400 cursor-pointer" />
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Help</p>
                <p>View More</p>
                <p>Customer Support</p>
              </div>

              <div className="space-y-2 text-sm">
                <p>Our Services</p>
                <p>Our Reviews</p>
                <p>Our Team</p>
                <p>Pricing</p>
                <p>Benefits</p>
              </div>
            </div>

            <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
              Created by Sabbir Hossen &copy; 2025
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
