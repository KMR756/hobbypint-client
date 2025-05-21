import React from "react";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import amin1 from "../assets/search.json";
import meet from "../assets/meet.json";
import group from "../assets/group.json";
import update from "../assets/update.json";

const WhyJoint = () => {
  return (
    <>
      <div className="w-full lg:w-10/12 mx-auto mt-15 px-7">
        <Fade direction="up" duration={2000} triggerOnce>
          {" "}
          <h2 className="lato-bold text-3xl lg:text-6xl text-[#C30E59] ">
            Why Join HobbyPoint?
          </h2>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-10 mt-10">
          <div className=" border-transparent border-2 rounded-3xl bg-white py-5 hover:bg-[#f5eedd] hover:border-2 hover:border-[#C30E59] transition-all duration-300 ">
            <div className="w-[100%]  h-[200px] mx-auto  rounded-2xl overflow-hidden ">
              <Lottie
                animationData={amin1}
                loop
                autoplay
                className="w-full  object-cover"
              />
            </div>
            <h1 className="lato-black text-2xl text-[#C30E59] text-center mt-5">
              Find Local Hobby Groups
            </h1>
            <p className="roboto-regular text-gray-400 text-center px-9 mt-3">
              Discover clubs and meetups around your interests, near your
              location.
            </p>
          </div>
          <div className=" border-transparent border-2 rounded-3xl bg-white py-5 hover:bg-[#f5eedd] hover:border-2 hover:border-[#C30E59] transition-all duration-300 ">
            <div className="w-[100%] h-[200px] mx-auto  rounded-2xl overflow-hidden ">
              <Lottie
                animationData={meet}
                loop
                autoplay
                className="w-full  object-cover"
              />
            </div>
            <h1 className="lato-black text-2xl text-[#C30E59] text-center mt-5">
              Meet Like-Minded People
            </h1>
            <p className="roboto-regular text-gray-400 text-center px-9 mt-3">
              Build friendships and connections through shared activities.
            </p>
          </div>
          <div className=" border-transparent border-2 rounded-3xl bg-white py-5 hover:bg-[#f5eedd] hover:border-2 hover:border-[#C30E59] transition-all duration-300 ">
            <div className="w-[100%] h-[200px] mx-auto  rounded-2xl overflow-hidden ">
              <Lottie
                animationData={group}
                loop
                autoplay
                className="w-full  object-cover"
              />
            </div>
            <h1 className="lato-black text-2xl text-[#C30E59] text-center mt-5">
              Create Your Own Group
            </h1>
            <p className="roboto-regular text-gray-400 text-center px-9 mt-3">
              Can’t find your thing? Start a new group and grow a community.
            </p>
          </div>
          <div className=" border-transparent border-2 rounded-3xl bg-white py-5 hover:bg-[#f5eedd] hover:border-2 hover:border-[#C30E59] transition-all duration-300 ">
            <div className="w-[100%] h-[200px] mx-auto  rounded-2xl overflow-hidden ">
              <Lottie
                animationData={update}
                loop
                autoplay
                className="w-full  object-cover"
              />
            </div>
            <h1 className="lato-black text-2xl text-[#C30E59] text-center mt-5">
              Stay Updated
            </h1>
            <p className="roboto-regular text-gray-400 text-center px-9 mt-3">
              Get notified about events, sessions, and group activities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyJoint;
