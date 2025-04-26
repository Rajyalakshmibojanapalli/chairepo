
import React, { useEffect, useState } from "react";

// Define the recurring intakes (1st June, 1st Sept, 1st Jan)
const getNextIntakeDate = () => {
  const now = new Date();
  const year = now.getFullYear();

  const intakes = [
    new Date(`${year}-06-01T00:00:00`),
    new Date(`${year}-09-01T00:00:00`),
    new Date(`${year + 1}-01-01T00:00:00`)
  ];

  // Find the next upcoming intake
  const nextIntake = intakes.find(intake => intake > now);
  return nextIntake || new Date(`${year + 1}-06-01T00:00:00`);
};

const CountdownTimer = () => {
  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {};
  };

  const [targetDate, setTargetDate] = useState(getNextIntakeDate());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      // Reset timer when it reaches 0
      if (Object.keys(newTimeLeft).length === 0) {
        const nextDate = getNextIntakeDate();
        setTargetDate(nextDate);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.entries(timeLeft).map(([unit, value]) => (
    <div
      key={unit}
      className="flex flex-col items-center px-3 py-2 sm:px-4 sm:py-3 bg-white bg-opacity-10 rounded-lg"
    >
      <span className="text-3xl sm:text-4xl font-bold">{value}</span>
      <span className="text-sm sm:text-base">{unit}</span>
    </div>
  ));

  return (
    <div className="bg-[#5a7a9a] text-white p-6 sm:p-8 rounded-2xl shadow-lg text-center max-w-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Next Intake Opens Soon!
      </h2>
      <p className="text-base sm:text-lg mb-1">
        Get ready! Our next registration phase opens soon.
      </p>
      <p className="text-sm mb-6">
        Stay sharp and be first in line – limited slots per intake.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
};

export default CountdownTimer;
