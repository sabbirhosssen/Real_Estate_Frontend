import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
import HeadNav from "../layouts/Header/HeadNav";

const HomeRoute = () => {
  return (
    <div>
      <HeadNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeRoute;
