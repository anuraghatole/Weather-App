import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoPartlySunnySharp } from "react-icons/io5";
import { FaCloudMoon } from "react-icons/fa";

const Temp = ({ setCity, states }) => {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className=" flex justify-between">
        <input
          type="text"
          className=" bg-slate-600 border rounded-lg border-slate-500 text-slate-200 placeholder-slate-400 text-md w-60 pl-2 p-2 focus:outline-none focus:border-slate-400"
          placeholder="Enter city name?"
          onChange={handleCityChange}
          defaultValue="New Delhi"
        />
        <div>
          <IoLocationOutline
            size={40}
            className=" m-4 text-white text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      <div className=" flex justify-center mt-5">
        {states.isDay !== 0 ? (
          <IoPartlySunnySharp
            size={50}
            className=" text-white text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        ) : (
          <FaCloudMoon
            size={50}
            className=" text-white text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        )}
      </div>
      <div className=" flex justify-center items-center text-slate-200 mt-8">
        <p className=" font-semibold text-[55px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
          {states.temp}
        </p>
        <span className=" text-[33px]">°C</span>
      </div>

      <div className="flex justify-center items-center text-slate-400 mt-8 text-[25px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out">
        {states.condition}
      </div>
      <div className=" flex justify-center text-slate-400 mt-5 text-[15px]">
        Today: {states.time}|{states.location}
      </div>
    </>
  );
};

export default Temp;
