import React from "react";
import { Formik } from "formik"; // import Formik from formik
import * as Yup from "yup"; // import Yup from yup
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// create a schema for validation
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate(-1);
    }, 0);
  }
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // call handleNavigate and pass input filed data
          handleNavigate(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="bg-primary  text-white font-poppins flex justify-center items-center h-screen ">
       
            <div className="bg-slate-800 rounded-lg  px-3 py-10 w-[85%] sm:w-[30%] ">
            
              {/* Passing handleSubmit parameter to html form onSubmit property */}
              <form
                className="flex flex-col gap-1 sm:gap-2"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="flex p-2 justify-center  font-extrabold text-[2.9rem] sm:text-[3.9rem]">
                  Login
                </div>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter your email"
                  className=" px-3 py-1 text-black rounded-md w-full h-10"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="text-red-500">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* input with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className=" px-3 py-1 text-black rounded-md w-full h-10"
                />
                {/* If validation is not passed show errors */}
                <p className="text-red-500">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button
                  type="submit"
                  className="w-full h-10 font-bold bg-green-500 rounded-md "
                >
                  Login
                </button>
              </form>

              <div className="bg-slate-800 flex mx-2 mt-5 gap-3 items-center justify-center ">
                <h2 className="text-red-500 text-lg  sm:text-xl">
                  Dont Have An Account ?{" "}
                </h2>
                <Link to="/signup">
                  <p className="underline">Sign Up</p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
