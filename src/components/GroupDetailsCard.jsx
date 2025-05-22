import React from "react";
import Swal from "sweetalert2";

const GroupDetailsCard = ({ group }) => {
  const handleJointGroup = () => {
    // console.log("try to joint");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // console.log(today);

    const groupDate = new Date(group.startDate);

    groupDate.setHours(0, 0, 0, 0);
    if (groupDate >= today) {
      Swal.fire({
        title: "Joint this group successfully!!",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Date is over...",
        footer: '<a href="#">Please try another group</a>',
      });
    }
    // console.log(groupDate);
  };
  // console.log(group);
  const {
    _id,
    description,
    email,
    photo,
    groupCategory,
    groupName,
    location,
    maxMember,
    startDate,
    name,
  } = group;
  return (
    <>
      <div className="">
        <h1 className="lato-bold text-center text-xl lg:text-6xl  pt-8 text-[#C30E59]">
          {groupName}
        </h1>
        <div className="card lg:card-side bg-white shadow-sm my-10">
          <div className="w-full lg:w-[60%] px-3 lg:px-20 pt-3 lg:pt-10 ">
            <img src={photo} className="rounded-3xl" alt="Album" />
            <p className="py-3 px-2 lg:px-5 text-center text-sm lg:text-xl bg-[#FE5D2610] m-1 mt-5  lg:m-5 rounded-3xl">
              {description}
            </p>
          </div>
          <div className="card-body mt-10 border-transparent rounded-4xl lg:mr-20 mr-2 ml-2 lg:ml-0 mb-8 bg-[#FE5D2610]">
            <h1 className="lato text-xl lg:text-2xl py-5">
              {" "}
              <span className="font-bold lg:text-3xl text-xl">
                Group creator name:
              </span>{" "}
              {name}
            </h1>
            <hr />
            <h1 className="lato text-xl lg:text-2xl py-5">
              {" "}
              <span className="font-bold lg:text-3xl text-xl">
                Category:
              </span>{" "}
              {groupCategory}
            </h1>
            <hr />
            <h1 className="lato text-xl lg:text-2xl py-5">
              {" "}
              <span className="font-bold lg:text-3xl text-xl">Email:</span>{" "}
              {email}
            </h1>
            <hr />
            <div className="lato bg-[#a0b0e580] mt-10 p-10 rounded-2xl  text-center">
              <p className="text-sm lg:text-xl">
                <span className="font-bold">Starting Date:</span> {startDate}
              </p>
              <p className="text-sm lg:text-xl mt-3">
                <span className="font-bold">Maximum Member:</span> {maxMember}
              </p>
              <p className="text-sm lg:text-xl mt-3 border-transparent bg-white rounded-3xl py-3">
                <span className="font-bold">Meetup location:</span> {location}
              </p>
            </div>
            <p></p>
            <div className="card-actions justify-center ">
              <button
                onClick={handleJointGroup}
                className="btn bg-[#C30E59] text-white text-xl font-black w-full"
              >
                Joint Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupDetailsCard;
