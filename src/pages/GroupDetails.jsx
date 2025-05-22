import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import GroupDetailsCard from "../components/GroupDetailsCard";

const GroupDetails = () => {
  const groups = useLoaderData();
  //   console.log(groups);
  const { id } = useParams();
  //   console.log(id);
  const [group, setGroup] = useState({});

  useEffect(() => {
    const groupDetails = groups.find((group) => group._id == id);
    setGroup(groupDetails);
  }, [groups, id]);
  //   console.log(group);

  return (
    <>
      <div className="w-[95%] lg:w-10/12 mx-auto">
        <GroupDetailsCard group={group}></GroupDetailsCard>
      </div>
    </>
  );
};

export default GroupDetails;
