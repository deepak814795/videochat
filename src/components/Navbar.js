import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="bg-black/90">
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[90vw] mx-auto">
        {/* Left */}
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="text-white font-bold">
            <p className="text-[21px] pl-2">Video Call App</p>
          </div>
        </div>

        {/* Right */}
        <div className="">
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li><a href="https://6478f2ff932d5802d348cbd1--strong-dodol-20f52f.netlify.app/">About</a></li>
            <li><a href="https://648c5d260aa4230ebd8060fc--gregarious-platypus-4c40f8.netlify.app/">Blogs</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
