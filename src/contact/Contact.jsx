import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import AnimatedTestimonials from "../global/AnimatedTestimonials";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
        .required("Phone is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("Form submitted successfully!");
      resetForm();
    },
  });
  return (
    <div className="pt-[120px] bg-[#f5f5f5]">
      <section
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/48/f1/de/48f1de53e34974c4fb28c8b1e98923aa.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
        className="h-[200px] m-4 rounded-lg flex items-center justify-center relative overflow-hidden md:h-[250px]"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <h1 className="text-center text-4xl text-[#ffff] font-semibold md:text-6xl relative z-10">
          CONTACT US
        </h1>
      </section>

      <section className=" flex flex-col gap-10 md:gap-0 md:flex-row relative p-4 py-10  bg-[#c7de6e] ">
        <div className="w-full md:w-3/5 flex flex-col gap-6 flex-col justify-center items-center">
          <div>
            <h2 className="text-5xl font-bold text-left mt-10 md:mt-0">
              INU CHOOSE
            </h2>

            <div className="flex items-center gap-3  mt-2">
              <MdLocationOn className="text-2xl text-gray-700" />
              <p className="text-left text-xl font-medium">
                123 Street, City, Country
              </p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <AiOutlinePhone className="text-2xl text-gray-700" />
              <p className="text-left text-lg">+91 99999 99999</p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <AiOutlineMail className="text-2xl text-gray-700" />
              <p className="text-left text-lg">support@example.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form (65% width on larger screens) */}
        <div className="w-full md:w-3/5 flex flex-col justify-start  gap-6  bg-[#ffffff] pt-10 pb-20 px-2 rounded-lg">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-3 rounded"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500">{formik.errors.name}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border p-3 rounded"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}

            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="border p-3 rounded"
              {...formik.getFieldProps("phone")}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500">{formik.errors.phone}</p>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              className="border p-3 rounded"
              rows="4"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500">{formik.errors.message}</p>
            )}

            <button
              type="submit"
              className="bg-[#404040] text-white px-5 py-2 rounded-full hover:bg-[#333333] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <section className="p-4 py-10">
        <h3 className="text-3xl font-semibold md:text-6xl text-center">
          Testmonials
        </h3>
        <AnimatedTestimonials />
      </section>
    </div>
  );
};

export default Contact;
