import React, { useState, Children, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MultiStepForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    answers: {},
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const totalSteps = 3;
  const isLastStep = currentStep === totalSteps;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnswerChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      answers: { ...prev.answers, [question]: value },
    }));
  };

  const handleNext = () => {
    setDirection(1);
    if (!isLastStep) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg p-6 border rounded-lg shadow-md">
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        <AnimatePresence initial={false} mode="sync" custom={direction}>
          <motion.div
            key={currentStep}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="mt-4"
          >
            {currentStep === 1 && (
              <div>
                <h2 className="text-lg font-semibold">Personal Details</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-lg font-semibold">Online Test</h2>
                {["Q1", "Q2", "Q3", "Q4"].map((question) => (
                  <div key={question} className="mt-2">
                    <label>{question}: Your Answer</label>
                    <input
                      type="text"
                      value={formData.answers[question] || ""}
                      onChange={(e) =>
                        handleAnswerChange(question, e.target.value)
                      }
                      className="w-full p-2 border rounded"
                    />
                  </div>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-lg font-semibold">Apply</h2>
                <p>Review and submit your details.</p>
                <pre className="p-2 bg-gray-100 rounded mt-2">
                  {JSON.stringify(formData, null, 2)}
                </pre>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-between">
          {currentStep !== 1 && (
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Back
            </button>
          )}
          {isLastStep ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-4 w-4 rounded-full ${
            currentStep > index ? "bg-blue-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

const stepVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};
