import React, { useEffect } from "react";
import styles from './style';
import { Billing, Bussiness,ControlledCarousel,Header,CardDeal, Clients, CTA, Footer, Navbar, Stats,
   Testimonials, Error, Hero ,Underconstruction,QnA,RestaurantDetail, Apidata, Aboutus } from "./components";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contactus from './components/Contactus';
import {useContext,useState } from "react";
import {Provider} from "react-redux";
import store from "./utils/store";
import Cartpage from './components/Cartpage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Body from './components/Body';
import Bodymenu from './components/Bodymenu';
// import Apidata from './components/Apidata';
import "aos/dist/aos.css";
import AOS from "aos";
// import Clients from './components/Clients';
 


   
 const App = () => {
  
  useEffect(() => {
    AOS.init({
      once: false,
    });
  });
  
 



  return(



    <Provider store={store}>
       
           <div className="bg-primary md:px-[3rem]  w-full overflow-hidden"> 
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div
                
                className={`${styles.boxWidth} `}>
                <div
                data-aos="fade-down" data-aos-duration="800" data-aos-delay="800"
                >
                <Navbar/>
                </div>
                  </div>
              </div>    
              <div
               className={`bg-primary ${styles.flexStart}`}>
                <div
                className={`${styles.boxWidth} `}>
                  <Hero/>
                   <Outlet/>
                </div>
              </div>


              <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                

               <div data-aos="fade-down" data-aos-duration="400" data-aos-delay="300">
                <Stats />
               </div>



               <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="500">
                 <Body/> 
               </div>
                 
    
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      

                
               <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="500">
               <QnA/>
               </div>

               
            
    
                <CardDeal />
                <Testimonials />
                <Clients />
                <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="500">
                 <CTA />
               </div>

               <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="900">
                <Footer />
               </div>
                </div>
              </div>
          
         </div>
         
    </Provider>
     );

 }
export default App;





export const appRouter = createBrowserRouter([
  
  {
    path: "/",
    element:<App/>,
    errorElement:<Error/>,
  },
  
 
  
  {
    path:"/Aboutus",
    element:<Aboutus/>,
    errorElement:<Error/>
  },
  {
    path:"/billing",
    element:<Billing/>,
    errorElement:<Error/>
  },

  
  {
    path:"/contactus",
    element:<Contactus/>,
    errorElement:<Error/>
  },

    // {
    //   path:"/restaurant/:resId",
    //   element:<RestaurantDetail/>,
    //   errorElement:<Error/>,
    // },
    {
      path:"/restaurant/:resId",
      element:<Bodymenu/>,
      errorElement:<Error/>,
    },

    {
      path:"/Underconstruction",
      element:<Underconstruction/>,
      errorElement:<Error/>
    },
    {
      path:"/apidata",
      element:<Apidata/>,
      errorElement:<Error/>,
      
    },
    {
      path:"/Cartpage",
      element:<Cartpage/>,
      errorElement:<Error/>,
      
    },

    {
      path: "login",
      element: <Login />,
    },
    {
      path:"/signup",
      element:<SignUp/>,
      errorElement:<Error/>
    },

    // {
    //   path:"/signup",
    //   element:<Clients/>,
    //   errorElement:<Error/>
    // },







    // {
    //   path:"/form",
    //   element:<Form/>,
    //   errorElement:<Error/>
    // },
    
  







]);
