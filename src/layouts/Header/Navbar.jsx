import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/Images/hero_section.png')`,
        }}
      >
        {/* Overlay  class bg-black bg-opacity-50 */}
        <div className="absolute inset-0 "></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-serif font-semibold mb-4">
            From Concept to Creation
          </h1>
          <p className="text-white text-sm md:text-lg mb-6">
            Your Partner in Remodeling and New Builds
          </p>
          <Link
            to="contact"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
