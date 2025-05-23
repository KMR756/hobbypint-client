import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useLoaderData } from "react-router";
import MyGroupCard from "../components/myGroupCard";

const MyGroup = () => {
  const auth = getAuth();
  const userEmail = auth.currentUser.email;
  const AllGroups = useLoaderData();
  // console.log(userEmail);
  const [myGroups, setMyGroups] = useState(
    AllGroups.filter((group) => group.email === userEmail)
  );

  // console.log(groups);

  return (
    <>
      <div>
        <div className="w-[98%] lg:w-8/12 mx-auto my-20">
          <div className="overflow-x-auto">
            <table className="table bg-white">
              {/* head */}
              <thead className="text-[12px] md:text-xl lg:text-2xl ">
                <tr className="">
                  <th className="text-center py-6">Group Name</th>
                  <th>Category</th>
                  <th>Starting Date:</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myGroups.map((groups) => (
                  <MyGroupCard
                    groups={groups}
                    key={groups._id}
                    setMyGroups={setMyGroups}
                    myGroups={myGroups}
                  ></MyGroupCard>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyGroup;
