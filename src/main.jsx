import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Error from './components/Error';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Aboutus from './components/Aboutus';
import Apidata from './components/Apidata';
import Contactus from './components/Contactus';
import {appRouter} from './App' ;
import {Provider} from "react-redux" ;
import store from "./utils/store";
import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const  clientId = process.env.REACT_APP_AUTH0_CLIENT_ID   ;


ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain="webdevmastery.us.auth0.com"
  clientId="o021gyUaiDqq77CK4g8ITErSzh0zeFkj"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <Provider store={store}>
  <RouterProvider router={appRouter} />
  </Provider>  
  </Auth0Provider>
  
);











{/*

   children:[
      {
        path:"/Header",
        element:<Header />,
        errorElement:<Error/>
      },
      {
        path:"/Stats",
        element:<Stats />,
        errorElement:<Error/>
      },   
      {
        path:"/Apidata",
        element:<Apidata/>,
        errorElement:<Error/>
      },
      {
        path:"/title",
        element:<title />,
        errorElement:<Error/>
      },
      {
        path:"/Bussiness",
        element:<Bussiness />,
        errorElement:<Error/>
      },
      {
        path:"/Billing",
        element:<Billing />,
        errorElement:<Error/>
      },
      {
        path:"/CardDeal",
        element:<CardDeal/>,
        errorElement:<Error/>
      },
      {
        path:"/Testimonials",
        element:<Testimonials/>,
        errorElement:<Error/>
      },
],

*/}