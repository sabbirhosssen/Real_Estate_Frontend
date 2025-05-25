import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p>Settings content goes here</p>
      <Link to="addProduct">Add new Products</Link>
    </div>
  );
};

export default Settings;
