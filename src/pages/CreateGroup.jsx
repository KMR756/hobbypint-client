import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CreateGroup = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [Name, setName] = useState({ displayName: "", email: "" });

  useEffect(() => {
    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      setName({ displayName, email });

      // console.log(displayName, email);
    }
  }, [user]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const displayName = user.displayName;
        const email = user.email;
        setName({ displayName, email });
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [auth]);

  const navigation = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData);
    const newGroup = Object.fromEntries(formData);
    // console.log(newGroup);

    // sent data to DB
    fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: `${newGroup.groupName} is successfully added.`,
            icon: "success",
            draggable: true,
          });
          navigation("/myGroups");
        }
      });
  };
  return (
    <>
      <div>
        <h1 className="lato-bold text-center mt-10 text-6xl text-[#C30E59] dark:text-white">
          Create a new hobby group
        </h1>
        <form
          onSubmit={handleForm}
          className="w-full lg:w-1/2 mx-auto bg-white dark:bg-gray-400 p-20 my-10 rounded-3xl"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="groupName"
              className="block lato-bold py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="lato-bold peer-focus:font-medium absolute  text-gray-500  dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Group Name :
            </label>
          </div>

          <div>
            <label className="lato-bold block mb-2  font-medium text-gray-500 dark:text-black">
              Select your group name :
            </label>
            <select
              name="groupCategory"
              className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 required"
            >
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Technology</option>
              <option>Fishing</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Music</option>
              <option>Traveling</option>
              <option>Climbing</option>
              <option>Adventure</option>
            </select>
          </div>

          <div>
            <label className="lato-bold block mb-2  font-medium text-gray-500 dark:text-black mt-5">
              Description :
            </label>
            <textarea
              name="description"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div className="relative z-0 w-full mb-5 mt-5 group">
            <input
              type="text"
              name="location"
              className="block lato-bold py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="lato-bold peer-focus:font-medium absolute  text-gray-500  dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Meeting Location :
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="maxMember"
              className="block lato-bold py-2.5 px-0 w-full  text-gray-900  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="lato-bold peer-focus:font-medium absolute  text-gray-500  dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Max Members :
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="startDate"
              className="block lato-bold py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="lato-bold peer-focus:font-medium absolute  text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Start date (DD-MM-YYYY) :
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="photo"
              className="block lato-bold py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="lato-bold peer-focus:font-medium absolute  text-gray-500 dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Image URL :
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              value={Name.displayName}
              readOnly
              className="block lato-bold py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="lato-bold peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              User Name :
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="email"
              value={Name.email}
              readOnly
              className="block lato-bold py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="lato-bold peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              User Email :
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
