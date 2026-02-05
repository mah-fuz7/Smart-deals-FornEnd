
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home.jsx'
import Rootlayouts from "../Layouts/Rootlayouts.jsx";
import Signin from '../Pages/Signin.jsx'
import Register from "../Pages/Register.jsx";
import Allproducts from '../Pages/Allproducts.jsx'
import Addproducts from '../Pages/Addproducts.jsx'
import Mybids from '../Pages/Mybids.jsx'
import Myproducts from '../Pages/Myproducts.jsx'
import Productsdetails from '../Pages/Productdetails.jsx'
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
            path:'/signin',
            Component:Signin
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
            Component:Mybids
        },
        {
            path:'/myproducts',
            Component:Myproducts
        },
        {
            path:'/productdetails',
            Component:Productsdetails
        },
        {
            path:'/addproducts',
            Component:Addproducts
        }
    ]
    
  },

]);

export default router;