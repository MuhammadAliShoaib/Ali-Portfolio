import React from "react";
import "../../index.css";
import { images } from "../../assets";

const Header = () => {
  return (
    <div className="boxes">
      <div className="h-[250px] bg-gray-400 relative">
        <div
          className="border-4 border-primary absolute top-30 left-10"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "100px",
          }}
        >
          <img
            src={images.my_image}
            alt="User Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 pt-20 px-10 sm:grid-cols-1 sm:px-5">
        <div>
          <h1 className="text-3xl font-semibold">Muhammad Ali</h1>
          <h2 className="text-xl">
            Assistant Software Engineer@Meta Frolic Labs | SZABIST'24
          </h2>
          <h2 className="text-xl">MERN Stack | React Native</h2>
          <div className="my-2">
            <p className="text-gray-400">Karachi, Sindh, Pakistan</p>
          </div>
        </div>
        <div >
          <div className="flex items-center gap-4 my-2">
            <img
              src={
                "https://media.licdn.com/dms/image/v2/D4D0BAQFhpDIQHLCahw/company-logo_100_100/company-logo_100_100/0/1692106641339/szabistofficial_logo?e=1756339200&v=beta&t=AXVm8sDqcNDskSUxZrUHDc5cIogg_Tne-GJWG2Jwa4A"
              }
              alt="SZABIST"
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            <h2 className="text-lg font-semibold">
              Shaheed Zulfiqar Ali Bhutto Institute Of Science And Technology
            </h2>
          </div>
          <div className="flex items-center gap-4 my-2">
            <img
              src={
                "https://media.licdn.com/dms/image/v2/D4D0BAQFhpDIQHLCahw/company-logo_100_100/company-logo_100_100/0/1692106641339/szabistofficial_logo?e=1756339200&v=beta&t=AXVm8sDqcNDskSUxZrUHDc5cIogg_Tne-GJWG2Jwa4A"
              }
              alt="SZABIST"
              style={{
                width: "32px",
                height: "32px",
              }}
            />
            <h2 className="text-lg font-semibold">
              Meta Frolic Labs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
