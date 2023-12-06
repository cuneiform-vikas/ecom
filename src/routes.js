import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./modules/LandingPage";

export const routes = createBrowserRouter([
    {
        path: "/",
        exact: true,
        element: <LandingPage />,
    }
])