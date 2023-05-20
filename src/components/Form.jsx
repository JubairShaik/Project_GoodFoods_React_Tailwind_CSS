import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
 

const Form = () => (
  <div className="h-screen pb-[8rem] flex flex-col justify-center items-center bg-primary font-poppins text-white">
    <h1
    className="text-[20px] sm:text-[30px] "
    >Sign in into Your Account !
    </h1>
    <Formik 
    className=" bg-slate-900 "
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}
        className="flex flex-col space-y-5 w-[30rem]"
        >
          <input
            type="email"
            name="email"
            className=" p-3 hover:outline-dotted text-black h-5 sm:h-10 "
            placeholder="Enter Your Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            autoComplete="off"
            className=" p-3 hover:outline-dotted text-black h-5 sm:h-10 "
            placeholder="Enter Your Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          
          {errors.password && touched.password && errors.password}
          <button className="text-xl rounded-md  px-5 py-2 bg-orange-400" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>

    <div className="flex items-center">
    <h3 className="text-[20px]">Dont Have Any Account ? </h3>
    <Link to="/SignUp">
    <span className="underline">Create Account</span>
    </Link>
    </div>
  </div>
);

export default Form;