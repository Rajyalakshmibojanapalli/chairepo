import { useDispatch, useSelector } from "react-redux";
import { registerUser, googleLogin } from "../redux/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  return (
    <div className="pt-[50px] bg-[#5a7a9a]">
      <section className="min-h-screen flex items-center justify-center px-4 md:px-0">
        <div className="bg-black bg-opacity-80 p-5 py-10 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
            Register
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4">
                {/* Name Field */}
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
                  disabled={isSubmitting || loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-center text-sm text-blue-600 mt-4">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-gray-600 font-semibold"
            >
              Login here
            </button>
          </p>
          <button
            onClick={() => dispatch(googleLogin())}
            className="bg-[#404040] text-white px-5 py-2 rounded-full w-full mt-4 hover:bg-[#333333]  transition-all duration-300 "
          >
            Sign in with Google
          </button>
        </div>
      </section>
    </div>
  );
};

export default Register;
