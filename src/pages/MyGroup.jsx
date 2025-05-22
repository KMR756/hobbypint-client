import { getAuth } from "firebase/auth";
import React from "react";
import { useLoaderData } from "react-router";

const MyGroup = () => {
  const auth = getAuth();
  const userEmail = auth.currentUser.email;
  // console.log(userEmail);

  const groups = useLoaderData();
  // console.log(groups);

  const myGroups = groups.filter((group) => group.email === userEmail);
  console.log(myGroups);

  return (
    <>
      <div>
        <div className="w-[98%] lg:w-8/12 mx-auto my-20">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="lato-regular w-full text-xl text-left rtl:text-right text-gray-500 ">
              <thead class="text-xl lato-bold text-white uppercase bg-[#C30E59] ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Group name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Group category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Maximum member
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Starting Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              {myGroups.map((myGroup) => (
                <tbody>
                  <tr class="odd:bg-white  even:bg-gray-50  border-b  border-gray-200">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {myGroup.groupName}
                    </th>
                    <td class="px-6 lg:pl-20 pl-10 py-6">
                      {myGroup.groupCategory}
                    </td>
                    <td class="px-6 pl-11 lg:pl-23 py-6">
                      {myGroup.maxMember}
                    </td>
                    <td class="px-6 pl-5 lg:pl-13 py-6">{myGroup.startDate}</td>

                    <td class="px-6 py-4 space-x-4">
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyGroup;
