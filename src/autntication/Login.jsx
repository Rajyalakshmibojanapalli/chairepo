import { useDispatch, useSelector } from "react-redux";
import { loginUser, googleLogin } from "../redux/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  // Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(loginUser(values));
  };

  return (
    <div className="pt-[50px] bg-[#ddeba862] ">
      <section className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white  p-5 py-10 rounded-lg shadow-md w-96">
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
                    className="text-[#121212] font-semibold "
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
            className="bg-[#404040] text-white px-5 py-2 mt-4 rounded-full w-full hover:bg-[#333333]  transition-all duration-300"
          >
            Sign in with Google
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
