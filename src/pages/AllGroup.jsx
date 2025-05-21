import React from "react";
import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
const AllGroup = () => {
  const groups = useLoaderData();
  console.log(groups);

  return (
    <>
      <h1 className="lato-bold  text-6xl text-center py-10 text-[#C30E59] ">
        ALL Groups:
      </h1>
      <div className=" w-full lg:w-10/12  mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 px-10 py-10">
        {groups.map((group) => (
          <Fade duration={1000} triggerOnce>
            <div>
              <div className="card w-full border-2 border-transparent hover:border-[#C30E59] hover:bg-[#f5eedd] transition-all duration-300  bg-white shadow-sm h-[400px]">
                <figure>
                  <img
                    src={group.photo}
                    className="h-[200px] w-full object-cover"
                  />
                </figure>
                <div className="flex justify-between items-start  mx-5 mt-4">
                  <div>
                    <p className="lato-bold border-transparent w-fit rounded-4xl py-1 px-2 bg-[#FE5D2680] text-[#533B4D] ">
                      {group.groupCategory}
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <IoLocationOutline
                        size={24}
                        className="min-w-[24px] text-blue-600 mt-1"
                      />
                      <p className="text-sm text-gray-400 leading-snug">
                        {group.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <p className="lato-light border-transparent w-fit rounded-4xl py-1 px-2 bg-[#a0b0e580] text-[#533B4D] text-sm">
                      Start Date: {group.startDate}
                    </p>
                  </div>
                </div>
                <div className="card-body flex flex-col justify-between">
                  <div className="border-transparent p-4 rounded-3xl bg-[#FFFBDE60] hover:bg-white transition-all duration-300  overflow-hidden max-h-[100px] text-ellipsis">
                    <h2 className="lato-bold text-xl text-[#C30E59]">
                      {group.groupName}
                    </h2>
                    <p className="lato-regular text-gray-600 flex items-center mt-2 line-clamp-3">
                      {group.description}
                    </p>
                  </div>
                  <div className="card-actions justify-end mt-auto">
                    <button className="btn bg-[#C30E59] text-white">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};

export default AllGroup;
