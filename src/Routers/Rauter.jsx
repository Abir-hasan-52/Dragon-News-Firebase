import { createBrowserRouter } from "react-router";
import HomeLayOut from "../Layouts/HomeLayOut";
import Home from "../Pages/Home";
import CategoryNews from "../Components/CategoryNews";
import Login from "../Components/Login";
import Register from "../Components/Register";
import AuthLayOut from "../Layouts/AuthLayOut";

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
                // HydrateFallback:<span className="loading loading-dots loading-xl"></span>,
                loader: ()=>fetch("/news.json"),
                
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
        path:"/news",
        element: <h1>News</h1>,
    },
    {
        path:"/*",
        element: <h1>404</h1>,
    }
]);

export default router;