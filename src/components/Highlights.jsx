import React from "react";
import { TbDirectionSignFilled } from "react-icons/tb";

const Highlights = ({ states }) => {
  return (
    <>
      <div className=" bg-slate-600 p-2 text-slate-200 flex flex-col justify-start items-text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
        <h2 className=" text-sm mt-2">{states.title}</h2>
        <div className=" mt-2">
          <span className=" text-4xl font-bold">{states.value}</span>
          <span className=" text-2xl">{states.unit}</span>
        </div>

        {states.direction ? (
          <div className=" mt-2 flex">
            <TbDirectionSignFilled size={30} className=" mt-1" />
            <div className=" ms-2 text-slate-200 text-3xl ">
              {states.direction}
            </div>
          </div>
        ) : null}

        {states.title == "Humidity" ? (
          <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
              style={{ width: `${states.value}%` }}
            ></div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Highlights;
