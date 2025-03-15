import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";

// Validation Schemas
const personalDetailsSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
});

const quizSchema = Yup.object({
  answers: Yup.array()
    .of(Yup.string().required("Please select an answer"))
    .length(10, "All questions must be answered"),
});

const intakeSchema = Yup.object({
  destination: Yup.string().required("Please select a destination"),
  program: Yup.string().required("Please select a program"),
  intakeDate: Yup.date().required("Please select an intake date"),
});

// Quiz Questions with answers
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

const IndependentIntakeForm = () => {
  const data = useSelector((state) => state);
  const [currentStep, setCurrentStep] = useState(1);
  const [finalData, setFinalData] = useState(null);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [quizError, setQuizError] = useState("");
  const totalSteps = 3;

  // Formik instances
  const personalForm = useFormik({
    initialValues: { firstName: "", lastName: "", email: "", phone: "" },
    validationSchema: personalDetailsSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => handleNext(),
  });

  const quizForm = useFormik({
    initialValues: { answers: Array(10).fill("") },
    validationSchema: quizSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => handleNext(),
  });

  const intakeForm = useFormik({
    initialValues: { destination: "", program: "", intakeDate: "" },
    validationSchema: intakeSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: () => handleComplete(),
  });

  const getCurrentForm = () => {
    switch (currentStep) {
      case 1:
        return personalForm;
      case 2:
        return quizForm;
      case 3:
        return intakeForm;
      default:
        return null;
    }
  };

  const validateCurrentStep = async () => {
    const form = getCurrentForm();
    if (form) {
      await form.validateForm();
      return form.isValid; // Returns true only if there are no errors
    }
    return false;
  };

  // Calculate quiz score
  const calculateQuizScore = () => {
    const userAnswers = quizForm.values.answers;
    let correctCount = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correctCount++;
      }
    });

    return (correctCount / quizQuestions.length) * 100;
  };

  const handleNext = async () => {
    const form = getCurrentForm();
    if (!form) return;

    // Validate the form and show errors if any
    const isValid = await validateCurrentStep();

    if (isValid && currentStep < totalSteps) {
      // For quiz step, check if score is more than 75%
      if (currentStep === 2) {
        const score = calculateQuizScore();
        if (score <= 75) {
          setQuizError(
            `You scored ${score.toFixed(
              1
            )}%. You need more than 75% to proceed.`
          );
          return;
        } else {
          setQuizError("");
        }
      }

      setCompletedSteps((prev) => new Set(prev).add(currentStep));
      setCurrentStep(currentStep + 1);
    } else {
      // Touch all fields to show errors if validation fails
      const touched = Object.keys(form.values).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});

      // For arrays like answers, we need to mark each item as touched
      if (currentStep === 2) {
        touched.answers = Array(10).fill(true);
      }

      await form.setTouched(touched);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Clear quiz error when going back
      if (currentStep === 3) {
        setQuizError("");
      }
    }
  };

  const handleComplete = async () => {
    const form = getCurrentForm();
    if (!form) return;

    const isValid = await validateCurrentStep();

    if (isValid) {
      setCompletedSteps((prev) => new Set(prev).add(currentStep));
      setFinalData({
        personal: personalForm.values,
        quiz: {
          answers: quizForm.values.answers,
          score: calculateQuizScore(),
        },
        intake: intakeForm.values,
      });
    } else {
      const touched = Object.keys(form.values).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
      await form.setTouched(touched);
    }
  };

  const handleStepClick = (step) => {
    // Only allow navigation to previous or completed steps
    if (step <= currentStep || completedSteps.has(step)) {
      setCurrentStep(step);
      // Clear quiz error when changing steps
      if (currentStep === 2) {
        setQuizError("");
      }
    }
  };

  const renderStepIndicators = () => (
    <div className="flex justify-center items-center gap-2 mb-6">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
        (step, index) => (
          <React.Fragment key={step}>
            <div
              onClick={() => handleStepClick(step)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white
              transition-colors duration-300 relative ${
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
  );

  const renderStepContent = () => {
    const form = getCurrentForm();
    switch (currentStep) {
      case 1:
        return (
          <form onSubmit={form.handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold">Personal Details</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.values.firstName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={`w-full rounded border p-2 ${
                    form.touched.firstName && form.errors.firstName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {form.touched.firstName && form.errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.values.lastName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={`w-full rounded border p-2 ${
                    form.touched.lastName && form.errors.lastName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {form.touched.lastName && form.errors.lastName && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.errors.lastName}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={`w-full rounded border p-2 ${
                    form.touched.email && form.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {form.touched.email && form.errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.errors.email}
                  </p>
                )}
              </div>
              <div className="sm:col-span-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (10 digits)"
                  value={form.values.phone}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={`w-full rounded border p-2 ${
                    form.touched.phone && form.errors.phone
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {form.touched.phone && form.errors.phone && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.errors.phone}
                  </p>
                )}
              </div>
            </div>
          </form>
        );
      case 2:
        return (
          <form onSubmit={form.handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold">Online Assessment</h2>
            <p className="text-sm text-gray-600 mb-4">
              You must score more than 75% to proceed to the next step.
            </p>
            {quizError && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
                {quizError}
              </div>
            )}
            <div className="max-h-96 overflow-y-auto pr-2">
              {quizQuestions.map((questionObj, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium">{`${index + 1}. ${
                    questionObj.question
                  }`}</p>
                  <select
                    name={`answers[${index}]`}
                    value={form.values.answers[index]}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={`mt-1 w-full rounded border p-2 ${
                      form.touched.answers?.[index] &&
                      form.errors.answers?.[index]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select an answer</option>
                    <option value="a">Option A</option>
                    <option value="b">Option B</option>
                    <option value="c">Option C</option>
                    <option value="d">Option D</option>
                  </select>
                  {form.touched.answers?.[index] &&
                    form.errors.answers?.[index] && (
                      <p className="text-sm text-red-500 mt-1">
                        {form.errors.answers[index]}
                      </p>
                    )}
                </div>
              ))}
            </div>
          </form>
        );
      case 3:
        return (
          <form onSubmit={form.handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold">Overseas Intake Application</h2>
            <div className="space-y-4">
              <div>
                <select
                  name="destination"
                  value={form.values.destination}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={`w-full rounded border p-2 ${
                    form.touched.destination && form.errors.destination
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
                {form.touched.destination && form.errors.destination && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.errors.destination}
                  </p>
                )}
              </div>
              <div>
                <select
                  name="program"
                  value={form.values.program}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={`w-full rounded border p-2 ${
                    form.touched.program && form.errors.program
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select Program</option>
                  <option value="cs">Computer Science</option>
                  <option value="business">Business</option>
                  <option value="engineering">Engineering</option>
                </select>
                {form.touched.program && form.errors.program && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.errors.program}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="date"
                  name="intakeDate"
                  value={form.values.intakeDate}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={`w-full rounded border p-2 ${
                    form.touched.intakeDate && form.errors.intakeDate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  min={new Date().toISOString().split("T")[0]}
                />
                {form.touched.intakeDate && form.errors.intakeDate && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.errors.intakeDate}
                  </p>
                )}
              </div>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  const renderFinalData = () => {
    if (!finalData) return null;

    return (
      <div className="mt-6 p-4 bg-green-100 rounded border border-green-400">
        <h2 className="text-xl font-bold mb-4 text-green-800">
          Submission Complete!
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Personal Details:</h3>
            <p>
              Name: {finalData.personal.firstName} {finalData.personal.lastName}
            </p>
            <p>Email: {finalData.personal.email}</p>
            <p>Phone: {finalData.personal.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold">Quiz Results:</h3>
            <p>Score: {finalData.quiz.score.toFixed(1)}%</p>
          </div>
          <div>
            <h3 className="font-semibold">Intake Details:</h3>
            <p>Destination: {finalData.intake.destination.toUpperCase()}</p>
            <p>Program: {finalData.intake.program}</p>
            <p>
              Intake Date:{" "}
              {new Date(finalData.intake.intakeDate).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setFinalData(null);
            setCurrentStep(1);
            setCompletedSteps(new Set());
            personalForm.resetForm();
            quizForm.resetForm();
            intakeForm.resetForm();
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Start Over
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {!finalData && renderStepIndicators()}
      {!finalData ? (
        <>
          {renderStepContent()}
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded ${
                currentStep === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Back
            </button>
            <button
              onClick={currentStep === totalSteps ? handleComplete : handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {currentStep === totalSteps ? "Submit" : "Next"}
            </button>
          </div>
        </>
      ) : (
        renderFinalData()
      )}
    </div>
  );
};

export default IndependentIntakeForm;
