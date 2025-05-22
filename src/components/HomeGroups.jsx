import React from "react";
import HomeGroupCard from "./HomeGroupCard";
import { Fade } from "react-awesome-reveal";
import AllGroup from "../pages/AllGroup";

const HomeGroups = ({ groups }) => {
  // console.log(groups);
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  // console.log(today);

  const upcomingGroup = groups.filter((group) => {
    // console.log(group);
    if (!group.startDate) return false;
    const groupDate = new Date(group.startDate);

    groupDate.setHours(0, 0, 0, 0);
    // console.log(groupDate);
    return groupDate >= today;
  });
  const visibleGroups = upcomingGroup.slice(0, 6);
  return (
    <>
      <Fade
        className="w-full lg:w-10/12 pl-10 mt-10 mx-auto"
        direction="up"
        duration={2000}
        triggerOnce
      >
        {" "}
        <h1 className="lato-bold text-3xl lg:text-6xl text-[#C30E59] ">
          Ongoing groups:
        </h1>
      </Fade>
      <div className="w-full lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 px-10 py-10">
        {visibleGroups.map((group) => (
          <HomeGroupCard key={group._id} group={group}></HomeGroupCard>
        ))}
      </div>
    </>
  );
};

export default HomeGroups;
