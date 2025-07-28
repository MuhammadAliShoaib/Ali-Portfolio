import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import About from "../../components/About";
import Education from "../../components/Education";

const Landing = () => {
  return (
    <div className="w-full min-h-screen bg-black px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-10 lg:col-span-8 lg:col-start-2">
          <Navbar />
          <Header />
          <About />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Landing;
