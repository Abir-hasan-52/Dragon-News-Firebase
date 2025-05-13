import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut";
import Home from "../Pages/Home";
import CategoryNews from "../Components/CategoryNews";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AuthLayOut from "../Layouts/AuthLayOut";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./Privateroute";
import Loading from "../Components/Loading";

const router=createBrowserRouter([
    {
        path: "/",
        element:  <HomeLayOut></HomeLayOut>,
        children:[
            {
                path: "/",
                Component: Home,
            },
            {
                path:"/category/:id",
                Component:CategoryNews,
                
                loader: ()=>fetch("/news.json"),
                hydrateFallbackElement:<Loading></Loading>,
                
            },
        ]
    },
    {
        path:"/auth",
        element: <AuthLayOut></AuthLayOut>,
        children:[
            {
                path:"/auth/login",
                Component:Login,
            },
            {
                path:"/auth/register",
                Component:Register,
            },
        ]

    },
    {
        path:"/news-details/:id",
        element:<PrivateRoute>
            <NewsDetails></NewsDetails>
            </PrivateRoute>,
        loader:()=>fetch("/news.json"),
        hydrateFallbackElement:<Loading></Loading>
    },
    {
        path:"/*",
        element: <h1>404</h1>,
    }
]);

export default router;