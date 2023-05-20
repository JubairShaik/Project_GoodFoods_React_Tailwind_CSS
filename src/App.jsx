import styles from './style';
import { Billing, Bussiness,ControlledCarousel,Header,CardDeal, Clients, CTA, Footer, Navbar, Stats,
   Testimonials, Error, Hero ,Underconstruction,Gallery,RestaurantDetail, Apidata, Aboutus } from "./components";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contactus from './components/Contactus';
import {useContext,useState } from "react";
import UserContext  from "./utils/userContext"
import {Provider} from "react-redux";
import store from "./utils/store";
import Cartpage from './components/Cartpage';
import Login from './components/Login';
import SignUp from './components/SignUp';

 


   
 const App = () => {
  
 


  return(



    <Provider store={store}>
       
           <div className="bg-primary md:px-[3rem]  w-full overflow-hidden"> 
              <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div  className={`${styles.boxWidth} `}>
                
                  <Navbar/>
                  </div>
              </div>    
              <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth} `}>
                  <Hero/>
                  <Outlet/>
                </div>
              </div>
              <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                 
                <Header/>
             
                <Stats />
                <Apidata/>
    
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      
                <Gallery/>
                <Billing/>
                <Bussiness/>
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
                
                
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
    path:"/contactus",
    element:<Contactus/>,
    errorElement:<Error/>
  },

    {
      path:"/restaurant/:resId",
      element:<RestaurantDetail/>,
      errorElement:<Error/>,
      // childen:[{
      //   {
      //     path:"/Aboutus",
      //     element:<Aboutus/>,
      //     errorElement:<Error/>
      //   }
      // }]
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
    //   path:"/form",
    //   element:<Form/>,
    //   errorElement:<Error/>
    // },
    
  







]);
