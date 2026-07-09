import { createBrowserRouter } from "react-router"
import { LoginPage } from "./LoginPage"
import { DashboardPage } from "./DashboardPage"

export const router = createBrowserRouter([
    {path: "/", element: <DashboardPage />},
    {path: "/login", element: <LoginPage />},
]) 