import React from "react";
import Slider from "../components/Slider";
import WhyJoint from "../components/WhyJoint";

import MemberStories from "../components/MemberStories";
import { useLoaderData } from "react-router";
import HomeGroups from "../components/HomeGroups";

const Home = () => {
  const groups = useLoaderData();
  // console.log(groups);

  return (
    <>
      <Slider />
      <HomeGroups groups={groups} />
      <WhyJoint />
      <MemberStories />
    </>
  );
};

export default Home;
