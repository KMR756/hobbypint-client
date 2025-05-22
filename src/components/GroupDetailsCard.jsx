import React from "react";

const GroupDetailsCard = ({ group }) => {
  //   console.log(group);
  const {
    _id,
    email,
    photo,
    groupCategory,
    groupName,
    location,
    maxMember,
    startDate,
    userName,
  } = group;
  return (
    <>
      <img src={photo} alt="" />
    </>
  );
};

export default GroupDetailsCard;
