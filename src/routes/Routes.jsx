import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../MainLayouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyCraft from "../pages/MyCraft/MyCraft";
import AllArt from "../pages/AllArt/AllArt";
import AddCraft from "../pages/AddCraft/AddCraft";
import UpdateCraft from "../pages/MyCraft/UpdateCraft";
import Details from "../pages/AllArt/Details";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/myCraft',
                element:<MyCraft></MyCraft>,
                loader:()=>fetch('http://localhost:5000/crafts')
            },
            {
                path:'/allCraft',
                element:<AllArt></AllArt>
            },
            {
                path:'/addCraft',
                element:<AddCraft></AddCraft>
            },
            {
                path:'/update/:id',
                element: <UpdateCraft></UpdateCraft>,
                loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path:'/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
            }
            
        ]
    },
]);
export default router;
