import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/MainLayout/MainLayout";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import About from "../components/About/About";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router