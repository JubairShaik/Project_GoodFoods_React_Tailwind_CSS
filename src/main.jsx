import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
 
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import {appRouter} from './App' ;
import {Provider} from "react-redux" ;
import store from "./utils/store";
 



// const handleContextMenu = (event) => {
//   event.preventDefault();
// };

 

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <Provider store={store}>
 
  <RouterProvider router={appRouter} />
  </Provider>  
 
  
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