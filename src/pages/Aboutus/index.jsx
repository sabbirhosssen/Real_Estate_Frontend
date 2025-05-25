import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
      <section className="pt-24 py-16 px-6 md:px-20 bg-white text-gray-800">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">
          Transforming Homes and <br /> Creating Dream Spaces
        </h2>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src="/Images/Modern_home.png"
            alt="Modern Home"
            className="w-full md:w-1/2 rounded shadow"
          />
          <div className="w-full md:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Welcome to [website name], your one-stop destination for all
              things home improvement.
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              From remodeling and new home construction to home studios and shed
              structures, we are passionate about helping homeowners create the
              spaces they've always dreamed of, and we have the expertise and
              resources to make it happen.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Welcome to [website name], your one-stop destination for all
              things home improvement.
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              From remodeling and new home construction to home studios and shed
              structures, we are passionate about helping homeowners create the
              spaces they've always dreamed of, and we have the expertise and
              resources to make it happen.
            </p>
          </div>
          <img
            src="/Images/Dream_home.png"
            alt="Dream Home"
            className="w-full md:w-1/2 rounded shadow"
          />
        </div>

        {/* Button */}
        <div className="text-center">
          <Link to="/contact">
            <button className="border border-black px-6 py-3 text-sm rounded hover:bg-black hover:text-white transition">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
