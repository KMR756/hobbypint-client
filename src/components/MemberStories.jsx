import React from "react";
import clientImg1 from "/clientImg1.jpg";
import concertImg from "/concertImg.jpg";
import bookimg1 from "/bookimg1.jpg";
import guiter1 from "/guiter1.jpg";

import { Fade, Slide } from "react-awesome-reveal";
const MemberStories = () => {
  return (
    <>
      <div className="w-[98%] lg:w-10/12 mx-auto my-15 px-7">
        <Fade direction="up" duration={2000} triggerOnce>
          <h1 className="lato-bold text-6xl text-[#C30E59]">
            Real Stories from Our Members
          </h1>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-10 mt-10">
          <Slide direction="left" triggerOnce duration={2000}>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src={clientImg1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p className="lato-regular-italic">
                  “I found my hiking crew through HobbyPoint. Now we explore new
                  trails every weekend!” <br />{" "}
                  <span>
                    {" "}
                    <strong>— Nusrat, Dhaka</strong>{" "}
                  </span>
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="left" triggerOnce duration={2000}>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src={concertImg} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p className="lato-regular-italic">
                  "Joining the concert lovers group changed my weekends! I’ve
                  made amazing friends."
                  <br />{" "}
                  <span>
                    {" "}
                    <strong>— Rahim, Dhaka</strong>{" "}
                  </span>
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right" triggerOnce duration={2000}>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src={bookimg1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p className="lato-regular-italic">
                  “I started a local book club, and we’re now 20 members strong.
                  Thank you!”
                  <br />{" "}
                  <span>
                    {" "}
                    <strong>— Anik, Dhaka</strong>{" "}
                  </span>
                </p>
              </div>
            </div>
          </Slide>
          <Slide direction="right" triggerOnce duration={2000}>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src={guiter1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p className="lato-regular-italic">
                  “As a guitarist, I joined jam sessions with others in my area.
                  It’s the best part of my week!”
                  <br />{" "}
                  <span>
                    {" "}
                    <strong>— Abir, Khulna</strong>{" "}
                  </span>
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default MemberStories;
