import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home";
import ErrorPage from "../../pages/error";
import Layout from "../layout";
import TestPage from "../../pages/TestPage";

const routes = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: "/",
                element: <HomePage />,
                errorElement: <ErrorPage />
            },
            {
                path: "/test",
                element: <TestPage />,
                errorElement: <ErrorPage />
            }
        ]
    }
]);

export default routes;