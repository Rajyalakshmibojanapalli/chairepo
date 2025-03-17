import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const MultiStepForm = () => {
  const data = useSelector((state) => state.authSlice.user);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [finalData, setFinalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const totalSteps = 3;

  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: data?.email ?? "",
    phone: "",
  });

  const [quizData, setQuizData] = useState({
    answers: Array(10).fill(""),
  });

  const [intakeData, setIntakeData] = useState({
    destination: "",
    program: "",
    intakeDate: "",
  });

  const [personalErrors, setPersonalErrors] = useState({});
  const [quizErrors, setQuizErrors] = useState({});
  const [intakeErrors, setIntakeErrors] = useState({});
  const [quizScoreError, setQuizScoreError] = useState("");

  const quizQuestions = [
    { question: "What is React?", correctAnswer: "a" },
    { question: "What is a component?", correctAnswer: "b" },
    { question: "What is JSX?", correctAnswer: "a" },
    { question: "What is state?", correctAnswer: "c" },
    { question: "What are props?", correctAnswer: "d" },
    { question: "What is a hook?", correctAnswer: "b" },
    { question: "What is useEffect?", correctAnswer: "a" },
    { question: "What is useState?", correctAnswer: "c" },
    { question: "What is virtual DOM?", correctAnswer: "d" },
    { question: "What is reconciliation?", correctAnswer: "b" },
  ];

  const validatePersonalData = () => {
    const errors = {};
    if (!personalData.firstName) errors.firstName = "First name is required";
    if (!personalData.lastName) errors.lastName = "Last name is required";
    if (!personalData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(personalData.email))
      errors.email = "Invalid email";
    if (!personalData.phone) errors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(personalData.phone))
      errors.phone = "Phone must be 10 digits";

    setPersonalErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateQuizData = () => {
    const errors = {};
    const unansweredQuestions = quizData.answers.findIndex((answer) => !answer);
    if (unansweredQuestions !== -1) {
      errors.answers = "All questions must be answered";
    }
    setQuizErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateIntakeData = () => {
    const errors = {};
    if (!intakeData.destination)
      errors.destination = "Please select a destination";
    if (!intakeData.program) errors.program = "Please select a program";
    if (!intakeData.intakeDate)
      errors.intakeDate = "Please select an intake date";
    setIntakeErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = async () => {
    setLoading(true);
    setServerError("");
    let isValid = false;

    try {
      if (currentStep === 1) {
        isValid = validatePersonalData();
        if (isValid) {
          const response = await axios.post(
            "https://us-central1-your-project-id.cloudfunctions.net/validatePersonal",
            personalData
          );
          if (response.data.success) {
            isValid = true;
          } else {
            if (response.data.message) {
              setServerError(response.data.message);
            } else {
              setPersonalErrors(response.data.errors || {});
            }
            isValid = false;
          }
        }
      } else if (currentStep === 2) {
        isValid = validateQuizData();
        if (isValid) {
          const response = await axios.post(
            "https://us-central1-your-project-id.cloudfunctions.net/validateQuiz",
            { email: personalData.email, answers: quizData.answers }
          );

          if (response.data.success) {
            setQuizScoreError("");
            isValid = true;
          } else {
            if (response.data.message) {
              setQuizScoreError(response.data.message);
            } else {
              setQuizErrors(response.data.errors || {});
            }
            isValid = false;
          }
        }
      } else if (currentStep === 3) {
        isValid = validateIntakeData();
        if (isValid) {
          setFinalData({
            personal: personalData,
            quiz: { answers: quizData.answers },
            intake: intakeData,
          });
        }
      }

      if (isValid && currentStep < totalSteps) {
        setCompletedSteps((prev) => new Set([...prev, currentStep]));
        setCurrentStep(currentStep + 1);
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setServerError("");
      setQuizScoreError("");
    }
  };

  const handleStepClick = (step) => {
    if (step <= currentStep || completedSteps.has(step)) {
      setCurrentStep(step);
      setServerError("");
      setQuizScoreError("");
    }
  };

  const handleInputChange = (e, setter) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuizAnswerChange = (e, index) => {
    const value = e.target.value;
    setQuizData((prev) => {
      const newAnswers = [...prev.answers];
      newAnswers[index] = value;
      return { ...prev, answers: newAnswers };
    });
  };

  const handleReset = () => {
    setFinalData(null);
    setCurrentStep(1);
    setCompletedSteps(new Set());
    setPersonalData({
      firstName: "",
      lastName: "",
      email: data?.email ?? "",
      phone: "",
    });
    setQuizData({ answers: Array(10).fill("") });
    setIntakeData({ destination: "", program: "", intakeDate: "" });
    setPersonalErrors({});
    setQuizErrors({});
    setIntakeErrors({});
    setQuizScoreError("");
    setServerError("");
  };

  const renderStepIndicators = () => (
    <div className="w-full px-4 md:w-[700px] md:px-0 mb-6">
      <div className="flex justify-center items-center gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
          (step, index) => (
            <React.Fragment key={step}>
              <div
                onClick={() => handleStepClick(step)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white
              transition-colors duration-300 relative flex-shrink-0 ${
                completedSteps.has(step)
                  ? "bg-green-500 cursor-pointer"
                  : currentStep === step
                  ? "bg-blue-500"
                  : step < currentStep
                  ? "bg-blue-300 cursor-pointer"
                  : "bg-gray-300"
              }`}
              >
                {step}
                {completedSteps.has(step) && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                )}
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`h-1 flex-1 transition-all duration-300 ${
                    completedSteps.has(step) ? "bg-green-500" : "bg-gray-300"
                  }`}
                  style={{ minWidth: "20px" }}
                />
              )}
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 w-full">
            <h2 className="text-xl font-bold">Personal Details</h2>
            {serverError && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded mb-4 text-sm md:text-base">
                {serverError}
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={personalData.firstName}
                  onChange={(e) => handleInputChange(e, setPersonalData)}
                  className={`w-full rounded border p-2 text-sm md:text-base ${
                    personalErrors.firstName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {personalErrors.firstName && (
                  <p className="text-xs md:text-sm text-red-500 mt-1">
                    {personalErrors.firstName}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={personalData.lastName}
                  onChange={(e) => handleInputChange(e, setPersonalData)}
                  className={`w-full rounded border p-2 text-sm md:text-base ${
                    personalErrors.lastName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {personalErrors.lastName && (
                  <p className="text-xs md:text-sm text-red-500 mt-1">
                    {personalErrors.lastName}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2 w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={personalData.email}
                  onChange={(e) => handleInputChange(e, setPersonalData)}
                  className={`w-full rounded border p-2 text-sm md:text-base ${
                    personalErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {personalErrors.email && (
                  <p className="text-xs md:text-sm text-red-500 mt-1">
                    {personalErrors.email}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2 w-full">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (10 digits)"
                  value={personalData.phone}
                  onChange={(e) => handleInputChange(e, setPersonalData)}
                  className={`w-full rounded border p-2 text-sm md:text-base ${
                    personalErrors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {personalErrors.phone && (
                  <p className="text-xs md:text-sm text-red-500 mt-1">
                    {personalErrors.phone}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 w-full">
            <h2 className="text-xl font-bold">Online Assessment</h2>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              You must score more than 70% to proceed to the next step.
            </p>
            {(serverError || quizScoreError) && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded mb-4 text-sm md:text-base">
                {serverError || quizScoreError}
              </div>
            )}
            <div className="max-h-96 overflow-y-auto pr-2">
              {quizQuestions.map((questionObj, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium text-sm md:text-base">{`${
                    index + 1
                  }. ${questionObj.question}`}</p>
                  <select
                    value={quizData.answers[index]}
                    onChange={(e) => handleQuizAnswerChange(e, index)}
                    className={`mt-1 w-full rounded border p-2 text-sm md:text-base ${
                      quizErrors.answers ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select an answer</option>
                    <option value="a">Option A</option>
                    <option value="b">Option B</option>
                    <option value="c">Option C</option>
                    <option value="d">Option D</option>
                  </select>
                </div>
              ))}
              {quizErrors.answers && (
                <p className="text-xs md:text-sm text-red-500 mt-1">
                  {quizErrors.answers}
                </p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4 w-full">
            <h2 className="text-xl font-bold">Overseas Intake Application</h2>
            {serverError && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded mb-4 text-sm md:text-base">
                {serverError}
              </div>
            )}
            <div className="space-y-4">
              <div className="w-full">
                <select
                  name="destination"
                  value={intakeData.destination}
                  onChange={(e) => handleInputChange(e, setIntakeData)}
                  className={`w-full rounded border p-2 text-sm md:text-base ${
                    intakeErrors.destination
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select Destination</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                </select>
                {intakeErrors.destination && (
                  <p className="text-xs md:text-sm text-red-500 mt-1">
                    {intakeErrors.destination}
                  </p>
                )}
              </div>
              <div className="w-full">
                <select
                  name="program"
                  value={intakeData.program}
                  onChange={(e) => handleInputChange(e, setIntakeData)}
                  className={`w-full rounded border p-2 text-sm md:text-base ${
                    intakeErrors.program ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Program</option>
                  <option value="cs">Computer Science</option>
                  <option value="business">Business</option>
                  <option value="engineering">Engineering</option>
                </select>
                {intakeErrors.program && (
                  <p className="text-xs md:text-sm text-red-500 mt-1">
                    {intakeErrors.program}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="date"
                  name="intakeDate"
                  value={intakeData.intakeDate}
                  onChange={(e) => handleInputChange(e, setIntakeData)}
                  className={`w-full rounded border p-2 text-sm md:text-base ${
                    intakeErrors.intakeDate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  min={new Date().toISOString().split("T")[0]}
                />
                {intakeErrors.intakeDate && (
                  <p className="text-xs md:text-sm text-red-500 mt-1">
                    {intakeErrors.intakeDate}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-[140px] w-full px-4 md:px-0">
      {renderStepIndicators()}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[700px]">
        {finalData ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Submission Successful!</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm md:text-base">
              {JSON.stringify(finalData, null, 2)}
            </pre>
            <button
              onClick={handleReset}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm md:text-base"
            >
              Start Over
            </button>
          </div>
        ) : (
          <>
            {renderStepContent()}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 1 || loading}
                className={`px-4 py-2 rounded text-sm md:text-base ${
                  currentStep === 1 || loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={loading}
                className={`px-4 py-2 rounded text-sm md:text-base ${
                  loading
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {loading
                  ? "Processing..."
                  : currentStep === totalSteps
                  ? "Submit"
                  : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
