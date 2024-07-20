import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./style";
import {
  Billing,
  Bussiness,
  CardDeal,
  CTA,
  Navbar,
  Stats,
  Testimonials,
  Error,
  Hero,
  Underconstruction,
  Questions,
  Aboutus,
  MockBody,
  Bodymenu,
  Cartpage,
  MarqueeLogo,
  Restaurants,
  SignUp,
  Login,
  Footer
} from "@components";
import { BrowserRouter as Router, Routes, Route ,createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import "aos/dist/aos.css";
import AOS from "aos";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Restaurants from './components/RealtimeData_cors/Restaurants';





const App = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  });

  return (
    <Provider store={store}>
      <ToastContainer />
      <div className="bg-primary md:px-[2.7rem]  w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} `}>
            <div
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="800"
            >
              <Navbar />
            </div>
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} `}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} my-5`}>
            <div
              data-aos="fade-down"
              data-aos-duration="400"
              data-aos-delay="300"
            >
              <Stats />
            </div>

           
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="500"
            >
              <MockBody />
            </div>

            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />

            <CardDeal />
            
            <Testimonials />

            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="500"
            >
              <Questions />
            </div>

            <MarqueeLogo />

            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="500"
            >
              <CTA />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="900"
            >
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

const LoginWrapper = () => <Login />;
const SignUpWrapper = () => <SignUp />;

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/restaurant/:resId" element={<Bodymenu />} />
        <Route path="/Underconstruction" element={<Underconstruction />} />
        <Route path="/Cartpage" element={<Cartpage />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/signup" element={<SignUpWrapper />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default RouterComponent;



export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
    errorElement: <Error />,
  },
  {
    path: "/restaurant/:resId",
    element: <Bodymenu />,
    errorElement: <Error />,
  },

  {
    path: "/Underconstruction",
    element: <Underconstruction />,
    errorElement: <Error />,
  },
  {
    path: "/Cartpage",
    element: <Cartpage />,
    errorElement: <Error />,
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
]);
