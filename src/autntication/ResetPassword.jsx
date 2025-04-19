import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ResetPassword = () => {
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [actionCode, setActionCode] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth();

  useEffect(() => {
    // Get the action code from the URL
    const urlParams = new URLSearchParams(location.search);
    const oobCode = urlParams.get("oobCode");
    
    if (oobCode) {
      setActionCode(oobCode);
      // Verify the password reset code is valid
      verifyPasswordResetCode(auth, oobCode)
        .then(() => {
          setVerifying(false);
        })
        .catch((error) => {
          setError("This password reset link is invalid or has expired. Please request a new one.");
          setVerifying(false);
        });
    } else {
      setError("No reset code found in URL. Please request a new password reset link.");
      setVerifying(false);
    }
  }, [location, auth]);

  // Validation schema for the new password
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await confirmPasswordReset(auth, actionCode, values.password);
      setSuccess(true);
      setError(null);
      // Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (verifying) {
    return (
      <div className="pt-[50px] bg-[#ddeba862]">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Verifying your request...
            </h2>
            <p className="text-gray-600">Please wait while we verify your password reset link.</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-[50px] bg-[#ddeba862]">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Password Reset Error
            </h2>
            <p className="text-red-500 mb-6">{error}</p>
            <button
              onClick={() => navigate("/login")}
              className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
            >
              Return to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="pt-[50px] bg-[#ddeba862]">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Password Reset Successful
            </h2>
            <p className="text-green-600 mb-6">
              Your password has been reset successfully. You will be redirected to the login page.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[50px] bg-[#ddeba862]">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Reset Your Password
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Please enter your new password below.
          </p>

          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="New Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Resetting..." : "Reset Password"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;