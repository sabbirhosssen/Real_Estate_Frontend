import React from "react";
import HomeLocation from "../../components/HomeLocation";
import Navbar from "../../layouts/Header/Navbar";
import Aboutus from "../Aboutus";
import Services from "../Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Aboutus />
      <Services />
      <HomeLocation />
    </div>
  );
};

export default Home;
