import React from "react";
import { IoLocationOutline } from "react-icons/io5";

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";
const HomeGroupCard = ({ group }) => {
  // console.log(group);
  const {
    _id,
    description,
    groupCategory,
    groupName,
    location,

    photo,
    startDate,
  } = group;

  return (
    <>
      <Fade duration={1000} triggerOnce>
        <div>
          <div className="card w-full border-2 border-transparent hover:border-[#C30E59] dark:hover:border-white hover:bg-[#f5eedd] dark:hover:bg-white transition-all duration-300  bg-white dark:bg-gray-200 shadow-sm h-[400px]">
            <figure>
              <img src={photo} className="h-[200px] w-full object-cover" />
            </figure>
            <div className="flex justify-between items-start  mx-5 mt-4">
              <div>
                <p className="lato-bold border-transparent w-fit rounded-4xl py-1 px-2 bg-[#FE5D2680] text-[#533B4D] ">
                  {groupCategory}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <IoLocationOutline
                    size={24}
                    className="min-w-[24px] text-blue-600 mt-1"
                  />
                  <p className="text-sm text-gray-400 dark:text-black leading-snug">
                    {location}
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <p className="lato-light border-transparent w-fit rounded-4xl py-1 px-2 bg-[#a0b0e580] text-[#533B4D] text-sm">
                  Start Date: {startDate}
                </p>
              </div>
            </div>
            <div className="card-body flex flex-col justify-between">
              <div className="border-transparent p-4 rounded-3xl bg-[#FFFBDE60] dark:bg-gray-300 hover:bg-white dark:hover:bg-gray-400 transition-all duration-300  overflow-hidden max-h-[100px] text-ellipsis">
                <h2 className="lato-bold text-xl text-[#C30E59]">
                  {groupName}
                </h2>
                <p className="lato-regular text-gray-600 flex items-center mt-2 line-clamp-3">
                  {description}
                </p>
              </div>
              <div className="card-actions justify-end mt-auto">
                <Link
                  to={`/group-details/${_id}`}
                  className="btn bg-[#C30E59] text-white"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default HomeGroupCard;
