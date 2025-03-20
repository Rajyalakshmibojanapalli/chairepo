import React from "react";
import about from "../assets/aboutus.png";
import AvatarCircles from "../global/AvatarCircles";
import CountUp from "../global/CountUp";

const About = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  return (
    <div className="pt-[120px] about">
      <section
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/48/f1/de/48f1de53e34974c4fb28c8b1e98923aa.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
        className="h-[200px] m-4 rounded-lg flex items-center justify-center relative overflow-hidden md:h-[250px]"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <h1 className="text-center text-4xl text-[#ffff] font-semibold md:text-6xl relative z-10">
          ABOUT US
        </h1>
      </section>

      <section className="min-h-screen flex flex-col md:flex-row relative p-4 py-10">
        {/* Image Section (35% width on larger screens) */}
        <div className="w-full md:w-2/5">
          <img
            src={about}
            alt="About Us"
            className="w-full h-[400px] md:h-[500px] lg:h-screen rounded-lg object-cover"
          />
        </div>

        {/* Content Section (65% width on larger screens) */}
        <div className="w-full md:w-3/5 flex flex-col justify-start md:justify-start  md:items-start  md:px-12 gap-6 ">
          <h2 className="text-5xl font-bold  text-left mt-10 md:mt-0">
            INU choose international education
          </h2>
          <p className="text-left text-xl">Founder name</p>
          <p className="text-left">Education details</p>
          <p className="text-sm text-gray-800  text-left leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in
            velit vel nunc hendrerit semper. Sed in neque a massa efficitur
            tincidunt. Nullam sed arcu vel risus fringilla faucibus. Sed varius,
            diam vitae hendrerit dictum, ligula metus semper velit, ut pharetra
            nunc enim in velit. Sed in nisi ac arcu ultricies placerat.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>

          <AvatarCircles avatarUrls={users} numPeople={99} />
          <button className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300">
            Take a test
          </button>
        </div>
      </section>
      <section className="bg-[] p-4 py-10">
        <h3 className="text-3xl font-semibold md:text-6xl text-center pb-10">
          Our records
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#121212] flex flex-col items-center justify-center rounded-lg text-white pb-10">
            <div className="flex">
              {" "}
              <CountUp endValue={1000} duration={2} enableScrollSpy />
              <span className="text-[100px]">+</span>
            </div>
            <h3 className="text-2xl">Students are enrolled</h3>
          </div>
          <div className="bg-[#121212] flex flex-col  items-center justify-center rounded-lg text-white pb-10">
            <div className="flex">
              {" "}
              <CountUp endValue={10} duration={2} enableScrollSpy />
              <span className="text-[100px]">+</span>
            </div>
            <h3 className="text-2xl">Tied up with</h3>
          </div>
          <div className="bg-[#121212] flex flex-col  items-center justify-center rounded-lg text-white pb-10">
            <div className="flex">
              <CountUp endValue={99} duration={2} enableScrollSpy />
              <span className="text-[100px]">%</span>
            </div>
            <h3 className="text-2xl">Succes rate</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
