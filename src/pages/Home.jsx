import React from "react";
import Slider from "../components/Slider";
import WhyJoint from "../components/WhyJoint";
import MemberStories from "../components/MemberStories";
import { useLoaderData } from "react-router";

const Home = () => {
  const groups = useLoaderData();
  console.log(groups);

  return (
    <>
      <Slider />
      <WhyJoint />
      <MemberStories />
    </>
  );
};

export default Home;
