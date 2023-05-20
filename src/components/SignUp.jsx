import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
 
const SignUp = () => (
  <div className="h-screen   pb-[8rem] flex flex-col justify-center items-center bg-primary font-poppins text-white" >
 
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
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
      {({ isSubmitting }) => (

        
        <Form
        className="flex flex-col space-y-5 w-[80%] sm:w-[30rem]"
        >

        <div className="flex p-2 justify-center  font-extrabold text-[2.9rem] sm:text-[3.9rem]" >Sign Up</div>

          <Field type="email" name="email"
          className="px-3 py-1  text-black rounded-md w-full h-10 "
          />
          <ErrorMessage name="email" component="div" />
          <Field type="password"
          placeholder="Enter Your Password"
          className="px-3 py-1 text-black rounded-md w-full h-10"
          name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" 
          className="text-xl rounded-md  px-5 py-2 bg-orange-400"
          disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUp;






// import React from 'react';
// import { useFormik } from 'formik';

// // A custom validation function. This must return an object
// // which keys are symmetrical to our values/initialValues
// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (values.firstName.length > 15) {
//     errors.firstName = 'Must be 15 characters or less';
//   }

//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   } else if (values.lastName.length > 20) {
//     errors.lastName = 'Must be 20 characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// const SignUp = () => {
//   // Pass the useFormik() hook initial form values, a validate function that will be called when
//   // form values change or fields are blurred, and a submit function that will
//   // be called when the form is submitted

  
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validate,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (

    
//     <div className="h-screen pb-[8rem] flex flex-col
//      justify-center items-center bg-primary font-poppins text-white">
//     <form onSubmit={formik.handleSubmit}
//     className="flex flex-col space-y-2"
//     >
//     <h1
//     className="text-[20px] sm:text-[30px] "
//     > Create Your Account !
//     </h1>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         className="bg-slate-400 p-3 hover:outline-dotted text-black h-5 sm:h-10 "
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         className="bg-slate-400 p-3 hover:outline-dotted text-black h-5 sm:h-10 "

//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         className="bg-slate-400 p-3 hover:outline-dotted text-black h-5 sm:h-10 "
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       {formik.errors.email ? <div>{formik.errors.email}</div> : null}

//       <button type="submit"
//       className="text-xl rounded-md  px-5 py-2 bg-orange-400"

//       >Submit
//       </button>




//     </form>
    
    
    
//     </div>
//   );
// };

// export default SignUp;


// {
//     IsLoggedIn ?(
//    <button 
//    className="bg-orange-500  px-[4px] py-[1px]  rounded-md  font-poppins"
//    onClick={() => loginWithRedirect()}>Log In
//    </button>
  
  
//     ):(
//       <button 
//       className="bg-orange-500  px-[4px] py-[1px]  rounded-md  font-poppins"
//       onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//      </button>
//     )
//   }