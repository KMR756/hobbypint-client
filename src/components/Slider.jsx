import React from "react";
// Import Swiper React components
import slide1 from "/slide-1.jpg";
import slide2 from "/slide-2.jpg";
import slide3 from "/slide-3.jpg";
import slide4 from "/slide-4.jpg";
import slide5 from "/slide-5.jpg";
import slide6 from "/slide-6.jpg";
import slide7 from "/slide-7.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full lg:w-10/12 mx-auto">
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover opacity-60"
            />

            <div className="absolute inset-0 flex-col flex items-start pt-8 pl-5 lg:pl-11  justify-start">
              <h1 className="text-[#C30E59] dark:text-white text-3xl sm:text-3xl md:text-7xl font-bold">
                <Typewriter
                  words={["Explore", "Connect", "Create"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-orange-700 dark:text-white text-sm lg:text-3xl font-bold w-full lg:w-1/2 pt-10 lg:mt-20  sm:text-lg md:text-xl px-4">
                <Typewriter
                  words={[
                    "Discover exciting new hobbies, meet like-minded individuals, and collaborate on creative projects. HobbyPoint helps you turn interests into vibrant connections and lasting memories.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={10}
                  deleteSpeed={0}
                  delaySpeed={5000}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full lg:w-10/12 mx-auto">
            <img
              src={slide2}
              alt="Slide 1"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover opacity-60"
            />

            <div className="absolute inset-0 flex-col flex items-start pt-8 pl-5 lg:pl-11  justify-start">
              <h1 className="text-[#C30E59] dark:text-white text-3xl sm:text-3xl md:text-7xl font-bold">
                <Typewriter
                  words={["Read", "Discuss", "Share"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-orange-700 dark:text-white text-sm lg:text-3xl font-bold w-full lg:w-1/2 pt-10 lg:mt-20  sm:text-lg md:text-xl px-4">
                <Typewriter
                  words={[
                    " Join local book lovers to read and reflect together. From fiction to philosophy, every discussion brings new insights and friendships through shared literary journeys.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={10}
                  deleteSpeed={0}
                  delaySpeed={5000}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full lg:w-10/12 mx-auto">
            <img
              src={slide3}
              alt="Slide 1"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover opacity-60"
            />

            <div className="absolute inset-0 flex-col flex items-start pt-8 pl-5 lg:pl-11  justify-start">
              <h1 className="text-[#C30E59] dark:text-white text-3xl sm:text-3xl md:text-7xl font-bold">
                <Typewriter
                  words={["Sing", "Play", "Perform"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-orange-700 dark:text-white text-sm lg:text-3xl font-bold w-full lg:w-1/2 pt-10 lg:mt-20  sm:text-lg md:text-xl px-4">
                <Typewriter
                  words={[
                    "Share your musical passion by joining local jam sessions, singing circles, or performance meetups. Express yourself and find your stage among fellow music lovers.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={10}
                  deleteSpeed={0}
                  delaySpeed={5000}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full lg:w-10/12 mx-auto">
            <img
              src={slide4}
              alt="Slide 1"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover opacity-60"
            />

            <div className="absolute inset-0 flex-col flex items-start pt-8 pl-5 lg:pl-11  justify-start">
              <h1 className="text-[#C30E59] dark:text-white text-3xl sm:text-3xl md:text-7xl font-bold">
                <Typewriter
                  words={["Hike", "Climb", "Adventure"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-orange-700 dark:text-white text-sm lg:text-3xl font-bold w-full lg:w-1/2 pt-10 lg:mt-20  sm:text-lg md:text-xl px-4">
                <Typewriter
                  words={[
                    " Love the outdoors? Connect with hiking crews and adventure seekers who organize trips to explore nature, conquer trails, and build strong bonds through every climb.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={10}
                  deleteSpeed={0}
                  delaySpeed={5000}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full lg:w-10/12 mx-auto">
            <img
              src={slide5}
              alt="Slide 1"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover opacity-60"
            />

            <div className="absolute inset-0 flex-col flex items-start pt-8 pl-5 lg:pl-11  justify-start">
              <h1 className="text-[#C30E59] dark:text-white text-3xl sm:text-3xl md:text-7xl font-bold">
                <Typewriter
                  words={["Craft", "Design", "Inspire"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-orange-700 dark:text-white text-sm lg:text-3xl font-bold w-full lg:w-1/2 pt-10 lg:mt-20  sm:text-lg md:text-xl px-4">
                <Typewriter
                  words={[
                    "  Dive into the world of handmade crafts, DIY projects, and design challenges. Inspire and get inspired through workshops, fairs, and hobby groups that celebrate creativity.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={10}
                  deleteSpeed={0}
                  delaySpeed={5000}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full lg:w-10/12 mx-auto">
            <img
              src={slide6}
              alt="Slide 1"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover opacity-60"
            />

            <div className="absolute inset-0 flex-col flex items-start pt-8 pl-5 lg:pl-11  justify-start">
              <h1 className="text-[#C30E59] dark:text-white text-3xl sm:text-3xl md:text-7xl font-bold">
                <Typewriter
                  words={["Code", "Build", "Innovate"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-orange-700 dark:text-white text-sm lg:text-3xl font-bold w-full lg:w-1/2 pt-10 lg:mt-20  sm:text-lg md:text-xl px-4">
                <Typewriter
                  words={[
                    "  Join tech enthusiasts and developers to build side projects, learn new tools, and innovate together. Perfect for coders, makers, and future startup founders.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={10}
                  deleteSpeed={0}
                  delaySpeed={5000}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full lg:w-10/12 mx-auto">
            <img
              src={slide7}
              alt="Slide 1"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover opacity-60"
            />

            <div className="absolute inset-0 flex-col flex items-start pt-8 pl-5 lg:pl-11  justify-start">
              <h1 className="text-[#C30E59] dark:text-white text-3xl sm:text-3xl md:text-7xl font-bold">
                <Typewriter
                  words={["Sing", "Jam", "Perform"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h1>
              <p className="text-orange-700 dark:text-white text-sm lg:text-3xl font-bold w-full lg:w-1/2 pt-10 lg:mt-20  sm:text-lg md:text-xl px-4">
                <Typewriter
                  words={[
                    " Connect with fellow music lovers through concert nights, open mic events, and local jam sessions. Whether you're a performer or a passionate listener, this is your stage to shine and share.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={10}
                  deleteSpeed={0}
                  delaySpeed={5000}
                />
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
