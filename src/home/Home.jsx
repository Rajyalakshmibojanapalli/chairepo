import React from "react";
import "./home.css";
import mainHero from "../assets/main-hero.png";
import AnimatedTestimonials from "../global/AnimatedTestimonials";
import SplitText from "../global/SplitText";
import Carousel from "../global/Carousel";
import Process from "../global/Process";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../intakeCounter/NextIntake";

const Home = () => {
  const cardContent = [
    {
      title: "International Education",
      description:
        "We provide comprehensive international education solutions that cater to diverse needs and preferences.",
      image: "/images/international-education.svg",
    },
    {
      title: "Personalized Learning",
      description:
        "We tailor our curriculum to suit your individual learning needs and preferences.",
      image: "/images/personalized-learning.svg",
    },
    {
      title: "Workshops and Seminars",
      description:
        "We offer workshops and seminars to help you learn and grow professionally.",
      image: "/images/workshops-seminars.svg",
    },
    {
      title: "Workshops and Seminars",
      description:
        "We offer workshops and seminars to help you learn and grow professionally.",
      image: "/images/workshops-seminars.svg",
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <section className="min-h-screen flex flex-col md:flex-row relative bg-[#5a7a9a] ">
        <div className="flex-1 text-center px-4 md:text-left flex flex-col justify-center pt-40 pb-24  md:min-h-screen ">
          <div>
            <p style={{ fontWeight: 'bold' }}>
              “Your Gateway to UK Master’s Education – Let Luck & Knowledge Choose You!”
            </p>

            <SplitText />

            <h5 className="mt-4 text-white">
              {/* “We make studying abroad a seamless experience, guiding you every
              step of the way towards a brighter future.” */}

              “We pick 3 students each intake as a lottery system so they will have to pay rs.888 and do quiz questions for masters in UK”
            </h5>
            <button
              onClick={() => {
                navigate("/elgibility-test");
              }}
              className="bg-[#f6f6f6] text-black font-semibold px-5 py-2 rounded-md hover:bg-[#ffffff] hover:scale-105 transition-all duration-300 mt-4"
            >
              Take a test
            </button>
          </div>
        </div>

        <div className="relative flex-1 flex flex-col items-center ">
          <div className="overlayhomeTop absolute bottom-10 md:bottom-[60px] text-center py-4">
            <div>
              <p>Quatation</p>
              <div className="mt-2">
                <button>+917272772911</button>
              </div>
            </div>
          </div>
          <img
            src={mainHero}
            alt=""
            loading="lazy"
            className="main-heroimg w-full max-w-xs md:max-w-full rounded-full"
          />
        </div>
      </section>

      <section className="p-4 second-home-hero py-10 pb-20 overflow-hidden bg-[#eff0f0]">
        <div>
          <h3 className="text-3xl font-semibold md:text-6xl text-center">
            How It Works
          </h3>
          <Process />
        </div>
      </section>
      <section className="p-4 pt-10 ">
        <h3 className="text-3xl font-semibold md:text-6xl text-center pb-5">
          Our University
        </h3>
        <div className="flex w-full  p-4 gap-4">
          <Carousel />
        </div>
      </section>
      <section className="p-4 py-10">
        <h3 className="text-3xl font-semibold md:text-6xl text-center">
        Success Stories 
        </h3>
        <AnimatedTestimonials />
      </section>
      <section className="m-20">
        <CountdownTimer />
      </section>
    </div>
  );
};

export default Home;
