import React from "react";
import CountUp from "react-countup";
import "aos/dist/aos.css";

const Counter = ({ endValue }) => {
  return (
    <div className="counter">
      <CountUp
        start={0}
        end={endValue}
        duration={1}
        enableScrollSpy
        className="text-[100px]"
      />
    </div>
  );
};

export default Counter;
