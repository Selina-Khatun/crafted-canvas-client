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
import PrivateRoute from "./PrivateRoute";
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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myCraft',
                element: <PrivateRoute><MyCraft></MyCraft></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/crafts')
            },
            {
                path: '/allCraft',
                element: <PrivateRoute><AllArt></AllArt></PrivateRoute>
            },
            {
                path: '/addCraft',
                element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateCraft></UpdateCraft></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
            }

        ]
    },
]);
export default router;
