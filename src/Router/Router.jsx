import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";
import QuickStart from "../Pages/QuickStart/QuickStart";
import Error from "../Pages/Error/Error";
import Components from "../Pages/Components/Components";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/quickStart',
                element: <QuickStart />
            },
            {
                path: '/components',
                element: <Components />
            }
        ]
    }
])

export default router