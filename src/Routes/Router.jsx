
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home.jsx'
import Rootlayouts from "../Layouts/Rootlayouts.jsx";
import Register from "../Pages/Register.jsx";
import Allproducts from '../Pages/Allproducts.jsx'
import Addproducts from '../Pages/Addproducts.jsx'
import Mybids from '../Pages/Mybids.jsx'
import Myproducts from '../Pages/Myproducts.jsx'
import Productsdetails from '../Pages/Productdetails.jsx'
import login from "../Pages/login.jsx";
import PrivateRoute from "../Private/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Rootlayouts></Rootlayouts>,
    errorElement:<div>This is error page</div>,
    children:[
        {
            path:'/',
            Component:Home
        },
        
        {
            path:'/register',
            Component:Register
        },
        {
            path:'/allproducts',
            Component:Allproducts
        },
        {
            path:'/mybids',
            // Component:Mybids
            element:<PrivateRoute>
                <Mybids></Mybids>
            </PrivateRoute>
        },
        {
            path:'/myproducts',
            // Component:Myproducts
            element:<PrivateRoute>
                <Myproducts></Myproducts>
            </PrivateRoute>
        },
        {
            path:'/productdetails',
            Component:Productsdetails
        },
        {
            path:'/addproducts',
            // Component:Addproducts
            element:<PrivateRoute>
                <Addproducts></Addproducts>
            </PrivateRoute>
        },
        {
          path:'/login',
          Component:login
        }
    ]
    
  },

]);

export default router;