import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800">
      <div className=" text-white w-64 h-screen pl-5 pr-3 py-5">
        <div className="mb-10">
          <h2 className="text-xl font-semibold">Real Estate Dashboard</h2>
        </div>
        <ul>
          <li>
            <Link to="generateai" className="block py-2">
              Customize now
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="block py-2">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="settings" className="block py-2">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/" className="block absolute bottom-0 left-2 py-2">
              Go Back To Home
            </Link>
          </li>
        </ul>
      </div>

      <div className=" fixed bottom-0 right-0 ">
        <a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-500 text-white m-2 p-3 rounded-full  hover:bg-green-600 flex items-center gap-2">
            <FaWhatsapp className="h-12 w-12" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
