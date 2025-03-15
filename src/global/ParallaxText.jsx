import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Utility function for infinite looping
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// Parallax Scrolling Text Component
const ParallaxText = ({ text, baseVelocity = 50, className = "" }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        setRepetitions(Math.ceil(containerWidth / textWidth) + 2);
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden whitespace-nowrap ${className}`}
    >
      <motion.div className="inline-block" style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null} className="px-4">
            {text}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// Main Scroll Component with Smoke Effect
const ScrollVelocityText = ({
  text = "Scrolling Text",
  velocity = 50,
  rows = 2,
  className = "",
}) => {
  return (
    <div
      className={`relative w-full text-[60px] font-bold md:text-[100px] ${className}`}
    >
      {/* Left & Right Smoke Effect using Blur */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-transparent to-transparent blur-xl"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-transparent to-transparent blur-xl"></div>

      {/* Scrolling Text */}
      {Array.from({ length: rows }).map((_, i) => (
        <ParallaxText
          key={i}
          text={text}
          baseVelocity={velocity * (i % 2 === 0 ? 1 : -1)}
        />
      ))}
    </div>
  );
};

export default ScrollVelocityText;
