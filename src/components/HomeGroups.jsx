import React from "react";
import HomeGroupCard from "./HomeGroupCard";

const HomeGroups = ({ groups }) => {
  // console.log(groups);

  return (
    <>
      <div>
        {groups.map((group) => (
          <HomeGroupCard key={group._id} group={group}></HomeGroupCard>
        ))}
      </div>
    </>
  );
};

export default HomeGroups;
