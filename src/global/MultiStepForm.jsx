import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "http://127.0.0.1:5001/inu-choose-int-education/us-central1/api";

export default function EligibilityTestForm() {
  const [formData, setFormData] = useState({
    email: "",
    aptitudeAnswers: {},
    englishAnswers: {},
    gkAnswers: {},
    subjectAnswers: {},
    attemptCount: 0,
    lastAttempt: null,
    status: "pending",
    score: 0,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 5;
  const isLastStep = currentStep === totalSteps;

  // Validate email and fetch student data on email change
  useEffect(() => {
    const validateAndFetchStudentData = async () => {
      if (formData.email) {
        setLoading(true);
        try {
          // Step 1: Validate personal details (email)
          const validateResponse = await fetch(`${BASE_URL}/validatePersonal`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.email }),
          });
          const validateResult = await validateResponse.json();
          if (!validateResponse.ok) {
            throw new Error(validateResult.message);
          }

          // Step 2: Fetch student data if validation succeeds
          const studentResponse = await fetch(`${BASE_URL}/student/${formData.email}`);
          const studentResult = await studentResponse.json();
          if (studentResult.data) {
            setFormData((prev) => ({ ...prev, ...studentResult.data }));
          }
        } catch (err) {
          setError("Error: " + err.message);
        }
        setLoading(false);
      }
    };
    validateAndFetchStudentData();
  }, [formData.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnswerChange = (category, question, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: { ...prev[category], [question]: value },
    }));
  };

  const canAttemptTest = () => {
    const lastAttemptDate = formData.lastAttempt ? new Date(formData.lastAttempt) : null;
    const now = new Date();
    const diffDays = lastAttemptDate
      ? (now - lastAttemptDate) / (1000 * 60 * 60 * 24)
      : 7;
    const withinSixMonths =
      lastAttemptDate && (now - lastAttemptDate) / (1000 * 60 * 60 * 24) <= 180;
    return (
      formData.attemptCount < 3 &&
      (!lastAttemptDate || diffDays >= 7) &&
      withinSixMonths
    );
  };

  const handleNext = () => {
    setDirection(1);
    if (!isLastStep) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    if (!canAttemptTest()) {
      setError("You must wait 7 days or have exceeded attempt limit.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/submit-test`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setFormData((prev) => ({ ...prev, ...result.data }));
        alert(result.message);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Error submitting test: " + err.message);
    }
    setLoading(false);
  };

  const questions = {
    aptitude: ["Q1: 2+2?", "Q2: If 5x=20, x=?"],
    english: ["Q1: Synonym of Happy?", "Q2: Correct the sentence: 'He go to school.'"],
    gk: ["Q1: Capital of UK?", "Q2: Common study abroad requirement?"],
    subject: ["Q1: Course-specific Q1", "Q2: Course-specific Q2"],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading && <p className="text-blue-500 mb-4">Loading...</p>}

        <AnimatePresence initial={false} mode="sync" custom={direction}>
          <motion.div
            key={currentStep}
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="mt-6"
          >
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-blue-600">Get Started</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 mt-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={formData.attemptCount > 0}
                />
                <p className="mt-2 text-sm text-gray-600">
                  Attempts: {formData.attemptCount}/3 | Status: {formData.status}
                </p>
              </div>
            )}

            {currentStep === 2 && (
              <QuestionSection
                title="Aptitude & Reasoning"
                questions={questions.aptitude}
                category="aptitudeAnswers"
                handleAnswerChange={handleAnswerChange}
                answers={formData.aptitudeAnswers}
              />
            )}

            {currentStep === 3 && (
              <QuestionSection
                title="English Proficiency"
                questions={questions.english}
                category="englishAnswers"
                handleAnswerChange={handleAnswerChange}
                answers={formData.englishAnswers}
              />
            )}

            {currentStep === 4 && (
              <QuestionSection
                title="General Knowledge"
                questions={questions.gk}
                category="gkAnswers"
                handleAnswerChange={handleAnswerChange}
                answers={formData.gkAnswers}
              />
            )}

            {currentStep === 5 && (
              <QuestionSection
                title="Subject-Specific"
                questions={questions.subject}
                category="subjectAnswers"
                handleAnswerChange={handleAnswerChange}
                answers={formData.subjectAnswers}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          {currentStep !== 1 && (
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Back
            </button>
          )}
          {isLastStep ? (
            <button
              onClick={handleSubmit}
              disabled={loading || !canAttemptTest()}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!formData.email || loading}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function QuestionSection({ title, questions, category, handleAnswerChange, answers }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
      {questions.map((question, index) => (
        <div key={index} className="mt-4">
          <label className="block text-gray-700">{question}</label>
          <input
            type="text"
            value={answers[`Q${index + 1}`] || ""}
            onChange={(e) => handleAnswerChange(category, `Q${index + 1}`, e.target.value)}
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
    </div>
  );
}

function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex justify-center gap-3 mb-6">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-full ${
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