import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/authSlice";

const MultiStepForm = () => {
  const data = useSelector((state) => state.authSlice.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States for tracking completed steps from database
  const [personalDetailsFromDB, setPersonalDetailsFromDB] = useState(null);
  const [quizIfPresent, setQuizIfPresent] = useState(false);
  const [intake, setIntake] = useState(false);

  // Add state for completed modal
  const [showCompletedModal, setShowCompletedModal] = useState(false);

  // Form state variables
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [finalData, setFinalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true); // New loading state for initial data fetch
  const [serverError, setServerError] = useState("");
  const totalSteps = 3;

  // Form data states
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

  // Error states
  const [personalErrors, setPersonalErrors] = useState({});
  const [quizErrors, setQuizErrors] = useState({});
  const [intakeErrors, setIntakeErrors] = useState({});
  const [quizScoreError, setQuizScoreError] = useState("");

  // Fetch user data and determine which steps to show
  useEffect(() => {
    const fetchUserData = async () => {
      setInitialLoading(true); // Set loading state to true before fetching
      try {
        const response = await axios.post(
          "https://api-prxc6of3fa-uc.a.run.app/initial-data-if-present",
          {
            email: data?.email,
          }
        );

        const userData = response.data.userData;

        // Check if personal details exist
        if (userData.personal) {
          setPersonalDetailsFromDB(userData.personal);
          // Update personal data state with DB values
          setPersonalData({
            firstName: userData.personal.firstName || "",
            lastName: userData.personal.lastName || "",
            email: data?.email ?? "",
            phone: userData.personal.phone || "",
          });

          // Mark personal details step as completed
          setCompletedSteps((prev) => new Set([...prev, 1]));

          // Automatically skip to step 2 if personal details exist
          setCurrentStep(2);
        }

        // Check if quiz is completed with passing score
        if (userData.quiz && userData.quiz.score >= 70) {
          setQuizIfPresent(true);
          // Mark quiz step as completed
          setCompletedSteps((prev) => new Set([...prev, 2]));

          // Automatically skip to step 3 if quiz is passed
          setCurrentStep(3);
        }

        // Check if intake data exists
        if (userData.intake) {
          setIntake(true);
          // Update intake data state with DB values
          setIntakeData({
            destination: userData.intake.destination || "",
            program: userData.intake.program || "",
            intakeDate: userData.intake.intakeDate || "",
          });
          // Mark intake step as completed
          setCompletedSteps((prev) => new Set([...prev, 3]));
        }

        // Check if all steps are completed and show modal
        if (
          userData.personal &&
          userData.quiz?.score >= 70 &&
          userData.intake
        ) {
          setShowCompletedModal(true);
        }
        // Determine which step to show initially based on completed steps
        else if (
          userData.personal &&
          userData.quiz?.score >= 70 &&
          !userData.intake
        ) {
          setCurrentStep(3); // Skip to intake step
        } else if (userData.personal && !userData.quiz?.score >= 70) {
          setCurrentStep(2); // Skip to quiz step
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setServerError("Failed to load user data. Please try again.");
      } finally {
        setInitialLoading(false); // Set loading state to false after fetching completes
      }
    };

    if (data?.email) {
      fetchUserData();
    } else {
      setInitialLoading(false); // If no email, we're not loading
    }
  }, [data?.email]);

  const quizQuestions = [
    {
      question: "Which number comes next in the series: 2, 4, 8, 16, ?",
      options: {
        a: "18",
        b: "20",
        c: "24",
        d: "32",
      },
      correctAnswer: "d",
    },
    {
      question: "If CAT is coded as DBU, what is DOG?",
      options: {
        a: "EPI",
        b: "DPI",
        c: "FQH",
        d: "EPH",
      },
      correctAnswer: "a",
    },
    {
      question: "Find the odd one out: Apple, Banana, Carrot, Mango",
      options: {
        a: "Apple",
        b: "Banana",
        c: "Carrot",
        d: "Mango",
      },
      correctAnswer: "c",
    },
    {
      question: "If ALL = 36 and ADD = 12, then what is DAD?",
      options: {
        a: "9",
        b: "12",
        c: "15",
        d: "18",
      },
      correctAnswer: "d",
    },
    {
      question: "Which of the following is the mirror image of 'M'? ",
      options: {
        a: "W",
        b: "N",
        c: "V",
        d: "M",
      },
      correctAnswer: "d",
    },
    {
      question: "What comes next in the pattern: A, C, F, J, O, ?",
      options: {
        a: "Q",
        b: "T",
        c: "U",
        d: "V",
      },
      correctAnswer: "b",
    },
    {
      question: "Which number is the odd one out: 9, 16, 25, 36, 49, 55",
      options: {
        a: "25",
        b: "36",
        c: "49",
        d: "55",
      },
      correctAnswer: "d",
    },
    {
      question: "If 1 = 5, 2 = 25, 3 = 325, what is 4?",
      options: {
        a: "4325",
        b: "425",
        c: "432",
        d: "None",
      },
      correctAnswer: "a",
    },
    {
      question: "Which word cannot be formed from 'TRANSPORT'?",
      options: {
        a: "SPORT",
        b: "TRAP",
        c: "RANT",
        d: "PORTAL",
      },
      correctAnswer: "d",
    },
    {
      question: "Which direction is opposite to North-East?",
      options: {
        a: "South",
        b: "South-West",
        c: "East",
        d: "North-West",
      },
      correctAnswer: "b",
    },
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
            "https://api-prxc6of3fa-uc.a.run.app/validatePersonal",
            personalData
          );
          if (response.data.success) {
            isValid = true;
          } else {
            setServerError(response.data.message);
            isValid = false;
          }
        }
      } else if (currentStep === 2) {
        isValid = validateQuizData();
        if (isValid) {
          const response = await axios.post(
            "https://api-prxc6of3fa-uc.a.run.app/validateQuiz",
            { email: personalData.email, answers: quizData.answers }
          );
          if (response.data.success) {
            setQuizScoreError("");
            isValid = true;
          } else {
            setQuizScoreError(response.data.message);
            isValid = false;
          }
        }
      } else if (currentStep === 3) {
        isValid = validateIntakeData();
        if (isValid) {
          const response = await axios.post(
            "https://api-prxc6of3fa-uc.a.run.app/submitIntake",
            { email: personalData.email, ...intakeData }
          );
          if (response.data.success) {
            setFinalData(response.data.data);
            isValid = true;
          } else {
            setServerError(response.data.message);
            isValid = false;
          }
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
    // Allow clicking on a step if it's completed or the current step
    // or if previous steps are completed (i.e., user can navigate linearly)
    const canAccessStep =
      step <= currentStep ||
      completedSteps.has(step) ||
      (step > 1 &&
        [...Array(step - 1).keys()]
          .map((i) => i + 1)
          .every((s) => completedSteps.has(s)));

    if (canAccessStep) {
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
    navigate(`/dashboard/${data?.email}`);
  };

  const handleGotoDashboard = () => {
    setShowCompletedModal(false);
    navigate(`/dashboard`);
  };

  // Completed steps modal component
  const CompletedModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <svg
              className="w-16 h-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            All Steps Completed!
          </h2>
          <p className="text-gray-600 mb-6">
            You have successfully completed all required steps of the
            application process.
          </p>
          <button
            onClick={handleGotoDashboard}
            className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );

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
                  readOnly={true}
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
            <div className="max-h-96 overflow-y-auto pr-2 pb-2 border border-gray-200 rounded">
              <div className="p-4 space-y-4">
                {quizQuestions.map((questionObj, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-medium text-sm md:text-base">{`${
                      index + 1
                    }. ${questionObj.question}`}</p>
                    <select
                      value={quizData.answers[index]}
                      onChange={(e) => handleQuizAnswerChange(e, index)}
                      className={`mt-1 w-full rounded border p-2 text-sm md:text-base ${
                        quizErrors.answers
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select an answer</option>
                      {Object.entries(questionObj.options).map(
                        ([key, value]) => (
                          <option key={key} value={key}>
                            {key.toUpperCase()}. {value}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                ))}
              </div>
              {quizErrors.answers && (
                <p className="text-xs md:text-sm text-red-500 mt-1 px-4">
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

  // Loading screen component
  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
      <div className="text-center p-6 max-w-sm mx-auto">
        <div className="mb-4">
          <svg
            className="animate-spin h-12 w-12 text-blue-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Loading your information
        </h3>
        <p className="text-sm text-gray-500">
          Please wait while we retrieve your application data...
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center pt-[140px] w-full px-4 md:px-0">
      {/* Show loading screen while initial data is being fetched */}
      {initialLoading && <LoadingScreen />}

      {/* Show completion modal if all steps are already completed */}
      {showCompletedModal && <CompletedModal />}

      {renderStepIndicators()}
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[700px]">
        {finalData ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Submission Successful!</h2>
            <button
              onClick={handleReset}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-sm md:text-base"
            >
              Go to Dashboard
            </button>
          </div>
        ) : (
          <>
            {renderStepContent()}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 1 || loading}
                className={`bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300 ${
                  currentStep === 1 || loading
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={loading}
                className={`bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
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
