import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, googleLogin, resetPassword } from "../redux/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [resetError, setResetError] = useState(null);

  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Reset Password Validation Schema
  const resetValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = (values) => {
    dispatch(loginUser(values));
  };

  const handleResetSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(resetPassword(values.email)).unwrap();
      setResetSent(true);
      setResetError(null);
    } catch (error) {
      setResetError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
                                                        //  bg-[#ddeba862]
    <div className="pt-[50px] bg-[#5a7a9a]  "> 
      <section className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-black bg-opacity-80 p-5 py-10 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            Login
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                {/* Email Field */}
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:underline"
                    onClick={() => setShowResetModal(true)}
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
                  disabled={isSubmitting || loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                <p className="text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    className="text-blue-600 font-semibold "
                    onClick={() => navigate("/register")}
                  >
                    Create New
                  </button>
                </p>
              </Form>
            )}
          </Formik>

          {/* Google Sign-In */}
          <button
            onClick={() => dispatch(googleLogin())}
            className="bg-[#404040] text-white px-5 py-2 mt-4 rounded-full w-full hover:bg-[#333333] transition-all duration-300"
          >
            Sign in with Google
          </button>
        </div>
      </section>

      {/* Forgot Password Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full">
            <h3 className="text-xl font-bold mb-4">Reset Password</h3>
            
            {resetSent ? (
              <div>
                <p className="text-green-600 mb-4">
                  Password reset link has been sent to your email. Please check your inbox.
                </p>
                <button
                  className="bg-[#404040] text-white px-5 py-2 rounded-full w-full hover:bg-[#333333]"
                  onClick={() => {
                    setShowResetModal(false);
                    setResetSent(false);
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <Formik
                initialValues={{ email: "" }}
                validationSchema={resetValidationSchema}
                onSubmit={handleResetSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <p className="mb-4 text-gray-600">
                      Enter your email address and we'll send you a link to reset your password.
                    </p>
                    
                    {resetError && <p className="text-red-500 mb-2">{resetError}</p>}
                    
                    <div className="mb-4">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
                        onClick={() => setShowResetModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#404040] text-white px-4 py-2 rounded-full hover:bg-[#333333]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Reset Link"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;